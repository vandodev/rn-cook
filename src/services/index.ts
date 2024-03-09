import * as recipes from "./recipesService"
import * as ingredientes from "./ingredientsService"

export const services = {
  recipes,
  ingredientes,
  storage: {
    imagePath: `${process.env.EXPO_PUBLIC_SUPABASE_STORAGE_IMAGE}/storage/v1/object/public/ingredients`,
  },
}
