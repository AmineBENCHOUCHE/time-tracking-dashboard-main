/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        cardPersonColor: {
          darkMode: "hsl(246, 80%, 60%)",
          lightMode: "hsl(246, 80%, 60%)",
        },
        cardColor: {
          darkMode: " hsl(235, 46%, 20%)",
          lightMode: "hsl(246, 80%, 60%)",
        },
        workColor: {
          darkmode: "hsl(15, 100%, 70%)",
          lightmode: "hsl(15, 100%, 70%)",
        },
        playColor: {
          darkmode: "hsl(195, 74%, 62%)",
          lightmode: "hsl(15, 100%, 70%)",
        },
        studyColor: {
          darkmode: "hsl(348, 100%, 68%)",
          lightmode: "hsl(15, 100%, 70%)",
        },
        exerciceColor: {
          darkmode: "hsl(145, 58%, 55%)",
          lightmode: "hsl(15, 100%, 70%)",
        },
        socialColor: {
          darkmode: "hsl(264, 64%, 52%)",
          lightmode: "hsl(15, 100%, 70%)",
        },
        selfCareColor: {
          darkmode: "hsl(43, 84%, 65%)",
          lightmode: "hsl(15, 100%, 70%)",
        },
        PaleBlue: "hsl(236, 100%, 87%)",
        VeryDdarkblue: "hsl(226, 43%, 10%)",

        DesaturatedBlue: "hsl(235, 45%, 61%)",
      },
    },
    plugins: [],
  },
};
