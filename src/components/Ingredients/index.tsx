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

            {
                Array.from({length:100}).map((item, index) => (
                    <Ingredient key={index} />
                ))
            }      

            
        </ScrollView>
    )
}