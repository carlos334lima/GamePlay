import React from "react";
import { Text, View } from "react-native";

//@libraries
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

//@components
import { GuildIcon } from "../GuildIcon";

//@assets
import SvgPlayer from "../../assets/player.svg";
import SvgCalendar from "../../assets/calendar.svg";

//@utils
import { AppointmentProps } from "../../@types";
import { categories } from "../../utils/categories";

//@styles
import { styles } from "./styles";
import { theme } from "../../styles/theme";

type Props = RectButtonProps & {
  data: AppointmentProps;
};

export function Appointment({ data, ...rest }: Props) {
  const [category] = categories.filter((item) => item.id === data.category);
  const { owner } = data.guild;

  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <LinearGradient
          style={styles.guildIconContainer}
          colors={[theme.colors.secondary50, theme.colors.secondary70]}
        >
          <GuildIcon guildId={data.guild.id} iconId={data.guild.icon} />
        </LinearGradient>

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{data.guild.name}</Text>

            <Text style={styles.category}>{category.title}</Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <SvgCalendar />

              <Text style={styles.date}>{data.date}</Text>
            </View>

            <View style={styles.playersInfo}>
              <SvgPlayer
                fill={owner ? theme.colors.primary : theme.colors.on}
              />

              <Text
                style={[
                  styles.player,
                  { color: owner ? theme.colors.primary : theme.colors.on },
                ]}
              >
                {owner ? "Anfitrião" : "Visitante"}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  );
}
