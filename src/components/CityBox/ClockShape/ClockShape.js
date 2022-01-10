import React from 'react';
import './ClockShape.css';

const ClockShape = ({name, date }) => {
  let hourHand, minuteHand, secondHand;

  const cityHours = (format, cityTimeZone) => {
    let hours = date.toLocaleString(format, 
      { hour: '2-digit', hour12: false, timeZone: cityTimeZone });

    return parseInt(hours);
  }

  const cityMinutes = (format, cityTimeZone) => {
    let minutes = date.toLocaleString(format, 
      { minute: '2-digit', timeZone: cityTimeZone });

    return parseInt(minutes);
  }

  const citySeconds = (format, cityTimeZone) => {
    let seconds = date.toLocaleString(format, 
      { second: '2-digit', timeZone: cityTimeZone });

    return parseInt(seconds);
  }

  switch (name)
  {
    case 'Athens':
      hourHand = cityHours('en-US', 'Europe/Athens');
      minuteHand = cityMinutes('en-US', 'Europe/Athens');
      secondHand = citySeconds('en-US', 'Europe/Athens');
      break;      
    case 'Istanbul':
      hourHand = cityHours('en-US', 'Europe/Istanbul');
      minuteHand = cityMinutes('en-US', 'Europe/Istanbul');
      secondHand = citySeconds('en-US', 'Europe/Istanbul');
      break;      
    case 'London':
      hourHand = cityHours('en-US', 'Europe/London');
      minuteHand = cityMinutes('en-US', 'Europe/London');
      secondHand = citySeconds('en-US', 'Europe/London');
      break;
    case 'Los Angeles':
      hourHand = cityHours('en-US', 'America/Los_Angeles');
      minuteHand = cityMinutes('en-US', 'America/Los_Angeles');
      secondHand = citySeconds('en-US', 'America/Los_Angeles');
      break;
    case 'Moscow':
      hourHand = cityHours('en-US', 'Europe/Moscow');
      minuteHand = cityMinutes('en-US', 'Europe/Moscow');
      secondHand = citySeconds('en-US', 'Europe/Moscow');
      break;  
    case 'New York':
      hourHand = cityHours('en-US', 'America/New_York');
      minuteHand = cityMinutes('en-US', 'America/New_York');
      secondHand = citySeconds('en-US', 'America/New_York');
      break;
    case 'Paris':
      hourHand = cityHours('en-US', 'Europe/Paris');
      minuteHand = cityMinutes('en-US', 'Europe/Paris');
      secondHand = citySeconds('en-US', 'Europe/Paris');
      break;
    case 'Seoul':
      hourHand = cityHours('en-US', 'Asia/Seoul');
      minuteHand = cityMinutes('en-US', 'Asia/Seoul');
      secondHand = citySeconds('en-US', 'Asia/Seoul');
      break;
    case 'Shanghai':
      hourHand = cityHours('en-US', 'Asia/Shanghai');
      minuteHand = cityMinutes('en-US', 'Asia/Shanghai');
      secondHand = citySeconds('en-US', 'Asia/Shanghai');
      break;    
    case 'Taipei':
      hourHand = cityHours('en-US', 'Asia/Taipei');
      minuteHand = cityMinutes('en-US', 'Asia/Taipei');
      secondHand = citySeconds('en-US', 'Asia/Taipei');
      break;  
    case 'Tokyo':
      hourHand = cityHours('en-US', 'Asia/Tokyo');
      minuteHand = cityMinutes('en-US', 'Asia/Tokyo');
      secondHand = citySeconds('en-US', 'Asia/Tokyo');
      break;
    case 'Toronto':
      hourHand = cityHours('en-US', 'America/Toronto');
      minuteHand = cityMinutes('en-US', 'America/Toronto');
      secondHand = citySeconds('en-US', 'America/Toronto');
      break;
    default:
      hourHand = 0;
      minuteHand = 0;
      secondHand = 0;
  }

  hourHand *= 30;
  minuteHand *= 6;
  secondHand *= 6;

  const styleHour = {
    transform: `rotateZ(${hourHand + minuteHand / 12}deg)`
  }

  const styleMinutes = {
    transform: `rotateZ(${minuteHand}deg)`
  }

  const styleSeconds = {
    transform: `rotateZ(${secondHand}deg)`
  }

  return (
    <div className='clock__container grid'>
      <div className='clock__content grid'>
        <div className='clock__circle'>
          <span className='clock__twelve'></span>
          <span className='clock__three'></span>
          <span className='clock__six'></span>
          <span className='clock__nine'></span>

          <div className='clock__rounder'></div>
          <div className='clock__hour' style={styleHour}></div>
          <div className='clock__minutes' style={styleMinutes}></div>
          <div className='clock__seconds' style={styleSeconds}></div>
        </div>
      </div>
    </div>
  );
}

export default ClockShape;