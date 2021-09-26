import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.secondary90
  },
  content: {
    marginTop: -40,
    paddingHorizontal: 50,
  },
  image: {
    width: "100%",
    height: 360,
  },
  title: {
    color: theme.colors.heading,
    textAlign: "center",
    fontSize: 40,
    fontFamily: 'Rajdhani_700Bold',
    marginBottom: 16,
    lineHeight: 40,
  },
  subtitle: {
    color: theme.colors.heading,
    fontSize: 15,
    fontFamily: 'Rajdhani_500Medium',
    textAlign: "center",
    marginBottom: 64,
    lineHeight: 25,
  },
});
