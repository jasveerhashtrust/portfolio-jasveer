import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '0.5': '0.5px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend: {
      backgroundColor:{
        InnerColor: "rgb(41, 41, 41)",
      },
     colors:{
      Black:"#161616",
      White:'#FFFFFF',
      grey:"#545454",
      InnerColor: "rgb(41, 41, 41)",
      textLight:"rgba(255, 255, 255, .2)",
      BoxesColor:"rgb(30, 30, 30)"
     },
     borderColor:{
      borderGreyLight:"rgb(84, 84, 84)"
     }
    },
  },
  plugins: [],
};
export default config;
