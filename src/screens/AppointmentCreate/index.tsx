import React, { useState } from "react";
import {
  Text,
  View,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
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

export function AppointmentCreate() {}
