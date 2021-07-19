<script lang="ts" context="module">
  export interface Menu {
    value: string;
    label: string;
    onPress: () => void;
  }
</script>

<script lang="ts">
	import { clickOutside } from '../utils/clickOutside';

  export let menus: Menu[];
  export let value: string;
  export let handleClose: () => void;

  $: onClickMenu = (menu: Menu) => {
    menu.onPress();
    handleClose();
  }
</script>

<div
  class="container"
  use:clickOutside
  on:clickoutside={handleClose}
>
  {#each menus as menu}
    <button
      on:click={menu.value !== value ? () => onClickMenu(menu) : undefined}
      class={menu.value === value ? "selected" : undefined}
      disabled={menu.value === value}
    >
      {menu.label}
    </button>
  {/each}
</div>

<style type="text/postcss">
  .container {
    @apply shadow-lg flex flex-col;
  }

  button {
    @apply block p-4 text-gray-500;
  }

  button:hover:disabled {
    cursor: initial;
  }

  button:hover:not(:disabled) {
    @apply bg-gray-200;
  }

  .selected {
    @apply text-gray-300;
  }
</style>
