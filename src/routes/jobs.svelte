<script>
  import logo from 'images/logo.png';
  import { _ } from 'svelte-i18n';
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
  <title>G.K. Monoid - Jobs</title>
</svelte:head>

<section style="min-height: initial; padding: 0.5rem">
	<div class="content">
		<img alt="Logo" src="{logo}" height={144} width={144} />
	</div>
</section>


<section
  class="bg-gray-50 relative"
>
  <div class="content p-6">
    <h1>
      We are Hiring
    </h1>
    
    <div
      class="m-6 text-gray-700"
    >
      <p>
        👋 We are looking for friends to join our creative community!
      </p>

			<p>
				You will have plenty of freedom to adjust your worktime, seek for new ideas and make great applications!
			</p>
    </div>

		<h2>
			👬 Backend Engineer
		</h2>

		<div
			class="m-6 text-gray-700"
		>
			<p>
				❤️ Love for technology
			</p>

			<p>
				💻 Python, SQL and Django skills
			</p>

			<p>
				🌍 English is a must, better to know intermediate Japanese.
			</p>

			<a href="mailto:ymao@monoidtech.com" class="mt-6 block">
				<Button title="Apply Now" />
			</a>
	
		</div>

		<h2>
			👬 Frontend Engineer
		</h2>


		<div
			class="m-6 text-gray-700"
		>
			<p>
				❤️ TypeScript maniac
			</p>

			<p>
				💻 React is a must, great to know React Native. Experience in other frameworks is welcome.
			</p>

			<p>
				❤️ Happy to know you like to play with language tools (Webpack, Babel, Rollup, even Vite...) and strive to minimize the bundle size.
			</p>

			<p>
				🌍 English is a must, better to know intermediate Japanese.
			</p>

			<a href="mailto:ymao@monoidtech.com" class="mt-6 block">
				<Button title="Apply Now" />
			</a>
		</div>

  </div>
</section>
