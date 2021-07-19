<script lang="typescript">
  import { locale, locales, _ } from 'svelte-i18n';

  import { fade } from 'svelte/transition';

  import Menu from './Menu.svelte';

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

  let languagesMenuOpen = false;
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

  li.right {
    float: right;

    @apply relative;
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

  .button {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }

  .menu-container {
    @apply absolute right-0;
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
          class="button"
          href="{page.value === 'home' ? '.' : page.value}"
        >
          {page.label}
        </a>
      </li>
    {/each}

    <li class="right">
      <button
        on:click={() => languagesMenuOpen = !languagesMenuOpen}
        class="button"
        style="color: #666"
      >
        🌍 {$_('nav.languages')}
      </button>

      {#if languagesMenuOpen}
        <div class="menu-container" transition:fade="{{ duration: 100 }}">
          <Menu
            menus={$locales.map((item) => ({
              label: $_(`languages.${item}`),
              value: item,
              onPress: () => locale.set(item),
            }))}
            value={$locale}
            handleClose={() => {
              console.log(12312)
              languagesMenuOpen = false
            }}
          />
        </div>
      {/if}
    </li>
  </ul>
</nav>
