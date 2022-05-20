const searchButton = document.getElementById("search-button");
const inputField = document.getElementById("search-input");
const clock = document.getElementById("clock");
const date = document.getElementById("date")

const startTime = () => {
  const today = new Date();
  clock.innerHTML = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  let day = today.getDate();
  let month = today.getMonth();
  let year = today.getFullYear();
  let weekDay = today.getDay();
  let weekDays = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
  let months = [ "January", "February", "March", "April", "May", "June", "July", "September", "October", "November", "December" ];
  date.innerHTML = `${weekDays[weekDay]} | ${day}/${months[month]}/${year}`
  setTimeout(startTime, 1000);
}

startTime()


const search = () => {
  window.location.href = "https://www.google.com/search?q=" + encodeURI(inputField.value);
};

inputField.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    search();
  }
});

searchButton.addEventListener("click", search);
