<script lang="ts">
	import { useCompletion } from 'ai/svelte';
	const { input, handleSubmit, completion } = useCompletion({
		api: '/api/completion'
	});
</script>

<main class="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
  <div class="max-w-md w-full px-6 py-8 bg-white shadow-md overflow-hidden sm:rounded-lg">
    <h2 class="text-center text-2xl font-bold mb-4">Slogan Generator</h2>
    <form class="mb-4" on:submit={handleSubmit}>
      <div class="flex flex-col mb-2">
        <label class="text-gray-700 font-bold mb-2" for="input">
          Describe your business
        </label>
        <input
          class="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="input"
          bind:value={$input}
          placeholder="e.g. We sell organic coffee"
        />
      </div>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Generate Slogan
      </button>
    </form>
    {#if $completion}
      <div class="bg-gray-200 rounded p-4">
        <p class="text-gray-700 font-bold mb-2">Slogan:</p>
        <p class="text-gray-700 text-lg">{$completion}</p>
      </div>
    {/if}
  </div>
</main>
