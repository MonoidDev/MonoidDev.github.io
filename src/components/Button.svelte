<script lang="ts">
  export let title: string;
</script>

<button>
	{title}
</button>

<style type="text/postcss">
  button {
    background: #e2e8f0;
    color: #64748b;
    border: unset;
    border-radius: 6px;
    padding: 0.75rem 1.5rem;
    cursor: pointer;
  }

  button:hover {
    @apply bg-gray-500 text-gray-50;
  }

  button:focus {
    background: #94a3b8;
    color: #f1f5f9;
  }
</style>