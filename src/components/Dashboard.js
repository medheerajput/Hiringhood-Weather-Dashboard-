import React, { useEffect, useState } from 'react';
import getInsights from '../logic/getInsights';

const Dashboard = () => {
    const [city, setCity] = useState('indore');
    const [insights, setInsights] = useState({
        cityName: "",
        countryName: "",
        dayName: "",
        monthName: "",
        currentTime: "",
        formattedTime: "",
        temperatureC: "",
        temperatureF: "",
        feelsLikeC: "",
        feelsLikeF: "",
        visibilityKM: "",
        visibilityMiles: "",
        windSpeedKPH: "",
        windSpeedMPH: "",
        humidity: "",
        cloudiness: "",
        sunriseTime: "",
        sunsetTime: ""
    });

    const apiCall = async () => {
        try {
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=99ee88f87373408db7e90923242105&q=${city}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const { location, current } = await response.json();
            if (location && current) {
                const insightsData = getInsights(location, current);
                setInsights(insightsData);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        if (city) {
            apiCall();
        }
    }, [city]);
    return (
        <div className='body'>
            <div className="container">
                <header className="header">
                    <h1>Weather Dashboard</h1>
                    <div className="search-container">
                        <input type="text" placeholder="Search City..." onChange={(e) => setCity(e.target.value)} className="search" />
                        <button className="search-btn">🔍</button>
                        <button className="toggle">☼</button>
                    </div>
                </header>
                <main>
                    <section className="main-forecast">
                        <div className="forecast-today">
                            <div className="current-weather">
                                <h2>Forecast in <strong>{insights.cityName} , {insights.countryName}</strong></h2>
                                <p>{insights.dayName}, {insights.monthName} {insights.formattedTime}</p>
                                <br />
                                <br />
                                <div style={{ display: 'flex', columnGap: '30px' }}>
                                    <div className="w">
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
                                            <div className="x">
                                                <span style={{ fontSize: '25px' }}>{insights.temperatureF}°F / {insights.temperatureC}°C</span>
                                                {/* <span style={{ fontSize: '30px' }}>39°F/c</span> */}
                                            </div>
                                            <div className="a">
                                                <span>High {insights.temperatureF}°F</span>
                                                <span>Low {insights.temperatureC}°F</span>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <br /><br /><br />
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', columnGap: '40px' }}>
                                                <div className="b">
                                                    <span style={{ fontSize: '13px', marginRight: '10px' }}>Overcast Clouds</span>
                                                    <span style={{ fontSize: '13px', marginRight: '10px' }}>{insights.cloudiness}</span><br />
                                                    <span style={{ fontSize: '13px' }}>Feels like {insights.feelsLikeF}°F</span><br />
                                                    <span style={{ fontSize: '13px' }}>Umbrella Required🌂</span>
                                                </div>
                                                <div className="weather-icon">
                                                    <img src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png" alt="Cloudy" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wx">
                                        <div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '2px', margin: "3px" }}>
                                                <div>Visibility</div>
                                                <div style={{ display: 'flex' }}>
                                                    <div>{insights.visibilityKM}km</div>
                                                    <div>eye</div>
                                                </div>
                                            </div>
                                            <hr />
                                        </div>
                                        <div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '2px', margin: "3px" }}>
                                                <div>Dew Point</div>
                                                <div style={{ display: 'flex' }}>
                                                    <div>{insights.visibilityMiles}</div>
                                                    <div>eye</div>
                                                </div>
                                            </div>
                                            <hr />
                                        </div>
                                        <div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '2px', margin: "3px" }}>
                                                <div>Humidity</div>
                                                <div style={{ display: 'flex' }}>
                                                    <div>{insights.humidity}</div>
                                                    <div>eye</div>
                                                </div>
                                            </div>
                                            <hr />
                                        </div>
                                        <div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '2px', margin: "3px" }}>
                                                <div>Wind</div>
                                                <div style={{ display: 'flex', fontSize: "12px" }}>
                                                    <span>{insights.windSpeedKPH}kph</span>&np
                                                    <span>{insights.windSpeedMPH}mph</span>
                                                    <div>👁️</div>
                                                </div>
                                            </div>
                                            <hr />
                                        </div>
                                        <div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '2px', margin: "3px" }}>
                                                <div>Cloudiness</div>
                                                <div style={{ display: 'flex' }}>
                                                    <div>{insights.cloudiness}</div>
                                                    <div>eye</div>
                                                </div>
                                            </div>
                                            <hr />
                                        </div>
                                    </div>
                                    <div className="wz">
                                        <div style={{ height: '170px', display: 'flex', flexDirection: 'column', rowGap: '10px', alignItems: 'center', justifyContent: 'center' }}>
                                            <div>
                                                <span style={{ fontSize: 'large', margin: '5px' }}>☀</span><br />
                                                <span>Sunrise</span><br />
                                                <span>{insights.sunriseTime}</span><br />
                                            </div>
                                            <div>
                                                <span style={{ fontSize: 'large' }}>🌙</span><br />
                                                <span>Sunset</span><br />
                                                <span>{insights.sunsetTime}</span><br />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='forecastdays'>
                                    <h3>Forecast for 7 <strong>Days</strong></h3>
                                    <section className="forecast-week">
                                        <div className="day">sun<br /><span className="firstmini">37°F</span><br /><span className="mini">37°F</span><br />☀</div>
                                        <div className="day">mon<br /><span className="firstmini">37°F</span><br /><span className="mini">37°F</span><br />☀</div>
                                        <div className="day">tue<br /><span className="firstmini">37°F</span><br /><span className="mini">37°F</span><br />☀</div>
                                        <div className="day">wed<br /><span className="firstmini">37°F</span><br /><span className="mini">37°F</span><br />☀</div>
                                        <div className="day">thu<br /><span className="firstmini">37°F</span><br /><span className="mini">37°F</span><br />🌤</div>
                                        <div className="day">fri<br /><span className="firstmini">37°F</span><br /><span className="mini">37°F</span><br />🌧</div>
                                        <div className="day">sat<br /><span className="firstmini">37°F</span><br /><span className="mini">37°F</span><br />🌦</div>
                                    </section>
                                </div>
                            </div>
                        </div>
                        <section className="forecast-other-cities">
                            <h3>Forecast in Other <strong>Cities</strong></h3>
                            <div className="city">
                                <span>Seattle, US</span>
                                <span>🌫</span>
                                <div>
                                    <span>37°F</span><br/>
                                    <span>Mist</span>
                                </div>
                            </div>
                            <hr />
                            <div className="city">
                                <span>Seattle, US</span>
                                <span>🌫</span>
                                <div>
                                    <span>37°F</span><br/>
                                    <span>Mist</span>
                                </div>
                            </div>
                            <hr />
                            <div className="city">
                                <span>Seattle, US</span>
                                <span>🌫</span>
                                <div>
                                    <span>37°F</span><br/>
                                    <span>Mist</span>
                                </div>
                            </div>
                            <hr />
                            <div className="city">
                                <span>Seattle, US</span>
                                <span>🌫</span>
                                <div>
                                    <span>37°F</span><br/>
                                    <span>Mist</span>
                                </div>
                            </div>
                            <hr />
                            <div className="city">
                                <span>Seattle, US</span>
                                <span>🌫</span>
                                <div>
                                    <span>37°F</span><br/>
                                    <span>Mist</span>
                                </div>
                            </div>
                            <hr />
                            {/* <div className="city">Munich, DE<br />23°F<br />Overcast Clouds<br />☁</div> */}
                            {/* <div className="city">Paris, FR<br />24°F<br />Mist<br />🌫</div> */}
                            {/* <div className="city">Istanbul, TR<br />58°F<br />Clear Sky<br />🌙</div> */}
                            {/* <div className="city">Dubai, AE<br />71°F<br />Few Clouds<br />🌤</div> */}
                        </section>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
