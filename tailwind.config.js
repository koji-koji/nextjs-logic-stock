module.exports = {
  purge: ['./pages/**/*.ts', './pages/**/*.tsx', './components/**/*.ts', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // ここに色を設定すると、classNameにtext-appBaseColorのように記載するだけで文字が赤くなる。
      // cssに記載するときはbackground-color: theme('colors.orange.200')のように記述する。
      colors: {
        appSampleColor: '#de3618',
        // classNameをtext-gry-liaghterのように記述して設定できる。
        gray: {
          lighter: '#aaa',
          default: '#777',
          dark: '#444',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
