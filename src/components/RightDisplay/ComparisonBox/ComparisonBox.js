import React from 'react';
import './ComparisonBox.css';

const ComparisonBox = ({ twoCities, date, resetClick }) => {
  let firstIsFaster = true;

  const calculateTimeofCity = (city) => {
    let dateAndTime = {
      year: 0,
      month: 0,
      day: 0,
      hour: 0,
      minute: 0
    };

    const cityTime = (format, cityTimeZone) => {
      let year = date.toLocaleString(format, { year: 'numeric', timeZone: cityTimeZone });
      let month = date.toLocaleString(format, { month: 'numeric', timeZone: cityTimeZone }).toUpperCase();
      let day = date.toLocaleString(format, { day: 'numeric', timeZone: cityTimeZone });
      let hour = date.toLocaleString(format, { hour: 'numeric', hour12: false, timeZone: cityTimeZone });
      //let minute = date.toLocaleString(format, { minute: 'numeric', timeZone: cityTimeZone });
      //let second = date.toLocaleString(format, { second: '2-digit', timeZone: cityTimeZone });
  
      dateAndTime.year = parseInt(year, 10);
      dateAndTime.month = parseInt(month, 10);
      dateAndTime.day = parseInt(day, 10);
      
      dateAndTime.hour = parseInt(hour, 10);
      //dateAndTime.minute = parseInt(minute, 10);
      //dateAndTime.second = second < 10 ? `0${second}`: second;
    }

    switch (city)
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

      return dateAndTime;
  }

  const hourDifference = (first, second) => {
    let difference = 0;

    if (first.hour === 24) {
      first.hour = 0;
    }
    if (second.hour === 24) {
      second.hour = 0;
    }

    if (first.day > second.day) {
      difference = (first.hour + 24) - second.hour;
    }
    else if (first.day < second.day) {
      firstIsFaster = false;
      difference = (second.hour + 24) - first.hour;
    }
    else {
      if (first.hour > second.hour) {
        difference = first.hour - second.hour;
      }
      else {
        firstIsFaster = false;
        difference = second.hour - first.hour;
      }
    }

    return difference;
  } 

  const mouseOver = (e) => {
    e.target.style.fontWeight = 500;
  }

  const mouseLeave = (e) => {
    e.target.style.fontWeight = 300;
  }

  let timeOfFirstCity = calculateTimeofCity(twoCities[0]);
  let timeOfSecondCity = calculateTimeofCity(twoCities[1]);
  let hourDiff = hourDifference(timeOfFirstCity, timeOfSecondCity);

  return (
    <div>
      <div className='time-difference-box'>
        {
          hourDiff === 0
          ? (
            twoCities[0] === twoCities[1]
            ? <div>Please select two <i>different cities</i><br/>for comparison.</div>
            : <div>No time difference <br/>between <i>{twoCities[0]}</i> and <i>{twoCities[1]}</i>.</div>
          )
          : (
            firstIsFaster
            ? <div>
                <span className='first-city'>{twoCities[0]}</span>
                &nbsp;is {hourDiff} hours ahead of&nbsp;
                <span className='second-city'>{twoCities[1]}</span>.
              </div>
            : <div>
                <span className='second-city'>{twoCities[1]}</span> 
                &nbsp;is {hourDiff} hours ahead of&nbsp;
                <span className='first-city'>{twoCities[0]}</span>.
              </div>
          )
        }
      </div>
      <br/>
      <div className='reset-button-text'>
        <button className='reset-button'
                onMouseOver={mouseOver} 
                onMouseLeave={mouseLeave}
                onClick={resetClick}>
          Reset
        </button>
      </div>
    </div>
  )


}

export default ComparisonBox;