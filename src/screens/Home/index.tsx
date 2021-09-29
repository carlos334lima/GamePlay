import React from "react";
import { View } from "react-native";
import { ButtonAdd } from "../../components/ButtonAdd";
import Profile from "../../components/Profile";

//@styles
import { styles } from "./styles";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
    </View>
  );
};

export { Home };
