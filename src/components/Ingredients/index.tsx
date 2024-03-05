import { ScrollView } from "react-native"
import { styles } from "./styles"
import { Ingredient } from "../Ingredient"

export function Ingredients() {
    return(
        <ScrollView 
            // horizontal
            style={styles.container}
            contentContainerStyle={styles.container}
            showsHorizontalScrollIndicator={false}
        >
            <Ingredient />
            <Ingredient />
            <Ingredient />
            <Ingredient />
            <Ingredient />
            <Ingredient />
            <Ingredient />
            <Ingredient />

            
        </ScrollView>
    )
}