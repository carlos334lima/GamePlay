import React, { useState } from "react";
import {
  Text,
  View,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

//@libraries
import uuid from "react-native-uuid";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

//@components
import { CategorySelect } from "../../components/CategorySelect";
import { Background } from "../../components/Background";
import { GuildIcon } from "../../components/GuildIcon";
import { Header } from "../../components/Header";

//@styles
import { theme } from "../../styles/theme";
import { styles } from "./styles";
import { SmallInput } from "../../components/SmallInput";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { ModalView } from "../../components/ModalView";
import { Guilds } from "../Guilds";
import { GuildProps } from "../../@types";

export function AppointmentCreate() {
  const [category, setCategory] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [GuildSelected, setGuildSelected] = useState<GuildProps>(
    {} as GuildProps
  );

  function handleOpenModal() {
    setModalVisible(true);
  }

  function handleGuildSelected(guildSelected: GuildProps) {
    setGuildSelected(guildSelected);
    setModalVisible(false);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled
      style={styles.container}
    >
      <ScrollView>
        <Background>
          <Header title="Agendar Partida" />

          <Text
            style={[
              styles.label,
              { marginLeft: 24, marginTop: 36, marginBottom: 18 },
            ]}
          >
            Categoria
          </Text>

          <CategorySelect
            hasCheckBox
            categorySelected={category}
            setCategory={setCategory}
          />

          <View style={styles.form}>
            <RectButton onPress={handleOpenModal}>
              <View style={styles.select}>
                {!GuildSelected.icon ? (
                  <View style={styles.image} />
                ) : (
                  <GuildIcon />
                )}

                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {GuildSelected.name
                      ? GuildSelected.name
                      : "Selecione um servidor"}
                  </Text>
                </View>
                <Feather
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                />
              </View>
            </RectButton>

            <View style={styles.field}>
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Dia e mês
                </Text>

                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>/</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>

              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Hora e minuto
                </Text>

                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>:</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>
            </View>

            <View style={[styles.field, { marginBottom: 12 }]}>
              <Text style={styles.label}>Descrição</Text>

              <Text style={styles.caracteresLimit}>Max 100 caracteres</Text>
            </View>

            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
            />

            <View style={styles.footer}>
              <Button title="Agendar" />
            </View>
          </View>
        </Background>
      </ScrollView>

      <ModalView visible={modalVisible}>
        <Guilds handleGuildSelect={handleGuildSelected} />
      </ModalView>
    </KeyboardAvoidingView>
  );
}
