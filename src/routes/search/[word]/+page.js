import { error } from "@sveltejs/kit";

export async function load(event) {
  let res = await event.fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${event.params.word}`
  );
  let data = await res.json();
  if (!res.ok) throw error(404, "not found");
  return {
    data,
  };
}
