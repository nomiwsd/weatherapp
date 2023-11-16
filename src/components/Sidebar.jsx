import { MdOutlineSearch } from "react-icons/md";
import WeatherIcon from "../assets/Weather-icon.png";
import CloudIcon from "../assets/Symbol.png";
import { IoLocationSharp } from "react-icons/io5";
import { useState } from "react";
const Sidebar = () => {
  const [city, setCity] = useState("");
  const [weatherInfo, setWeatherInfo] = useState("");
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setCity(e.target.value);
    setError('');
  };

  const APIKey = "0a03f1a94728033b2984bed35d734abf";
  const Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`;
  
 const handleSearch = (e) => {
    e.preventDefault();

    if (!city.trim()) {
      setError('Please enter a city name');
      return;
    }
      fetch(Url)
        .then((res) => res.json())
        .then((data) => {
          let MT = Math.round(data.main.temp);
          let FL = Math.round(data.main.feels_like);
  
          const Weather = {
            location: data.name,
            temperature: MT,
            feelsLike: FL,
            humidity: data.main.humidity,
            wind: data.wind.speed,
            condition: data.weather[0].description,
          };
  
          setWeatherInfo(Weather);
        })
        .catch((err) => {
          console.error(err);
        });
    
  };
  return (
    <div className="bg-sidebarbg w-full lg:w-2/6 xl:w-1/4 px-6 lg:px-10 py-6 lg:py-10">
      <div className="flex flex-col justify-center  gap-4">
      <form onSubmit={handleSearch}>
        <div className="flex items-center bg-mainbg text-primary rounded-lg px-3 py-2 w-full gap-2">
          <MdOutlineSearch className="text-primary text-lg" />
          <input
            type="text"
            placeholder="Search for places ..."
            className="bg-mainbg w-full outline-none"
            value={city}
            onChange={handleInputChange}
            required
          />
          <button type='submit' className="bg-white p-2 rounded-md">
            Search
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
        </form>
        <div className="flex justify-center">
          <img
            src={WeatherIcon}
            alt="WeatherImage"
            width="400"
            className="h-[160px] lg:h-[250px] xl:h-[300px]"
          />
        </div>
        <div className="flex justify-start ">
          <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start w-full gap-0">
            <div className="flex justify-end lg:justify-start items-end lg:items-start">
              <h2 className="text-white font-light text-6xl lg:text-8xl font-poppins">
                {weatherInfo.temperature}
              </h2>{" "}
              <span className="text-white font-poppins font-normal text-5xl">
                °C
              </span>
            </div>
            <p className="text-secondary text-md font-normal font-spacegrotesk ">
              Feels like a {weatherInfo.feelsLike}°C
            </p>
          </div>
        </div>

        <div className="flex justify-center lg:justify-start items-end gap-2 border-b-2 border-b-mainbg pb-4 mb-3">
          <img src={CloudIcon} alt="cloudicon" className="mt-2" />
          <p className="text-white font-spacegrotesk font-normal text-xl leading-4 uppercase">
            {weatherInfo.condition}
          </p>
        </div>

        <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start">
          <div className="mb-3">
            <h1 className="text-xl lg:text-3xl font-normal font-spacegrotesk text-white ">
              Sunday,{" "}
              <span className=" text-xl lg:text-3xl font-normal font-spacegrotesk text-secondary">
                1:48AM
              </span>
            </h1>
          </div>
          <div className="flex justify-center lg:justify-start items-center gap-2">
            <IoLocationSharp className="text-white text-2xl font-black " />
            <h1 className="text-white text-base lg:text-xl font-normal font-spacegrotesk uppercase">
              {weatherInfo.location}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
