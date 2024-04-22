// -----------------------------------------------------------------------
// WEATHER APP -----------------------------------------------------------
// -----------------------------------------------------------------------

const KEY = "5f8503fb89ffdb650735ce3ffd36d138";

async function getWeather() {
  let city = document.querySelector("#city").value;
  let h1 = document.querySelector(".temp");
  let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`;
  let res = await fetch(URL);
  let data = await res.json();

  h1.innerHTML = `
    <span>Shaxar:</span> ${data.name}<br>
    <span>Temperatura:</span> ${Math.round(data.main.temp)} <sup>o</sup>C<br>
    <span>Shamol texligi:</span> ${data.wind.speed} m/s.<br>
    <span>Namlik:</span> ${data.main.humidity} g/m<sup>3</sup>.<br>
    <span>Bosim:</span> ${data.main.pressure} Pa.<br>
    <span>Holat:</span> ${data.weather[0].description}.<br>
    `;
}
