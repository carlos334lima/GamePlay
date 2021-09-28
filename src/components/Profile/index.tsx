import React from "react";
import { Text, View } from "react-native";

//@components
import { Avatar } from "../Avatar";

//@styles
import { styles } from "./styles";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Avatar urlImage="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá</Text>
          <Text style={styles.username}>Carlos</Text>
        </View>

        <Text style={styles.message}>Hoje é dia de vitória!</Text>
      </View>
    </View>
  );
};

export default Profile;
