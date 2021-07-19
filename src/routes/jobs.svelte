<script>
  import logo from 'images/logo.png';
  import { _ } from 'svelte-i18n';
	import { i } from '../stores/i18n';
  import { fade } from 'svelte/transition';
	import Button from '../components/Button.svelte';

</script>

<style type="text/postcss">
  img.logo {
    @apply w-96 h-96 self-center;
  }

  section {
    /* @apply flex bg-gray-50 p-12 m-12; */
    min-height: 30vh;

    @apply p-6 overflow-hidden;
  }

  p {
    @apply mb-3;
  }

  .content {
    @apply max-w-5xl mx-auto flex flex-col;
  }

  h1 {
    @apply font-sans text-4xl;
  }

  a:hover {
    @apply text-gray-200;
  }

</style>

<svelte:head>
  <title>{$_('companyName')} - {$_('nav.jobs')}</title>
</svelte:head>

<section
	style="min-height: initial; padding: 0.5rem"
	transition:fade="{{ duration: 300 }}"
>
	<div class="content">
		<img alt="Logo" src="{logo}" height={144} width={144} />
	</div>
</section>


<section
  class="bg-gray-50 relative"
	transition:fade="{{ duration: 300 }}"
>
  <div class="content p-6">
    <h1>
			{$i({
				en: 'We are HIRING',
				'zh-cn': '寻找人才',
			})}
    </h1>
    
    <div
      class="m-6 text-gray-700"
    >
      <p>
        👋
				{$i({
					en: 'We are looking for friends to join our creative community!',
					'zh-cn': '我们正在招贤纳士！',
				})}
      </p>

			<p>
				{$i({
					en: 'You will have plenty of freedom to adjust your worktime, seek for new ideas and make great applications!',
					'zh-cn': '我们有弹性的工作时间、应用最新的技术、创造最好的应用。',
				})}
			</p>
    </div>

		<h2>
			👬
			{$i({
				en: 'Backend Engineer',
				'zh-cn': '后端工程师',
			})}
		</h2>

		<div
			class="m-6 text-gray-700"
		>
			<p>
				❤️
				{$i({
					en: 'Love for technology',
					'zh-cn': '热爱科技，喜欢钻研',
				})}
			</p>

			<p>
				💻
				{$i({
					en: 'Python, SQL and Django skills',
					'zh-cn': '掌握 Python, SQL 和 Django',
				})}
			</p>

			<p>
				🌍
				{$i({
					en: 'English is a must, better to know intermediate Japanese.',
					'zh-cn': '熟练掌握英语，会日语更好！',
				})}
			</p>

			<a href="mailto:ymao@monoidtech.com" class="mt-6 block">
				<Button title="Apply Now" />
			</a>
	
		</div>

		<h2>
			👬
			{$i({
				en: 'Frontend Engineer',
				'zh-cn': '前端工程师',
			})}
		</h2>


		<div
			class="m-6 text-gray-700"
		>
			<p>
				❤️
				{$i({
					en: 'TypeScript maniac',
					'zh-cn': '热爱 TypeScript',
				})}
			</p>

			<p>
				💻
				{$i({
					en: 'React is a must, great to know React Native. Experience in other frameworks is welcome.',
					'zh-cn': '掌握 React，会 React Native 有加分。欢迎其他框架的经验！',
				})}
			</p>

			<p>
				❤️
				{$i({
					en: 'Happy to know you like to play with language tools (Webpack, Babel, Rollup, even Vite...) and strive to minimize the bundle size.',
					'zh-cn': '喜欢把玩前端工具链，了解 Webpack, Babel, Rollup 等，对优化有执着之心。',
				})}
			</p>

			<p>
				🌍
				{$i({
					en: 'English is a must, better to know intermediate Japanese.',
					'zh-cn': '熟练掌握英语，会日语更好！',
				})}
			</p>

			<a href="mailto:ymao@monoidtech.com" class="mt-6 block">
				<Button title="Apply Now" />
			</a>
		</div>

  </div>
</section>
