<script>
  import { page } from "$app/stores";
  import Dictionary from "$lib/components/dictionary.svelte";
  export let data;
  let words = data.data;
</script>

<h1>Searched for {$page.params.word}</h1>

{#each words as word}
  <Dictionary {word} />
{/each}
