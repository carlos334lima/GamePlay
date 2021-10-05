import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  Text,
  View,
  Alert,
  FlatList,
  Share,
  Platform,
} from "react-native";

//@libraries
import * as Linking from "expo-linking";
import { Fontisto } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { BorderlessButton } from "react-native-gesture-handler";

//@components
import { Header } from "../../components/Header";
import { Background } from "../../components/Background";
import { ButtonIcon } from "../../components/ButtonIcon";
import { ListDivider } from "../../components/ListDivider";

//@assets
import BannerImg from "../../assets/banner.png";

//@utils
import { AppointmentProps } from "../../@types";

//@styles
import { styles } from "./styles";
import { theme } from "../../styles/theme";

type Params = {
  guildSelected: AppointmentProps;
};

type GuildWidget = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
};

export function AppointmentDetails() {
  return (
    <Background>
      <Header
        title="detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />

      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenge sem perder nenhuma partida da
            m10!
          </Text>
        </View>
      </ImageBackground>
    </Background>
  );
}
