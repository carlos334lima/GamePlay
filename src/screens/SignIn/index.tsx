import React from "react";
import { Image, Text, View } from "react-native";

//@libraries
import { useNavigation } from "@react-navigation/native";

//@assets
import IlustrationImg from "../../assets/illustration.png";

//@components
import { Background } from "../../components/Background";
import { ButtonIcon } from "../../components/ButtonIcon";

//@styles
import { styles } from "./styles";

export function Sign() {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate("Home");
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image source={IlustrationImg} />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {"\n"}e organize {"\n"}suas jogatinas
          </Text>

          <Text style={styles.subtitle}>
            crie grupos para jogar seus games{"\n"}favoritos com seus amigos
          </Text>

          <ButtonIcon title="Entrar com o Discord" onPress={handleSignIn} />
        </View>
      </View>
    </Background>
  );
}
