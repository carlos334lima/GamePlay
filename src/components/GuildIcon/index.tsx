import React from "react";
import { Image, View } from "react-native";

//@assets
import DiscordSvg from "../../assets/discord.svg";

//@styles
import { styles } from "./styles";

type Props = {
  guildId: string;
  iconId: string | null;
};

export function GuildIcon({ guildId, iconId }: Props) {
  const uri =
    "https://play-lh.googleusercontent.com/Wq15hCMPJW-eUz-c4DtnUxHkk2s-pVra14td-E4b05Eo-Cu8Koj6BqPUNULbh9HfjpkC";

  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={styles.image} resizeMode="cover"/>
    </View>
  );
}
