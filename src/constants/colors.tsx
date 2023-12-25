import Color from "color";

const colors = {
  primary: "#173d65",
  // background: "#211707",
  background: Color("#a0cdeb").alpha(0.02).string(),
  text: "#173d65",
  darkBlue: "#173d65",
  blue: "#0b75a9",
  lightBlue: "#a0cdeb",
  white: "#fff",
  black: "#000",
  gray: "#ccc",
};

export const getColorWithOpacity = (
  color: keyof typeof colors,
  opacity: number,
) => Color(colors[color]).alpha(opacity).toString();

export default colors;
