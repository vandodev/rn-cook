import { Text, Pressable, Image } from "react-native"
import { styles } from "./styles"

export function Ingredient() {
    return(
        <Pressable style={styles.container}>
            <Image style={styles.image} source={require("@/assets/tomato.png")}/>
            <Text style={styles.title}>Tomate</Text>
        </Pressable>
    )
}