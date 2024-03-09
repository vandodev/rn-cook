import { supabase } from "./supabase"

async function findByIds(ids: string[]) {
  const { data } = await supabase
    .from("ingredients")
    .select()
    .in("id", ids)
    .order("name")
    .returns<IngredientResponse[]>()
    return data ?? []
}

async function findAll() {
  const { data } = await supabase
    .from("ingredients")
    .select()
    .order("name")
    .returns<IngredientResponse[]>()

  return data ?? []
}

export { findAll, findByIds}
