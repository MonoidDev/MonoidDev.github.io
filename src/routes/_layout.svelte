<script lang="ts">
	import Nav from '../components/Nav.svelte';
	import GlobalStyle from "../components/GlobalStyles.svelte";

  import { isLoading, waitLocale } from 'svelte-i18n';
  export async function preload(page) {
    return waitLocale();
  }

	export let segment: string;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

{#if $isLoading}
  <div class="loading">Loading...</div>
{:else}
	<Nav {segment}/>

	<main>
		<GlobalStyle />
		<slot />
	</main>
{/if}
