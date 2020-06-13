import { createContext } from "react";

const themes = {
  theme: {
    color1: "#1ed760", // green
    color2: "#203038", // dark blue
    color3: "#102028", // darker blue
    color4: "#535a60", // grey
    color5: "#aeaeae", // light grey
    color6: "lightgrey", // lighter grey
    color7: "#4FE383", // light green
    color8: "#060d12", // darkest blue
  },
};

const ThemeContext = createContext(themes);

export default ThemeContext;
