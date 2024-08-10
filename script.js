const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "cb19823d13msh660d3b4ffa1c903p170accjsn35f1bd799a57",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const cityNameElement = document.getElementById("cityName"); // Assuming you have an element with the id "cityName"
const cityInput = document.getElementById("city");

const getWeather = async (city) => {
  const fullUrl = url + city;

  try {
    const response = await fetch(fullUrl, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);

    // Display the city name
    cityNameElement.innerHTML = city;

    // Access properties from the result object, not directly from the response
    cloud_pct.innerHTML = result.cloud_pct;
    temp.innerHTML = result.temp;
    temp2.innerHTML = result.temp;
    feels_like.innerHTML = result.feels_like;
    humidity.innerHTML = result.humidity;
    humidity2.innerHTML = result.humidity;
    min_temp.innerHTML = result.min_temp;
    max_temp.innerHTML = result.max_temp;
    wind_speed.innerHTML = result.wind_speed;
    wind_speed2.innerHTML = result.wind_speed;
    wind_degrees.innerHTML = result.wind_degrees;
    sunrise.innerHTML = result.sunrise;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", (e) => {
  e.preventDefault()
  getWeather(cityInput.value);
});

// Initial call with a default city (Agra in this case)
getWeather("Agra");