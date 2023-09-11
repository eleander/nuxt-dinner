import type { SearchDishes } from "types";

export default function (query: string, type: string) {
  return $fetch<SearchDishes>(
    useRuntimeConfig().public.baseUrl +
      "recipes/complexSearch?" +
      new URLSearchParams({
        query: query,
        type: type,
        number: "9",
      }).toString(),
    {
      headers: { "X-Mashape-Key": useRuntimeConfig().public.apiKey },
    }
  );
}
