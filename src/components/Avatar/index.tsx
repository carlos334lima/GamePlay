import React from "react";
import { Image } from "react-native";

//@libraries
import { LinearGradient } from "expo-linear-gradient";

//@styles
import { theme } from "../../styles/theme";
import { styles } from "./styles";

type Props = {
  urlImage: string;
};

export const Avatar = ({ urlImage }: Props) => {
  const { secondary50, secondary70 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary70]}
    >
      <Image source={{ uri: urlImage }} style={styles.avatar} />
    </LinearGradient>
  );
};
