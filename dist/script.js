const tableHoursByCategory = [
  {
    category: "Work",
    hoursDaily: "5hrs",
    previousHoursDaily: "Previous - 7hrs",
    hoursWeekly: "32hrs",
    previousHoursWeekly: "Previous - 36hrs",
    hoursMonthly: "103hrs",
    previousHoursMonthly: "Previous - 128hrs",
  },
  {
    category: "Play",
    hoursDaily: "3hrs",
    previousHoursDaily: "Previous - 2hrs",
    hoursWeekly: "12hrs",
    previousHoursWeekly: "Previous - 7hrs",
    hoursMonthly: "23hrs",
    previousHoursMonthly: "Previous - 29hrs",
  },
  {
    category: "Study",
    hoursDaily: "3hrs",
    previousHoursDaily: "Previous - 2hrs",
    hoursWeekly: "10hrs",
    previousHoursWeekly: "Previous - 7hrs",
    hoursMonthly: "23hrs",
    previousHoursMonthly: "Previous - 29hrs",
  },
  {
    category: "Exercice",
    hoursDaily: "3hrs",
    previousHoursDaily: "Previous - 2hrs",
    hoursWeekly: "10hrs",
    previousHoursWeekly: "Previous - 7hrs",
    hoursMonthly: "23hrs",
    previousHoursMonthly: "Previous - 29hrs",
  },
  {
    category: "Social",
    hoursDaily: "3hrs",
    previousHoursDaily: "Previous - 2hrs",
    hoursWeekly: "10hrs",
    previousHoursWeekly: "Previous -5hrs",
    hoursMonthly: "23hrs",
    previousHoursMonthly: "Previous - 29hrs",
  },
  {
    category: "Self Care",
    hoursDaily: "3hrs",
    previousHoursDaily: "Previous - 2hrs",
    hoursWeekly: "6hrs",
    previousHoursWeekly: "Previous - 12hrs",
    hoursMonthly: "24hrs",
    previousHoursMonthly: "Previous - 40hrs",
  },
];

