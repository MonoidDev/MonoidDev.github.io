import {
	addMessages,
	init,
  getLocaleFromHostname,
	locale as $locale,
	locales as $locales,
} from 'svelte-i18n';

import type {
	Request,
	Response,
} from 'express';

import en from '../messages/en.json';
import zhCn from '../messages/zh-cn.json';
import ja from '../messages/ja.json';

export const INIT_OPTIONS = {
	fallbackLocale: 'en',
	initialLocale: null,
	loadingDelay: 200,
	formats: {},
	warnOnMissingMessages: true,
};

let currentLocale = null;

addMessages('en', en);
addMessages('zh-cn', zhCn);
addMessages('ja', ja);

export const availableLocales = ['en', 'zh-cn', 'ja'];

$locale.subscribe((value) => {
	if (value == null) return;
	currentLocale = value;
});

const getFirstMatch = (base: string, pattern: RegExp) => {
  const match = pattern.exec(base);

  if (!match) return null;

  return match[1] || null;
};

export function getLocale(hostname: string) {
	const hostnamePrefix = getFirstMatch(hostname, /^([a-zA-Z-]+)\./);
	return availableLocales.includes(hostnamePrefix) ? hostnamePrefix : null;
};

// initialize the i18n library in client
export function startClient() {
	const hostnamePrefix = getLocale(window.location.hostname);

	init({
		...INIT_OPTIONS,
		initialLocale: availableLocales.includes(hostnamePrefix) ? hostnamePrefix : undefined,
	});
}

// init only for routes (urls with no extensions such as .js, .css, etc) and for service worker
const DOCUMENT_REGEX = /(^([^.?#@]+)?([?#](.+)?)?|service-worker.*?\.html)$/;
// initialize the i18n library in the server and returns its middleware
export function i18nMiddleware() {
	// initialLocale will be set by the middleware
	init(INIT_OPTIONS);

	return (req: Request, res: Response, next) => {
		const isDocument = DOCUMENT_REGEX.test(req.originalUrl);
		// get the initial locale only for a document request
		if (!isDocument) {
			next();
			return;
		}

		let locale: string | null = null;

		// If the user has already given the language in the hostname, respect the path
		locale = getLocale(req.hostname);

		if (locale) {
			$locale.set(locale);
			next();
			return;
		}

		if (req.headers['accept-language']) {
			const headerLang: string = req.headers['accept-language'].split(',')[0].trim();
			if (headerLang.length > 1) {
				locale = availableLocales.find((available) => available.toLowerCase() === headerLang.toLowerCase()) ?? null;
			}

			if (locale !== null && locale !== 'en') {
				res.redirect(301, `${req.protocol}://${locale}.${req.get('host')}${req.originalUrl}`);
				return;
			}
		} else {
			locale = INIT_OPTIONS.initialLocale || INIT_OPTIONS.fallbackLocale;
		}

		if (locale !== null && locale !== currentLocale) {
			$locale.set(locale);
		}

		next();
		return;
	};
};
