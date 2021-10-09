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
import { useNavigation } from "@react-navigation/native";
import { BorderlessButton } from "react-native-gesture-handler";

//@components
import { Header } from "../../components/Header";
import { Background } from "../../components/Background";
import { ButtonIcon } from "../../components/ButtonIcon";
import { ListDivider } from "../../components/ListDivider";

//@assets
import BannerImg from "../../assets/banner.png";

//@utils
import { AppointmentProps, MemberProps } from "../../@types";

//@styles
import { styles } from "./styles";
import { theme } from "../../styles/theme";
import { ListHeader } from "../../components/ListHeader";
import { Member } from "../../components/Member";

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
  const members = [
    {
      id: "1",
      username: "Carlos Lima",
      avatar_url:
        "https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png",
      status: "Online",
    },
    {
      id: "2",
      username: "Igor Costa",
      avatar_url:
        "https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png",
      status: "Offline",
    },
    {
      id: "3",
      username: "Igor Costa",
      avatar_url:
        "https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png",
      status: "Offline",
    },
  ];

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

      <ListHeader title="Jogadores" subtitle="Total 3" />

      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  );
}
