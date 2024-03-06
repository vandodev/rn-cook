import { Text, View, ScrollView } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

import { Ingredient } from "../../components/Ingredient"
import { Selected } from "@/components/Selected";

export default function Home() {
0
  const [selected, setSelected] = useState<string[]>([])

  function handleToggleSelected(value: string) {
    if (selected.includes(value)) {
      return setSelected((state) => state.filter((item) => item !== value))
    }

    setSelected((state) => [...state, value])
    console.log(selected)
  }

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
              // horizontalz
              style={styles.container}
              contentContainerStyle={styles.ingredient}
              showsHorizontalScrollIndicator={false}
             >

          
              {
                  Array.from({length:100}).map((item, index) => (
                      <Ingredient
                          key={index} 
                          name="Tomate" 
                          image=""
                          selected={selected.includes(String(index))} 
                          onPress={() => handleToggleSelected(String(index))} 
                      />
                  ))
              }   
        </ScrollView>     
        <Selected quantity={selected.length} />   

      </View>
    )
}