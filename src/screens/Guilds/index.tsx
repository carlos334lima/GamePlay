import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";

//@components
import { ListDivider } from "../../components/ListDivider";

//@utils
import { GuildProps } from "../../@types";

//@styles
import { styles } from "./styles";
import { Guild } from "../../components/Guild";

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
};

export function Guilds({ handleGuildSelect }: Props) {
  const Guilds = [
    {
      id: "1",
      name: "Lendários",
      icon: null,
      owner: true,
    },
    {
      id: "2",
      name: "Lendários",
      icon: null,
      owner: true,
    },
    {
      id: "3",
      name: "Lendários",
      icon: null,
      owner: true,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={Guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelect(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.guilds}
      />
    </View>
  );
}
