const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  mode: "jit",
  darkMode: 'class',
  theme: {
    
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'color1': '#103174',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'hero': '#0e0c1d',
      'boxes': '#110f24',
      'hover': '#5142FC',
      'gradient-linear': 'linear-gradient(#c2c2c2, #FFF)',
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'color-box': 'rgb(17, 15, 36)',
      'color-top': 'rgb(14, 12, 29)',
      'color-box-2': '#0e0c1d',
      'gradient-2': `linear-gradient(#F01B04, #7a0e02)`,
      'gradient-btn': `linear-gradient(265.56deg, rgb(36, 108, 249) -0.27%, rgb(30, 104, 246) -0.26%, rgb(0, 71, 208) 98.59%)`,
      'midnight': '#121063',
      'card': '#16151a',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'input-bg': "#0e0c1d",
      'input-border': "#25214f",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      red: colors.red,
      yellow: colors.yellow
    },
    container: {
      center: true
    },
    screens: {
      sm: '600px',
      md: '728px',
      lg: '984px',
      xl: '1240px'
    },
    // fontFamily: {
    //   display: ["Open Sans", "sans-serif"],
    //   body: ["Open Sans", "sans-serif"],
    // },
    extend: {
      backgroundImage: () => ({
        'grad1': `linear-gradient(to right, #1FA2FF 0%, #12D8FA  51%, #1FA2FF  100%)`,
        'gradient-primary': `linear-gradient(135deg, #b53400, 10%, #ffae00)`,
        'gradient-tour-1': `linear-gradient(90deg, #e89400, 50%, #c87f00)`,
        'gradient-tour-2': `linear-gradient(90deg, #ea0400, 50%, #9e0200)`,
        'gradient-1': `linear-gradient(rgb(31, 27, 65), rgb(17, 15, 36))`,
        'btn-buy': `linear-gradient(rgb(26 163 47), rgb(15 36 17))`,
        'btn-buy-hover': `linear-gradient(rgb(35 180 50), rgb(15 36 17))`,
        'btn-sell': `linear-gradient(rgb(163 26 26), rgb(36 15 15))`,
        'btn-sell-hover': `linear-gradient(rgb(187 45 45), rgb(36 15 15))`,
        'gradient-2': `linear-gradient(rgb(65, 27, 27), rgb(36, 15, 15))`,
        'gradient-3': `linear-gradient(rgb(36, 15, 15), rgb(65, 27, 27))`,
        'background-epk': `url('src/assets/bg.jpg')`,
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }),
      // backgroundImage: {
      //   'hero-pattern': "url('/img/hero-pattern.svg')",
      //   'footer-texture': "url('/img/footer-texture.png')",
      // },
      screens: {
        mf: "990px",
      },
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
      },
    },
  },
  variants: {
    variants: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd'],
    extend: {},
  },
  plugins: [
    // require('tailwindcss-dark-mode')()
  ],
};