let liElements = document.querySelectorAll("li");
liElements.forEach((element) => {
  element.addEventListener("click", function () {
    // Add your code to handle the click event here...
    if (element.id === "daily") {
     
      /* Chane text color of the selection */
      document.getElementById("daily").style.color = "White";
      document.getElementById("weekly").style.color = "hsl(236, 100%, 87%)";
      document.getElementById("monthly").style.color = "hsl(236, 100%, 87%)";
      /*Work*/
      document.getElementById("hoursWork").innerHTML =
        tableHoursByCategory[0].hoursDaily;
      document.getElementById("previousHoursWork").innerHTML =
        tableHoursByCategory[0].previousHoursDaily;
      /*Play */
      document.getElementById("hoursPlay").innerHTML =
        tableHoursByCategory[1].hoursDaily;
      document.getElementById("previousHoursPlay").innerHTML =
        tableHoursByCategory[1].previousHoursDaily;
      /*Study*/
      document.getElementById("hoursStudy").innerHTML =
        tableHoursByCategory[2].hoursDaily;
      document.getElementById("previousHoursStudy").innerHTML =
        tableHoursByCategory[2].previousHoursDaily;
      /*Exercice*/
      document.getElementById("hoursExercice").innerHTML =
        tableHoursByCategory[3].hoursDaily;
      document.getElementById("previousHoursExercice").innerHTML =
        tableHoursByCategory[3].previousHoursDaily;
      /*Social*/
      document.getElementById("hoursSocial").innerHTML =
        tableHoursByCategory[4].hoursDaily;
      document.getElementById("previousHoursSocial").innerHTML =
        tableHoursByCategory[4].previousHoursDaily;
      /*Self care*/
      document.getElementById("hoursSelfCare").innerHTML =
        tableHoursByCategory[5].hoursDaily;
      document.getElementById("previousHoursSelfCare").innerHTML =
        tableHoursByCategory[5].previousHoursDaily;
    } else if (element.id === "weekly") {
      /* Chane text color of the selection */
    
      document.getElementById("daily").style.color = "hsl(236, 100%, 87%)";
      document.getElementById("weekly").style.color = "White";
      document.getElementById("monthly").style.color = "hsl(236, 100%, 87%)";
      /*Work*/
      document.getElementById("hoursWork").innerHTML =
        tableHoursByCategory[0].hoursWeekly;
      document.getElementById("previousHoursWork").innerHTML =
        tableHoursByCategory[0].previousHoursWeekly;
      /*Play */
      document.getElementById("hoursPlay").innerHTML =
        tableHoursByCategory[1].hoursWeekly;
      document.getElementById("previousHoursPlay").innerHTML =
        tableHoursByCategory[1].previousHoursWeekly;
      /*Study*/
      document.getElementById("hoursStudy").innerHTML =
        tableHoursByCategory[2].hoursWeekly;
      document.getElementById("previousHoursStudy").innerHTML =
        tableHoursByCategory[2].previousHoursWeekly;
      /*Exercice*/
      document.getElementById("hoursExercice").innerHTML =
        tableHoursByCategory[3].hoursWeekly;
      document.getElementById("previousHoursExercice").innerHTML =
        tableHoursByCategory[3].previousHoursWeekly;
      /*Social*/
      document.getElementById("hoursSocial").innerHTML =
        tableHoursByCategory[4].hoursWeekly;
      document.getElementById("previousHoursSocial").innerHTML =
        tableHoursByCategory[4].previousHoursWeekly;
      /*Self care*/
      document.getElementById("hoursSelfCare").innerHTML =
        tableHoursByCategory[5].hoursWeekly;
      document.getElementById("previousHoursSelfCare").innerHTML =
        tableHoursByCategory[5].previousHoursWeekly;
    } else {
      /* Chane text color of the selection */
      document.getElementById("daily").style.color = "hsl(236, 100%, 87%)";
      document.getElementById("weekly").style.color = "hsl(236, 100%, 87%)";
      document.getElementById("monthly").style.color = "White";
      /*Work*/
      document.getElementById("hoursWork").innerHTML =
        tableHoursByCategory[0].hoursMonthly;
      document.getElementById("previousHoursWork").innerHTML =
        tableHoursByCategory[0].previousHoursMonthly;
      /*Play */
      document.getElementById("hoursPlay").innerHTML =
        tableHoursByCategory[1].hoursMonthly;
      document.getElementById("previousHoursPlay").innerHTML =
        tableHoursByCategory[1].previousHoursMonthly;
      /*Study*/
      document.getElementById("hoursStudy").innerHTML =
        tableHoursByCategory[2].hoursMonthly;
      document.getElementById("previousHoursStudy").innerHTML =
        tableHoursByCategory[2].previousHoursMonthly;
      /*Exercice*/
      document.getElementById("hoursExercice").innerHTML =
        tableHoursByCategory[3].hoursMonthly;
      document.getElementById("previousHoursExercice").innerHTML =
        tableHoursByCategory[3].previousHoursMonthly;
      /*Social*/
      document.getElementById("hoursSocial").innerHTML =
        tableHoursByCategory[4].hoursMonthly;
      document.getElementById("previousHoursSocial").innerHTML =
        tableHoursByCategory[4].previousHoursMonthly;
      /*Self care*/
      document.getElementById("hoursSelfCare").innerHTML =
        tableHoursByCategory[5].hoursMonthly;
      document.getElementById("previousHoursSelfCare").innerHTML =
        tableHoursByCategory[5].previousHoursMonthly;
    }
  });
});

// DARKMODE

let darkMode = localStorage.getItem("darkkMode");
console.log(darkMode);
const darkModeToggle = document.querySelector("#dark-mode-toggle");

//Check if darkmode is enabled
//If it is enabled turn it off
//If it is disabled turn it on

const enableDarkMode = () => {
  //add class darmode to the body
  document.body.classList.add("darkMode");
  //update darmode in local storage
  localStorage.setItem("darkMode", "enabled");
};
const disableDarkMode = () => {
  //add class darmode to the body
  document.body.classList.remove("darkMode");
  //update darmode in local storage
  localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  console.log(darkMode);
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
