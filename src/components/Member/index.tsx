import React from "react";
import { View, Text } from "react-native";

//@components
import { Avatar } from "../Avatar";

//@styles
import { styles } from "./styles";
import { theme } from "../../styles/theme";

//@utils
import { MemberProps } from "../../@types";

type Props = {
  data: MemberProps;
};

export function Member({ data }: Props) {
  const isOnline = data.status === "Online";

  return (
    <View style={styles.container}>
      <Avatar urlImage={data.avatar_url} />

      <View>
        <Text style={styles.title}>{data.username}</Text>

        <View style={styles.status}>
          <View
            style={[
              styles.bulletStatus,
              {
                backgroundColor: isOnline
                  ? theme.colors.on
                  : theme.colors.primary,
              },
            ]}
          />
          <Text style={styles.nameStatus}>
            {isOnline ? "Dísponivel" : "Ocupado"}
          </Text>
        </View>
      </View>
    </View>
  );
}
