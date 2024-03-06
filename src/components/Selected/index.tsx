import { View, Text } from "react-native"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import Animated, { BounceOutDown, SlideInDown } from "react-native-reanimated"

import { theme } from "@/theme"
import { styles } from "./styles"


type Props = {
  quantity: number
}

export function Selected({ quantity}: Props) {
  return (
    <Animated.View
      entering={SlideInDown.duration(500)}
      exiting={BounceOutDown}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.label}>{quantity} ingredientes selecionados</Text>

        <MaterialIcons
          name="close"
          size={24}
          color={theme.colors.gray_400}         
        />
      </View>

    </Animated.View>
  )
}
