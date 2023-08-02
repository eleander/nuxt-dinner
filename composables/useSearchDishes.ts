import type { SearchDishes } from "@/types/index";

export default function (query: string, type: string) {
  return $fetch<SearchDishes>(
    useRuntimeConfig().public.baseUrl +
      "recipes/complexSearch?" +
      new URLSearchParams({ query: query, type: type }).toString(),
    {
      headers: { "X-Mashape-Key": useRuntimeConfig().public.apiKey },
    }
  );
}
