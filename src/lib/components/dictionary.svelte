<script>
  export let word;

  let audio = word.phonetics.find((p) => p.audio);
</script>

<h1>Dictionary</h1>
<p>{word.word} <span>[ {word.phonetic} ]</span></p>
{#if audio}
  <audio controls>
    <source src={audio.audio} />
  </audio>
{/if}
{#each word?.meanings as defs}
  <p>{defs.partOfSpeech}</p>
  <ul>
    {#each defs.definitions.flat().map((d) => d.definition) as def}
      <li>{def}</li>
    {/each}
  </ul>
{/each}
