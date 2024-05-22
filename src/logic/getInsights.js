
const getInsights = (location,current) => {

    // 1. City name and country name
    const cityName = location.name;
    const countryName = location.country;
    
    // 2. Day name, month name, current time (e.g., 03:20pm)
    const currentTime = new Date(location.localtime);
    const dayName = new Intl.DateTimeFormat('en', { weekday: 'long' }).format(currentTime);
    const monthName = new Intl.DateTimeFormat('en', { month: 'long' }).format(currentTime);
    const formattedTime = currentTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    
    // 3. Temperature, high, and low
    const temperatureC = current.temp_c;
    const temperatureF = current.temp_f;
    const feelsLikeC = current.feelslike_c;
    const feelsLikeF = current.feelslike_f;
    
    // 4. Visibility, dew point, wind, humidity, and cloudiness
    const visibilityKM = current.vis_km;
    const visibilityMiles = current.vis_miles;
    const windSpeedKPH = current.wind_kph;
    const windSpeedMPH = current.wind_mph;
    const humidity = current.humidity;
    const cloudiness = current.cloud;
    
    // 5. Sunrise and sunset
    const sunriseTime = "7:00am"; 
    const sunsetTime = "6:00pm"; 
    
    return {cityName,countryName,dayName,monthName,currentTime, 
        formattedTime,temperatureC,temperatureF,feelsLikeC,feelsLikeF,
        visibilityKM,visibilityMiles,windSpeedKPH,windSpeedMPH,humidity,cloudiness,sunriseTime,sunsetTime
    }
    
}

export default getInsights
