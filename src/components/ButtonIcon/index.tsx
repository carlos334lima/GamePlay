import React from "react";
import { Image, Text, View } from "react-native";

//@libraries
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

//@assets
import DiscordImg from "../../assets/discord.png";

//@styles
import { styles } from "./styles";
interface Props extends RectButtonProps {
  title: string;
}

const ButtonIcon = ({ title, ...rest }: Props) => {
  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
};

export { ButtonIcon };
