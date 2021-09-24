import React from "react";
import { Image, Text, View } from "react-native";

//@assets
import IlustrationImg from "../../assets/illustration.png";

//@styles
import { styles } from "./styles";

export function Sign() {
  return (
    <View style={styles.container}>
      <Image source={IlustrationImg} />
    </View>
  );
}
