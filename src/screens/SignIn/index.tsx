import React from "react";
import { Image, Text, View } from "react-native";

//@assets
import IlustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";

//@styles
import { styles } from "./styles";

export function Sign() {
  return (
    <View style={styles.container}>
      <Image source={IlustrationImg} />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {"\n"}suas jogatinas{"\n"}facilmente
        </Text>

        <Text style={styles.subtitle}>
          crie grupos para jogar seus games{"\n"}favoritos com seus amigos
        </Text>

        <ButtonIcon title="Entrar com o Discord"/>
      </View>
    </View>
  );
}
