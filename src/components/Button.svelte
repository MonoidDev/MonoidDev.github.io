<script lang="ts">
  export let title: string;
</script>

<button>
	{title}
</button>

<style type="text/postcss">
  button {
    background: linear-gradient(to right, #d76d77, #ffaf7b);
    color: white;
    border: unset;
    border-radius: 6px;
    padding: 0.75rem 1.5rem;
    cursor: pointer;
  }

  button:hover {
    @apply text-gray-100;
  }

  button:focus {
    @apply text-gray-700;
  }
</style>