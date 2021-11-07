import {
  lightBackground,
  hoverOnLightBackground,
  lightText,
  darkBackground,
  hoverOnDarkBackground,
  darkText,
  lightBorder,
  //darkBorder,
  grayBorder,
  graylightBorder
} from "./variables";

export const lightTheme = {
  body: lightBackground,
  text: darkText,
  border: graylightBorder,
  activeBorder: lightBorder,
  hover: hoverOnLightBackground,
  filter: "invert(100%)",
};

export const darkTheme = {
  body: darkBackground,
  text: lightText,
  border: grayBorder,
  activeBorder: lightBorder,
  hover: hoverOnDarkBackground,
  filter: "",
};
