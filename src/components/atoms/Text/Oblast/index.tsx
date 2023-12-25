import { StyleSheet, ViewStyle } from "react-native";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors, { getColorWithOpacity } from "@src/constants/colors";
import Text from "..";
import Color from "color";

type OblastComponentProps = {
  oblast: any;
  style?: ViewStyle;
  focused: boolean;
};
export default function OblastComponent(props: OblastComponentProps) {
  const { oblast, style, focused } = props;
  return (
    <View
      style={[
        styles.category,
        {
          backgroundColor: colors.primary,
        },
        style,
        !focused
          ? {
              backgroundColor: colors.background,
              borderWidth: 1,
              borderColor: colors.lightBlue,
            }
          : {
              borderWidth: 1,
              borderColor: colors.darkBlue,
            },
      ]}>
      <Text
        size={14}
        style={{ letterSpacing: 0.5 }}
        color={focused ? "white" : undefined}
        weight={focused ? "600" : "400"}>
        {oblast?.name}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  category: {
    padding: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
});

// <Ionicons name="list" size={16} color={focused ? "white" : "black"} />;
