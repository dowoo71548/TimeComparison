import React from 'react';
import './City.css';

const City = ({ name, date, cityNameClick }) => {
  let dateAndTime = {
    year: '',
    month: '',
    day: '',
    hour: '',
    minute: '',
    //second: '',
    amOrPm: ''
  };

  const cityTime = (format, cityTimeZone) => {
    let year = date.toLocaleString(format, { year: 'numeric', timeZone: cityTimeZone });
    let month = date.toLocaleString(format, { month: 'short', timeZone: cityTimeZone }).toUpperCase();
    let day = date.toLocaleString(format, { day: 'numeric', timeZone: cityTimeZone });
    let hour = date.toLocaleString(format, { hour: 'numeric', hour12: false, timeZone: cityTimeZone });
    let minute = date.toLocaleString(format, { minute: 'numeric', timeZone: cityTimeZone });
    //let second = date.toLocaleString(format, { second: '2-digit', timeZone: cityTimeZone });

    dateAndTime.year = year;
    dateAndTime.month = month;
    dateAndTime.day = day;

    dateAndTime.hour = parseInt(hour, 10) > 12 ? `0${hour - 12}` : hour;
    dateAndTime.hour = dateAndTime.hour.length === 3 ? dateAndTime.hour.substr(1) : dateAndTime.hour;

    dateAndTime.amOrPm = parseInt(hour, 10) === 24 || hour < 12  ? 'AM' : 'PM';
    
    dateAndTime.minute = minute < 10 ? `0${minute}` : minute;
    //dateAndTime.second = second < 10 ? `0${second}`: second;
  }

  switch (name)
  {
    case 'Athens':
      cityTime('en-US', 'Europe/Athens');
      break;      
    case 'Istanbul':
      cityTime('en-US', 'Europe/Istanbul');
      break;      
    case 'London':
      cityTime('en-US', 'Europe/London');
      break;
    case 'Los Angeles':
      cityTime('en-US', 'America/Los_Angeles');
      break;
    case 'Moscow':
      cityTime('en-US', 'Europe/Moscow');
      break;  
    case 'New York':
      cityTime('en-US', 'America/New_York');
      break;
    case 'Paris':
      cityTime('en-US', 'Europe/Paris');
      break;
    case 'Seoul':
      cityTime('en-US', 'Asia/Seoul');
      break;
    case 'Shanghai':
      cityTime('en-US', 'Asia/Shanghai');
      break;    
    case 'Taipei':
      cityTime('en-US', 'Asia/Taipei');
      break;  
    case 'Tokyo':
      cityTime('en-US', 'Asia/Tokyo');
      break;
    case 'Toronto':
      cityTime('en-US', 'America/Toronto');
      break;
    default:
  }

  const mouseOver = (e) => {
    e.target.style.fontWeight = 400;
  }

  const mouseLeave = (e) => {
    e.target.style.fontWeight = 300;
  }

  return (
    <div className='outside-container'>
      <div className='city-name'>
        <div className='inside-container-name'>
          <div></div>
          <button className='city-name-button' 
                  onMouseOver={mouseOver} 
                  onMouseLeave={mouseLeave}
                  onClick={cityNameClick}>
            {name}
          </button>
        </div>
      </div>
      <div className='time'>
        <div className='inside-container-time'>
          <div className='hour'>{`${dateAndTime.hour}:`}</div>
          <div className='minute'>{`${dateAndTime.minute}`}</div>
          <div className='ampm'>{`${dateAndTime.amOrPm}`}</div>
        </div>
      </div>
      <div className='date'>
        {`${dateAndTime.month} ${dateAndTime.day}, ${dateAndTime.year}`}
      </div>
    </div>
  );
}

export default City;