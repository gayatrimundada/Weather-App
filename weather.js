let API_KEY = "48b7d8d97d626efd6731b2697dcabf62";
const input = document.getElementById("cityName");
const form = document.getElementById("weatherForm");
const result = document.getElementById("result");

form.addEventListener("submit", (e) => {
  e.preventDefault(); //no refresh
  const city = input.value;
  console.log(city); //console
  form.reset(); //input null

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  result.innerHTML = `<p style="color:blue"> loading.......</p>`;

  fetch(url)
    .then((res) => {
      if (!res.ok) {
        alert("city not found");
        throw new Error("no city");
      }
      return res.json();
    })
    .then((data) => {
      const temp = data.main.temp;
      const Humidity = data.main.humidity;
      const country = data.sys.country;
      result.innerHTML = `<h2>${city.toUpperCase()}</h2>
        <p> Country ${country}<p>
        <p>temperature 🥵${temp} oC</p>
        <p>Humidity ${Humidity}%</p>

        `;
      console.log(data);
    })
    .catch((err) => {
      console.error("the error is", err);
    })
})
