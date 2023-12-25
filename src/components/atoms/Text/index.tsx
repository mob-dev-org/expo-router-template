import colors from "@src/constants/colors";
import * as React from "react";
import { Text as RNText } from "react-native";
import { TextStyle } from "react-native";

export interface TextProps {
  weight?: TextStyle["fontWeight"];
  color?: TextStyle["color"];
  style?: TextStyle;
  children?: any;
  size?: number;
  center?: boolean;
  centerVertical?: boolean;
  numberOfLines?: number;
  arabic?: boolean;
}

const Text = ({
  weight = "normal",
  size = 16,
  children,
  style = {},
  center = false,
  color = colors.text,
  centerVertical = false,
  numberOfLines = null,
  arabic = false,
}: TextProps) => {
  return (
    <RNText
      style={[
        style,
        center && { textAlign: "center" },
        centerVertical && { textAlignVertical: "center" },
        {
          fontSize: size,
          includeFontPadding: false,
          color,
          fontWeight: weight,
        },
        arabic && {
          fontFamily: "Hafs",
          // fontFamily: "Nabi",
          // fontFamily: "AlQalamQuran",
          includeFontPadding: false,
        },
      ]}
      {...(numberOfLines ? { numberOfLines } : {})}>
      {children}
    </RNText>
  );
};

export default Text;
