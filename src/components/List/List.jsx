import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from './Card/Card';



const List = ({ forecast }) => {
  if (!forecast || !forecast.list) {
    return <p>No se ha encontrado</p>;
  }

  // Filtro la info para que se imprima solo la temp de 1 dia a las 12pm
  const filteredData = forecast.list.reduce((acc, info) => {
    const date = info.dt_txt.split(' ')[0];
    const time = info.dt_txt.split(' ')[1];

    if (time === '12:00:00') {
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(info);
    }

    return acc;
  }, {});

  return (
    <section >
      {Object.keys(filteredData).map((date) => (
        <div key={date} className='data-container'>
          <h2>{date}</h2>
          {filteredData[date].map((info) => (
            <Card info={info} key={uuidv4()} />
          ))}
        </div>
      ))}
    </section>
  );
};

export default List;
