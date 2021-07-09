<script lang="typescript">
  import { _ } from 'svelte-i18n';

  export let segment: string;

  interface Page {
    value: string;
    label: string;
  }

  let pages: Page[];
  $: pages = [
    {
      value: 'home',
      label: $_('nav.home'),
    },
    {
      value: 'jobs',
      label: $_('nav.jobs'),
    },
  ];
</script>

<style type="text/postcss">
  nav {
    @apply border-b border-gray-200 font-mono;
  }

  ul {
    @apply m-0 p-0 max-w-5xl mx-auto;
  }

  /* clearfix */
  ul::after {
    content: '';
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: '';
    width: calc(100% - 1em);
    height: 2px;
    display: block;
    bottom: -1px;

    @apply bg-gray-700;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>

<nav>
  <ul>
    {#each pages as page}
      <li>
        <a
          aria-current="{
            (segment === page.value || (segment === undefined && page.value === 'home')) 
              ? 'page' : undefined
          }"
          href="{page.value === 'home' ? '.' : page.value}"
        >
          {page.label}
        </a>
      </li>
    {/each}
  </ul>
</nav>
