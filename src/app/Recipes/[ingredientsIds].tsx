import { useEffect, useState } from "react"
import { FlatList, Text, View} from "react-native"

import { styles } from "./styles"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import { services } from "@/services"

import { Redirect, router, useLocalSearchParams } from "expo-router"
import { Recipe } from "@/components/Recipe"
import { Loading } from "@/components/Loading"
import { Ingredients } from "@/components/Ingredients"

  
  export default function Recipes() {
    const [isLoading, setIsLoading] = useState(true)
    const [ingredients, setIngredients] = useState<IngredientResponse[]>([])
    const params = useLocalSearchParams<{ ingredientsIds: string }>();
    const [recipes, setRecipes] = useState<RecipeResponse[]>([])
        // console.log(params)
    // const ingredientsIds = params.ingredientsIds.split(",");
    const ingredientsIds = params.ingredientsIds ? params.ingredientsIds.split(",") : [];
    // console.warn(ingredientsIds)

    useEffect(() => {
      services.recipes
        .findByIngredientsIds(ingredientsIds)
        .then((response) => setRecipes(response))
        .finally(() => setIsLoading(false))
    }, [])

    useEffect(() => {
      services.ingredientes
        .findByIds(ingredientsIds).then(setIngredients)
        .finally(() => setIsLoading(false))

    }, [])

    if (isLoading) {
      return <Loading />
    }
  

    return (
    <View style={styles.container}>
        <View style={styles.header}>
          <MaterialIcons
              size={32}
              name="arrow-back"
              onPress={() => router.back()}
            />

            <Text style={styles.title}>Ingredientes</Text>
            
            {<Ingredients ingredients={ingredients} />}


            <FlatList
              data={recipes}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Recipe
                  recipe={item}
                />
              )}
              style={styles.recipes}
              contentContainerStyle={styles.recipesContent}
              showsVerticalScrollIndicator={false}
              columnWrapperStyle={{ gap: 16 }}
              numColumns={2}
              ListEmptyComponent={() => (
                <Text style={styles.empty}>
                  Nenhuma receita encontrada. Escolha outros ingredientes.
                </Text>
              )}
            />
        </View>
    </View>
    )
  } 
