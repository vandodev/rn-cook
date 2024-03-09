import * as recipes from "./recipesService"
import * as ingredientes from "./ingredientsService"
import * as preparations from "./preparationsService"


export const services = {
  recipes,
  ingredientes,
  preparations,
  storage: {
    imagePath: `${process.env.EXPO_PUBLIC_SUPABASE_STORAGE_IMAGE}/storage/v1/object/public/ingredients`,
  },
}
