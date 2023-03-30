// SETUP COLORS
const PRIMARY = {
  light: "#38385F",
  lighter: "#8585ea",
  main: "#2E2E48",
  dark: "#685BF8",
  // darker: "#7900E6",
};

const SECONDARY = {
  lighter: "#89888C",
  light: "#505458",
  main: "#161C24",
  dark: "#7C8087",
};
const SUCCESS = {
  main: "#51B770",
};
const WARNING = {
  lighter: "#FFC567",
  main: "#FF8853",
};
const Text = {
  textPrimary: "#323232",
  textSecondary: "#191426",
  textThird: "#2A2A2A",
  textFifth: "#DDDDDD",
  textSixth: "#00000014",
  textSeventh: "#F7F7F7",
  textEight: "#C9D1D5",
  textNine: "#E15A00",
};
const CUSTOM = {
  placeholderText: "#afafaf",
  black: "#000000",
  white: "#ffffff",
  blue: "#1273eb",
  white09: "rgba(255, 255, 255 , 90%)",
  greyLight: "#919AA3",
  purple: "#345099",
  greyLighter: "#686868",
  backgroundGrey: "#F5F5F5",
  green: "#10A64A",
  pink: "#C95EF9",
  saffron: "#FF7979",
  lightBlue: "#2F2F53",
  red: "#EB2729",
  webPrimary: "#9E458F",
  darkRed: "#D94360",
  extraLightGrey: "#EEEEEE",
  borderColor: "#D8D8D8",
  darkGreen: "#44C200",
};
const ERROR = {
  main: "#D20404",
  light: "#F85B5B",
  lighter: "#ffc5c5",
};
const COMMON = {
  common: { ...CUSTOM },
  primary: { ...PRIMARY, contrastText: "#fff" },
  secondary: { ...SECONDARY, contrastText: "#fff" },
  warning: { ...WARNING, contrastText: "#fff" },
  text: { ...Text },
  error: { ...ERROR },
  success: { ...SUCCESS },
};
const palette = {
  // light: {
  ...COMMON,
  // },
  // dark: {
  //   ...COMMON,
  // },
};

export default palette;
