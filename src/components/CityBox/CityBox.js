import React from 'react';
import City from './City/City';
import ClockShape from './ClockShape/ClockShape';

const CityBox = ({ city, date, cityNameClick }) => {
  return (
    <div>
      <div>
        <ClockShape name={city[0].name} date={date} />
      </div>
      <div>
        <City name={city[0].name} date={date} cityNameClick={cityNameClick} />   
      </div>
    </div>
  );
}

export default CityBox;