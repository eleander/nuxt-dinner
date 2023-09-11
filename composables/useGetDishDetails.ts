import type { DishDetails } from "types";

export default function (id: string | number) {
  if (typeof id === "string") {
    id = parseInt(id);
  }

  return $fetch<DishDetails>(
    useRuntimeConfig().public.baseUrl + "/recipes/" + id + "/information",
    { headers: { "X-Mashape-Key": useRuntimeConfig().public.apiKey } }
  );
}
