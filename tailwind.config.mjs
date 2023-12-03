/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        customBackground: "#232946",
        bodyText: "#b8c1ec",
        primary: "#eebbc3",
        secondary: "#fffffe",
        borderStroke: "#121629",
        buttonText: "#232946",
      },
      flexGrow: {
        2: "2",
      },
      flex: {
        2: "2 2 0%",
      },
      // typography: (theme)=>({
      //   'sm':{
      //     css:{
      //       img:{
      //         width: '100%',
      //         'margin': "0 auto"
      //       }
      //     }
      //   },
      //   'lg':{
      //     css:{
      //       img:{
      //         width: '80%',
      //         'margin': "0 auto"
      //       }
      //     }
      //   }
      // })
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
