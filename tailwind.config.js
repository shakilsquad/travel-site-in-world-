/** @type {import('tailwindcss').Config} */
module.exports = {
      content: ["./src/**/*.{html,js}"],
      theme: {
        extend: {
            backgroundImage: {
                  'my-background-image': "url('./img/bg-cover.png')",
                },
        },
      },
      plugins: [],
    }
