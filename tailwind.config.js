/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md0: '1100px',
      md: '1260px',
      md2: '1360px',
      lg: '1590px',
      xl: '1780px'
    },
    fontFamily: {
      sans: ['Outfit', 'sans-serif']
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0.05em',
      wide: '.1em',
      wider: '.2em',
      widest: '.65em',
    },
    extend: {
      colors: {
        darkBlue: 'hsl(217, 28%, 15%)',
        electricBlue:'hsl(210, 150%, 46%)',
        blueLight:'hsl(232, 63%, 19%)',
        blueMarine:'hsl(235, 61%, 15%)',
        blueRing:'hsl(234, 72%, 22%)',
        greenRing:'hsl(174, 88, 41)',
        greenElectric:'hsl(166, 98%, 5%)',
        navDark:'hsl(225, 40%, 10%)',
        plata: 'hsl(0, 0%, 94%)',
        gris:'#999999'
      },
      fontSize: {
        H1: ['56px', '58px'],
        H2: ['40px', '44px'],
        H3: ['34px', '36px'],
        H4: ['28px', '38px'],
        H5: ['24px', '33px'],
        H6: ['18px', '24px'],
        overline: ['14px', '19px'],
        subtitle: ['13px', '25px'],
        body: ['15px', '25px'],
      },
    },
  },
  plugins: [],
}
