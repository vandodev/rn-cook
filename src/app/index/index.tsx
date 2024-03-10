import { useState, useEffect } from "react";
import { Text, View, ScrollView, Alert } from "react-native";
import { styles } from "./styles";
import { router } from "expo-router"
import { Ingredient } from "@/components/Ingredient"
import { Selected } from "@/components/Selected";
import { services } from "@/services"


export default function Home() {
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([])
0
  const [selected, setSelected] = useState<string[]>([])

  function handleToggleSelected(value: string) {
    if (selected.includes(value)) {
      return setSelected((state) => state.filter((item) => item !== value))
    }

    setSelected((state) => [...state, value])
    // console.log(selected)
  }

  function handleClearSelected() {
    Alert.alert("Limpar", "Deseja limpar tudo?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => setSelected([]) },
    ])
  }

  function handleSearch() {
    router.navigate("/Recipes/" + selected)
  }

  useEffect(() => {
    services.ingredientes
      .findAll().then(setIngredients)
  }, [])


    return(
      <View style={styles.container}>
        <Text style={styles.title}>
            Escolha {"\n"}
            <Text style={styles.subtitle}>os produtos</Text>
        </Text>

        <Text style={styles.message}>
             Descubra receitas baseadas nos produtos que você escolheu.
        </Text>

        <ScrollView
        contentContainerStyle={styles.ingredient}
        showsVerticalScrollIndicator={false}
      >
        {ingredients.map((ingredient) => (
          <Ingredient
            key={ingredient.id}
            name={ingredient.name}
            image={`${services.storage.imagePath}/${ingredient.image}`}
            selected={selected.includes(ingredient.id)}
            onPress={() => handleToggleSelected(ingredient.id)}
          />
        ))}
      </ScrollView>
        
        {selected.length > 0 && (
          <Selected 
            quantity={selected.length}         
            onClear={handleClearSelected}
            onSearch={handleSearch}
          />
        )}   

      </View>
    )
}