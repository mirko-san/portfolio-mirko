import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    colors: {
      base: "#f8f3de",
      primary: "#d4dfbb",
      secondary: "#e5af9b",
      white: "#ffffff",
    },
  },
  preflight: {
    "@font-face": {
      "font-family": "MirkoIcon",
      src: "url(/MirkoIcon.woff2)",
    },
    html: {
      "background-color": "#f8f3de",
    },
  },
} as Options;
