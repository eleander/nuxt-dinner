import type { DishDetails } from "@/types/index";

export default function (id: string | number) {
  if (typeof id === "string") {
    id = parseInt(id);
  }

  return useFetch<DishDetails>(
    useRuntimeConfig().public.baseUrl + "/recipes/" + id + "/information",
    { headers: { "X-Mashape-Key": useRuntimeConfig().public.apiKey } }
  );
}
