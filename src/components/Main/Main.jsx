import React, { useEffect, useState } from 'react';
import Form from '../Form/Form';
import List from '../List/List';

function Main() {

  const [forecast, setForecast] = useState({});
  const [filterCity, setFilterCity] = useState(null);

  useEffect(() => {
    
    const getForecast = async () =>{
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${filterCity ? filterCity : 'Madrid'}&appid=${import.meta.env.VITE_API_KEY}`);
        const data = await response.json();
        setForecast(data)
      } catch (error) {
        console.log(error);
      }
    }
    getForecast();
  }, [filterCity]);

  return (
      <section className='main-container'>
        <h1>Tiempo en los próximos 5 días</h1>
      <Form setCity={setFilterCity}/>
      <List forecast={forecast} />
      </section>
  )
}

export default Main