import React, {useState} from 'react';
import CityWeather from './CityWeather';

const WeatherApp = (props) =>{
    const[cityNameForWeather, setCityNameForWeather] = useState('');
    const[changeCity, setChangeCity] = useState('');
  

    const submitHandler =(event)=>{
        event.preventDefault();
        if(!changeCity){
            alert("These fields can't be empty");
        }else{
            setCityNameForWeather({ name: changeCity});
        }
    }

return(
    <div className="container">
    <CityWeather cityName={cityNameForWeather} />
    <div className="row justify-content-center">
        <form onSubmit={submitHandler}>
            <input type="text"  value={changeCity} onChange={(event) => setChangeCity(event.target.value)} />
            <input type="submit" className="btn btn-primary" value="Search!" />
        </form>
    </div>
</div>
);
};


export default WeatherApp;
