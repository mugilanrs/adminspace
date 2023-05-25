import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
      primary: {
          100: "#cccccc",
          200: "#999999",
          300: "#666666",
          400: "#333333",
          500: "#000000",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000"
},
      
grey: {
    100: "#d0d3d8",
    200: "#a2a6b2",
    300: "#737a8b",
    400: "#454d65",
    500: "#16213e",
    600: "#121a32",
    700: "#0d1425",
    800: "#090d19",
    900: "#04070c"
},
greenAccent: {
          100: "#ffdbd4",
          200: "#ffb7a9",
          300: "#ff947f",
          400: "#ff7054",
          500: "#ff4c29",
          600: "#cc3d21",
          700: "#992e19",
          800: "#661e10",
          900: "#330f08",
},

   
       
       
          yellow: {
          100: "#fffbcc",
          200: "#fff899",
          300: "#fff466",
          400: "#fff133",
          500: "#ffed00",
          600: "#ccbe00",
          700: "#998e00",
          800: "#665f00",
          900: "#332f00",
        },
        
        redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },
        blueAccent: {
          100: "#fff7de",
          200: "#fff0bd",
          300: "#ffe89c",
          400: "#ffe17b",
          500: "#ffd95a",
          600: "#ccae48",
          700: "#998236",
          800: "#665724",
          900: "#332b12"
},
        
      }
    : {
        grey: {
    100: "#04070c",
    200: "#090d19",
    300: "#0d1425",
    400: "#121a32",
    500: "#16213e",
    600: "#454d65",
    700: "#737a8b",
    800: "#a2a6b2",
          900: "#d0d3d8",
      },
          
        primary: {
          100: "#000000",
          200: "#000000",
          300: "#000000",
          400: "#000000",
          500: "#000000",
          600: "#333333",
          700: "#666666",
          800: "#999999",
          900: "#cccccc",
},
        greenAccent: {
          100: "#330f08",
          200: "#661e10",
          300: "#992e19",
          400: "#cc3d21",
          500: "#ff4c29",
          600: "#ff7054",
          700: "#ff947f",
          800: "#ffb7a9",
          900: "#ffdbd4",
},
        yellow: {
          100: "#332f00",
          200: "#665f00",
          300: "#998e00",
          400: "#ccbe00",
          500: "#ffed00",
          600: "#fff133",
          700: "#fff466",
          800: "#fff899",
          900: "#fffbcc",},
        redAccent: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        blueAccent: {
          100: "#332b12",
          200: "#665724",
          300: "#998236",
          400: "#ccae48",
          500: "#ffd95a",
          600: "#ffe17b",
          700: "#ffe89c",
          800: "#fff0bd",
          900: "#fff7de",
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Playfair Display", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Playfair Display", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Playfair Display", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Playfair Display", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Playfair Display", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Playfair Display", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Playfair Display", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};