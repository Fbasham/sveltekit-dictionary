<script>
  import { goto } from "$app/navigation";
</script>

<svelte:head>
  <title>Sveltkit Dictionary</title>
</svelte:head>
<h1>Sveltekit Dictionary</h1>
<form
  on:submit|preventDefault={(e) => {
    goto(`/search/${e.target.search.value}`);
  }}
>
  <label for="search">Find a word:</label>
  <input id="search" />
</form>
