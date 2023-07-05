import React from "react";
import './Card.css'

const Card = ({info}) => {
  return (
    <section className="info-container">
       <p>Temperatura máxima: {info.main.temp_max}</p>
       <p>Temperatura mínima: {info.main.temp_min}</p>
       <p>Descripción: {info.weather[0].description}</p>
       <p>Nubes: {info.clouds.all}</p>
       <p>Viento km/h: {info.wind.speed}</p>
    </section>
  );
};

export default Card;
