import { extendTheme, theme as prevTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  textStyles: {
    "label-2": {
      fontFamily: "Lato, sans-serif",
      fontSize: "0.6875rem",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "0.6875rem",
      letterSpacing: "0.3px",
      textAlign: "left",
    },
    "label-1": {
      fontFamily: "Lato, sans-serif",
      fontSize: "0.75rem",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "1rem",
      letterSpacing: "0.3px",
      textAlign: "left",
    },
    caption: {
      fontFamily: "Lato, sans-serif",
      fontSize: "0.75rem",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "1rem",
      letterSpacing: "0.3px",
      textAlign: "left",
    },
    "heading-4": {
      fontFamily: "Lato, sans-serif",
      fontSize: "1.25rem",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "1.75rem",
      letterSpacing: "0.16px",
      textAlign: "left",
    },
    "body-3": {
      fontFamily: "Lato, sans-serif",
      fontSize: "0.75rem",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "1rem",
      letterSpacing: "0.3px",
      textAlign: "left",
    },
    "body-2": {
      fontFamily: "Lato, sans-serif",
      fontSize: "0.875rem",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "1.25rem",
      letterSpacing: "0.26px",
      textAlign: "left",
    },
    subheading: {
      fontFamily: "Lato, sans-serif",
      fontSize: "0.75rem",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "1.125rem",
      letterSpacing: "0.26px",
      textAlign: "left",
    },
    "heading-6": {
      fontFamily: "Lato, sans-serif",
      fontSize: "1rem",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "1.375rem",
      letterSpacing: "0.3px",
      textAlign: "left",
    },
    "heading-5": {
      fontFamily: "Lato, sans-serif",
      fontSize: "1.125rem",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "1.5rem",
      letterSpacing: "0.16px",
      textAlign: "left",
    },
    "heading-2": {
      fontFamily: "Lato, sans-serif",
      fontSize: "2rem",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "2.5rem",
      letterSpacing: "0px",
      textAlign: "left",
    },
    "heading-3": {
      fontFamily: "Lato, sans-serif",
      fontSize: "1.5rem",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "1.875rem",
      letterSpacing: "0.2px",
      textAlign: "left",
    },
    subtitle: {
      fontFamily: "Lato, sans-serif",
      fontSize: "0.6875rem",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "0.6875rem",
      letterSpacing: "0.3px",
      textAlign: "left",
    },
    "heading-1": {
      fontFamily: "Lato, sans-serif",
      fontSize: "2.75rem",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "3.375rem",
      textAlign: "left",
    },
    "body-1": {
      fontFamily: "Lato, sans-serif",
      fontSize: "1rem",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "1.5rem",
      letterSpacing: "0.16px",
      textAlign: "left",
    },
    "info-1": {
      fontFamily: "Lato, sans-serif",
      fontSize: "0.6875rem",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "0.875rem",
      letterSpacing: "0.32px",
      textAlign: "left",
    },
    "body-bold-1": {
      fontFamily: "Lato, sans-serif",
      fontSize: "1rem",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "1.125rem",
      letter: "0.26px",
      textAlign: "left",
    },
    "body-bold-2": {
      fontFamily: "Lato, sans-serif",
      fontSize: "0.875rem",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "1.125rem",
      letter: "0.26px",
      textAlign: "left",
    },
    "body-bold-3": {
      fontFamily: "Lato, sans-serif",
      fontSize: "0.75rem",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "0.875rem",
      letter: "0.32px",
      textAlign: "left",
    },
    "text-button": {
      fontFamily: "Lato, sans-serif",
      fontSize: "0.6875rem",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "0.6875rem",
      letter: "1px",
      textAlign: "center",
      color: "pink-100",
    },
    helper: {
      fontFamily: "Lato, sans-serif",
      fontSize: "0.75rem",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "1rem",
      letter: "0.32px",
      textAlign: "left",
    },
  },
  shadows: {
    "top-only": "0px -3px 12px -6px rgba(0, 0, 0, 0.3)",
  },
  fonts: {
    body: "Lato, sans-serif",
    heading: "Lato, sans-serif",
    mono: "monospace",
  },
  colors: {
    // primary
    "burgundy-100": "#97144D",
    white: "#FFFFFF",
    black: "#282828",
    "black-100": "#282828",
    // secondary
    "pink-20": "#FDE5EE",
    "pink-40": "#F9B0CC",
    "pink-60": "#F57BA9",
    "pink-80": "#F14687",
    "pink-100": "#E5095C",

    "gray-10": "#F9F9F9",
    "gray-20": "#F1F1F1",
    "gray-30": "#E2E2E2",
    "gray-40": "#CBCBCB",
    "gray-50": "#B4B4B4",
    "gray-60": "#9D9D9D",
    "gray-70": "#858585",
    "gray-80": "#6E6E6E",
    "gray-90": "#575757",
    "gray-100": "#404040",

    // Tertiary colors
    "error-red": "#FF2121",
    "success-green": "#1FC24E",
    "warning-yellow": "#FEC600",
    "warning-orange": "#F17F22",
    "snack-blue": "#145599",
    "link-purple": "#9911ED",

    "aqua-deep-10": "#F3FBFB",
    "aqua-deep-20": "#E6F8F4",
    "aqua-deep-40": "#B8DDDB",
    "aqua-deep-60": "#81C1BD",
    "aqua-deep-80": "#49A49E",
    "aqua-deep-100": "#12877F",

    // Neutral colors
    "neutral-1": "#F1F4F7",
    "neutral-2": "#F9F1EB",
    "neutral-3": "#F9F6EB",
    "neutral-4": "#EFF9EB",
    "neutral-5": "#EBF9F8",
    "neutral-6": "#EBF0F9",
    "neutral-7": "#F4EBF9",
    "neutral-8": "#F9EBEF",

    "burgundy-highlight-1": "#A81352",

    brand: {
      50: "#F9EFF1",
      100: "#FCCFE0",
      200: "#F8A0C2",
      300: "#F570A3",
      400: "#F24084",
      500: "#EE1166",
      600: "#ED1164",
      700: "#DF0765",
      800: "#97144D",
      900: "#6B0531",
    },
  },
  sizes: {
    ...prevTheme.sizes,
    sc2: "2px",
    sc4: "4px",
    sc8: "8px",
    sc12: "12px",
    sc16: "16px",
    sc24: "24px",
    sc32: "32px",
    sc48: "48px",
    sc64: "64px",
    sc96: "96px",
    sc128: "128px",
  },
  space: {
    ...prevTheme.space,
    sc2: "2px",
    sc4: "4px",
    sc8: "8px",
    sc12: "12px",
    sc16: "16px",
    sc24: "24px",
    sc32: "32px",
    sc48: "48px",
    sc64: "64px",
    sc96: "96px",
    sc128: "128px",
  },
  borders: {
    card: "1px solid #EBF0F9", // neutral-6
  },
  components: {
    Button: {
      variants: {
        transparent: {
          bg: "transparent",
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "1.125rem",
          letter: "0.26px",
          _hover: {
            bg: "transparent",
            outline: "none",
            boxShadow: "none",
          },
          _active: {
            bg: "transparent",
            outline: "none",
            boxShadow: "none",
          },
          _focus: {
            bg: "transparent",
            outline: "none",
            boxShadow: "none",
          },
        },
        brand: {
          bg: "brand.800",
          _hover: {
            bg: "brand.600",
          },
          _active: {
            bg: "brand.600",
          },
          color: "white",
          py: 2,
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "1.125rem",
          letter: "0.26px",
          _disabled: {
            bg: "#B4B4B4 !important",
            color: "white",
            opacity: 1,
            cursor: "not-allowed",
          },
        },
        "brand-secondary": {
          borderColor: "gray-30",
          borderWidth: "1px",
          bg: "gray-10",
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "1.125rem",
          letter: "0.26px",
          _hover: {
            bg: "gray-10",
          },
          _active: {
            bg: "gray-10",
          },
          color: "burgundy-100",
          p: 2,
        },
        pinklink: {
          bg: "transparent",
          p: 0,
          m: 0,
          fontFamily: "Lato, sans-serif",
          fontSize: "0.6875rem",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "0.6875rem",
          letter: "1px",
          textAlign: "center",
          color: "pink-100",
          textTransform: "uppercase",
          _hover: {
            bg: "transparent",
            outline: "none",
            boxShadow: "none",
          },
          _active: {
            bg: "transparent",
            outline: "none",
            boxShadow: "none",
          },
          _focus: {
            bg: "transparent",
            outline: "none",
            boxShadow: "none",
          },
          _disabled: {
            color: "gray-50",
          },
        },
      },
    },
    Modal: {
      baseStyle: {
        overlay: {
          bg: "rgba(0, 0, 0, 0.7)",
          backdropFilter: "blur(2px)",
        },
      },
    },
    Drawer: {
      baseStyle: {
        body: {
          zIndex: 1600,
        },
        overlay: {
          zIndex: 1500,
          bg: "rgba(0, 0, 0, 0.7)",
          backdropFilter: "blur(2px)",
        },
        dialog: {
          width: "min(600px, 100%)",
          margin: "auto",
          borderTopRadius: "xl",
        },
      },
    },
    Tabs: {
      baseStyle: {
        // tablist: {
        //   bg: "red",
        //   // tab: {
        //   //   bg: "blue",
        //   // },
        // },
        tab: {
          _active: {
            bg: "transparent",
            outline: "none",
            boxShadow: "none",
          },
          _focus: {
            bg: "transparent",
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
    Switch: {
      baseStyle: {
        track: {
          bg: "gray.400",
        },
      },
    },
    Badge: {
      baseStyle: {
        py: 1,
        px: 2,
        textStyle: "label-2",
        fontSize: "0.6875rem",
        borderRadius: "base",
        fontWeight: 400,
      },
    },
    Progress: {
      baseStyle: {
        filledTrack: {
          bg: "#97144D",
        },
        track: {
          borderRadius: "4px",
          bg: "#FFC9B2",
        },
      },
    },
    Menu: {
      baseStyle: {
        bg: "red",
        list: {
          colorScheme: "twitter",
          minW: "auto",
        },
        item: {
          textStyle: "caption",
          _hover: {
            bg: "neutral-1",
          },
          _focus: {
            bg: "neutral-1",
          },
        },
      },
    },
    Checkbox: {
      baseStyle: {
        outline: "none",
        _focus: {
          boxShadow: "none",
          bg: "blue",
          outline: "none",
        },
      },
    },
    Tag: {
      variants: {
        blue_s: {
          container: {
            bg: "neutral-6",
            color: "snack-blue",
            borderRadius: "base",
            fontSize: "0.6875rem",
            display: "inline",
            py: "0.125rem",
            whiteSpace: "nowrap",
          },
        },
        error_s: {
          container: {
            bg: "neutral-8",
            color: "error-red",
            borderRadius: "base",
            fontSize: "0.6875rem",
            display: "inline",
            py: "0.125rem",
            whiteSpace: "nowrap",
          },
        },
        success: {
          container: {
            bg: "success-green",
            color: "white",
            borderRadius: "base",
            fontSize: "0.6875rem",
            display: "inline",
            py: "0.125rem",
            whiteSpace: "nowrap",
          },
        },
      },
      defaultProps: {
        colorScheme: "cyan",
        borderRadius: "none",
      },
    },
    PinInput: {
      variants: {
        subzero: {
          bg: "aqua-deep-10",
          border: "1px",
          borderColor: "transparent",
          borderRadius: 0,
          borderTopRadius: "lg",
          borderBottomWidth: "2px",
          borderBottomColor: "aqua-deep-60",
          fontSize: "1rem",
          fontWeight: "bold",
          display: "inline-block",
          appearance: "none",
          outline: "none",
          _disabled: {
            filter: "grayscale(1)",
          },
          _focus: {
            outline: "none",
            borderBottomColor: "aqua-deep-80",
          },
          _hover: {
            outline: "none",
          },
          _invalid: {
            borderBottomColor: "error-red",
          },
        },
      },
    },
    Alert: {
      defaultProps: {
        colorScheme: "grey",
      },
      baseStyle: {
        container: {
          bg: "#404040",
        },
        title: {
          fontSize: "1rem",
          fontWeight: 400,
          color: "white",
        },
      },
      variants: {
        default: {
          container: {
            bg: "#404040",
            color: "white",
          },
        },
        error: {
          container: {
            bg: "white",
            color: "error-red",
          },
          title: {
            color: "error-red",
          },
        },
        success: {
          container: {
            bg: "white",
            color: "success-green",
          },
          title: {
            color: "success-green",
          },
        },
        warning: {
          container: {
            bg: "white",
            color: "warning-orange",
          },
          title: {
            color: "warning-orange",
          },
        },
      },
    },
    Toast: {
      variants: {
        solid: {
          bg: "blue",
        },
        error: {
          bg: "blue",
        },
      },
      // baseStyle: {
      //   alert: {
      //     bg: "green",
      //   },
      //   bg: "green",
      //   error: {
      //     bg: "blue",
      //   },
      // },
    },
  },
});
