import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

import DiscordImg from "../../assets/discord.png";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

interface Props extends RectButtonProps {
  title: string;
}

const ButtonIcon = ({ title }: Props) => {
  return (
    <RectButton style={styles.container}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
};

export { ButtonIcon };
