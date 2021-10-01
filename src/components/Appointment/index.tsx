import React from "react";
import { Text, View } from "react-native";

//@libraries
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

//@components
import { GuildIcon } from "../GuildIcon";

//@types
import { AppointmentProps } from "../../@types";

//@styles
import { styles } from "./styles";
import { categories } from "../../utils/categories";

type Props = RectButtonProps & {
  data: AppointmentProps;
};

export function Appointment({ data, ...rest }: Props) {
  const [category] = categories.filter((item) => item.id === data.category);

  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <GuildIcon />

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{data.guild.name}</Text>
            <Text style={styles.category}>{category.title}</Text>
          </View>
        </View>
      </View>
    </RectButton>
  );
}
