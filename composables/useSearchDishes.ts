import type { SearchDishes } from "@/types/index";

export default function (query: string, type: string, page: number) {
  return $fetch<SearchDishes>(
    useRuntimeConfig().public.baseUrl +
      "recipes/complexSearch?" +
      new URLSearchParams({
        query: query,
        type: type,
        offset: page.toString(),
        number: "9",
      }).toString(),
    {
      headers: { "X-Mashape-Key": useRuntimeConfig().public.apiKey },
    }
  );
}
