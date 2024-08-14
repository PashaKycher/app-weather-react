import axios from "axios";
import { useState } from "react";

function App() {

    const [data, setData] = useState({});
    const [town, setTown] = useState('');

    const key = 'c6f3ca7cba0e64850fbadcde5f144ad1';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${town}&units=metric&appid=${key}`;

    const searchWeather = (event) => {
        if (event.key === 'Enter') {
            axios.get(url)
                .then((response) => { setData(response.data) })
                .catch(() => alert("There is no such city!"))
            setTown('');
        };
    };

    return (
        <div className="app">
            <div className="inp-field">
                <input
                    type="text"
                    value={town}
                    onChange={(event) => setTown(event.target.value)}
                    placeholder="Enter location"
                    onKeyDown={searchWeather} />
            </div>
            <div className="container">
                <div className="header">
                    <div className="city">
                        <p>{data.name}</p>
                    </div>
                </div>
                <div className="temp">
                    {data.main ? (
                        <h1>{data.main.temp.toFixed()} °C</h1>
                    ) : null}
                </div>
                <div className="desc">
                    {data.weather ? (
                        <p>{data.weather[0].main}</p>
                    ) : null}
                </div>
            </div>
            {data.name !== undefined &&
                (<div className="footer">
                    <div className="feels">
                        {data.main ? (
                            <p className="bold">
                                Feels like - {data.main.feels_like.toFixed()} °C
                            </p>
                        ) : null}
                    </div>
                    <div className="humidity">
                        {data.main ? (
                            <p className="bold">
                                humidity - {data.main.humidity} %
                            </p>
                        ) : null}
                    </div>
                    <div className="wind">
                        {data.wind ? (
                            <p className="bold">
                                wind - {data.wind.speed} m/s
                            </p>
                        ) : null}
                    </div>
                </div>)};
        </div>
    );
};

export default App;