import React from 'react';
import Mapper from './Mapper/Mapper';
import ComparisonBox from './ComparisonBox/ComparisonBox';
import './RightDisplay.css';

const RightDisplay = ({ date, twoCities, citiesOnMap, resetClick }) => {

  return (
    <div className='right-display-grid'>
      <div className='world-map'>
        <Mapper citiesOnMap={citiesOnMap} />
      </div>
      <div className='selected-cities'>
        {
          twoCities.length === 1
          ? <div><i>{twoCities[0]}</i> is located at a <span className='blue-text'>blue</span> dot.</div>
          : twoCities.length === 2 && twoCities[0] !== twoCities[1]
            ? <div><i>{twoCities[0]}</i> is located at a <span className='blue-text'>blue</span> dot.<br/>
                   <i>{twoCities[1]}</i> is located at a <span className='red-text'>red</span> dot.</div>
            : twoCities.length === 2 && twoCities[0] === twoCities[1]
              ? <div><i>{twoCities[0]}</i> is located at a <span className='blue-text'>blue</span> dot.</div>
              : ''
        }
      </div>  
      <div className='text-box'>
        {
          twoCities.length === 2 ?
            <ComparisonBox twoCities={twoCities} date={date} resetClick={resetClick} /> :
          <div className='notice-text'>
            Search two cities.<br/>
            (Click the <b>city name</b> for time comparison)
          </div>  
        }
      </div>
    </div> 
  );
}

export default RightDisplay;