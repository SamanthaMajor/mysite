module.exports = {

  content: [
    "./src/_includes/**/*.{html,md,11ty.js,njk}",
    "./src/blog/**/*.{html,md,11ty.js,njk}",
    "./doc/pages/**/*.{html,md,11ty.js,njk}",
    "./src/index.{html,md,11ty.js,njk}",
  ],

  plugins: [
    require('daisyui'),
  ],

  daisyui: {
    themes: ["nord"],
  },

}
