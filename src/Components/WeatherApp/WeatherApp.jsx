import React, { useState } from 'react'
import './WeatherApp.css'
import Rain from '../Assets/rain.png'
import Sun from '../Assets/sun.png'
import Cloud from '../Assets/could.png'
import Snow from '../Assets/snow.png'
import Drizzle from '../Assets/drizzeljpeg.jpeg'


const WeatherApp = () => {

    
     let api_key ="91fc1df85fd6f6757bc247c5ea60c1bc";
     const [wicon,setWicon]=useState(Cloud)

     const search = async () => {
        const element = document.getElementsByClassName("input");
        if (element[0].value === "") {
            return 0;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${api_key}`;
        let response = await fetch(url);
        let data = await response.json();
    
        const humidity = document.getElementsByClassName("Humidity-percentage");
        const wind = document.getElementsByClassName("wind-rate");
        const temprature = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");
    
        humidity[0].innerHTML = data.main.humidity +" %";
        wind[0].innerHTML = data.wind.speed +" km/h";
        temprature[0].innerHTML = data.main.temp +" C°";
        location[0].innerHTML = data.name;


        if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
        {
            setWicon(Drizzle)
        }
        else  if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
        {
            setWicon(Cloud)
        }
        else  if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
        {
            setWicon(Sun)
        }
        else  if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
        {
            setWicon(Drizzle)
        }
        else  if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
        {
            setWicon(Rain)
        }
        else  if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
        {
            setWicon(Rain)
        }
        else  if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
        {
            setWicon(Snow)
        }
        else{
            setWicon(Cloud)
        }
    };
    





  return (
    <div className='container'>
           <div className='nav'>
            <input
            type='text'
            className='input'
            placeholder='Search'
            
            />
            <div className='search-icon' onClick={()=>{search()}}>
            <ion-icon name="search"></ion-icon>
            </div>

           </div>
           <div className='weather-image'>
            <img src={wicon} alt=''/>

           </div>
           <div className="weather-temp">24 c°</div>
           <div className="weather-location">Algeria</div>
           <div className="data-container">
              <div className="element">
                <div className='icon'>
                <ion-icon name="rainy"></ion-icon>
                </div>
              
                <div className='data'>
                    <div className='Humidity-percentage'>64%</div>
                    <div className='text'>Humidity</div>
                </div>
              </div>
              <div className="element">
              <div className='icon'>
              <ion-icon name="cloud-circle"></ion-icon>
                </div>
              
                <div className='data'>
                    <div className='wind-rate'>20 km/h</div>
                    <div className='text'>Wind speed</div>
                </div>
              </div>
           </div>
    </div>
  )
}

export default WeatherApp