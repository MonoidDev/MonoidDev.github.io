import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';
import { i18nMiddleware } from './i18n';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

express()
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		i18nMiddleware(),
		sapper.middleware(),
	)
	.listen(PORT, () => {
		console.log(`Listening on http://localhost:${PORT}`)
	});
