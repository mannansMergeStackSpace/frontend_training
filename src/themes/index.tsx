import { createTheme, ThemeProvider } from "@mui/material";
import { FC, ReactNode } from "react";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    largeRegular: React.CSSProperties;
    largeBold: React.CSSProperties;
    mediumRegular: React.CSSProperties;
    mediumBold: React.CSSProperties;
    normalBold: React.CSSProperties;
    normalRegular: React.CSSProperties;
    smallBold: React.CSSProperties;
    smallRegular: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    largeRegular: React.CSSProperties;
    largeBold: React.CSSProperties;
    mediumRegular: React.CSSProperties;
    mediumBold: React.CSSProperties;
    normalBold: React.CSSProperties;
    normalRegular: React.CSSProperties;
    smallBold: React.CSSProperties;
    smallRegular: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    largeRegular: true;
    largeBold: true;
    mediumRegular: true;
    mediumBold: true;
    normalBold: true;
    normalRegular: true;
    smallBold: true;
    smallRegular: true;
  }
}

interface AllProps {
  mode: any;
  children: ReactNode;
}

const CustomThemeProvider: FC<AllProps> = ({ mode, children }: AllProps) => {
  const customTheme = createTheme({
    palette: {
      ...(mode === "dark"
        ? {
            primary: {
              main: "#FF6A00",
              light: "#545FFF",
              dark: "#009FFF",
              contrastText: "#F5315D",
            },
            info: {
              main: "#FFFFFF",
              light: "#A7A4C5",
              dark: "#837FA3",
              contrastText: "#3E3A66",
            },
          }
        : {
            primary: {
              main: "#FF6A00",
              light: "#551FFF",
              dark: "#00B7FE",
              contrastText: "#FD2254",
            },
            info: {
              main: "#15192C",
              light: "#92959E",
              dark: "#D0D2DA",
              contrastText: "#F5F5F7",
            },
          }),
    },
    typography: {
      fontFamily: "Averta-regular",
      h1: {
        fontSize: "56px",
        lineHeight: "61.6px",
      },
      h2: {
        fontSize: "48px",
        lineHeight: "52.8px",
      },
      h3: {
        fontSize: "40px",
        lineHeight: "44px",
      },
      h4: {
        fontSize: "32px",
        lineHeight: "35.2px",
      },
      h5: {
        fontSize: "24px",
        lineHeight: "26.4px",
      },
      h6: {
        fontSize: "20px",
        lineHeight: "22px",
      },
      largeRegular: {
        fontSize: "20px",
        lineHeight: "28px",
      },
      largeBold: {
        fontSize: "20px",
        lineHeight: "28px",
        fontWeight: "bold",
      },

      mediumRegular: {
        fontSize: "18px",
        lineHeight: "25.2px",
      },
      mediumBold: {
        fontSize: "18px",
        lineHeight: "25.2px",
        fontWeight: "bold",
      },
      normalRegular: {
        fontSize: "16px",
        lineHeight: "22.4px",
      },
      normalBold: {
        fontSize: "16px",
        lineHeight: "22.4px",
        fontWeight: "bold",
      },
      smallRegular: {
        fontSize: "14px",
        lineHeight: "19.6px",
      },
      smallBold: {
        fontSize: "14px",
        lineHeight: "19.6px",
        fontWeight: "bold",
      },
    },
  });

  return <ThemeProvider theme={customTheme}>{children}</ThemeProvider>;
};
export default CustomThemeProvider;
