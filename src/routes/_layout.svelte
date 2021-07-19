<script lang="ts">
  import Nav from '../components/Nav.svelte';
  import GlobalStyle from "../components/GlobalStyles.svelte";
  import { _ } from 'svelte-i18n';

  import logo from 'images/logo.png';

  export let segment: string;
</script>

<style type="text/postcss">
  footer {
    background: linear-gradient(to right, #3a1c71, #d76d77, #ffaf7b);
  }
</style>

<svelte:head>
  <link rel="icon" type="image/png" href="{logo}" />
  <meta
    name="description"
    content="{$_("description")}"
  />
</svelte:head>

<Nav {segment}/>

<GlobalStyle />
<slot />

<footer class="footer p-6 flex flex-col items-center text-gray-200">
  © {new Date().getFullYear()} G.K. Monoid
</footer>