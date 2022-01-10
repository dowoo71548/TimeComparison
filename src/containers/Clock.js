import React, { useState, useEffect } from 'react';
import SearchBox from '../components/SearchBox/SearchBox';
import CityBox from '../components/CityBox/CityBox';
import RightDisplay from '../components/RightDisplay/RightDisplay';
import { cityList } from '../components/CityBox/Cities';
import { locationsOfCities } from '../components/RightDisplay/Mapper/locationsOfCities';
import './Clock.css';

const Clock = () => {
  const [searchField, setSerachField] = useState('');
  const [cities, setCities] = useState([]);
  const [date, setDate] = useState(new Date());
  const [twoCities, setTwoCities] = useState([]);
  const [citiesOnMap, setCitiesOnMap] = useState({
    name: 'clickedCities',
    areas: [
      { id: '', shape: '', coords: [0, 0, 0] },
      { id: '', shape: '', coords: [0, 0, 0] }
    ]
  });
  
  useEffect(() => {
    setCities(cityList);

    const updateMap = () => {
      const firstCity = twoCities[0];
      const secondCity = twoCities[1];
      let first = locationsOfCities.filter(city => city.id === (firstCity));
      let second = locationsOfCities.filter(city => city.id === (secondCity));
      let filteredCities = first.concat(second);
      
      filteredCities[0].preFillColor = 'rgba(0, 0, 255, 1)'; // set first city's color to blue.
      if (filteredCities.length === 2 &&
          filteredCities[0].id !== filteredCities[1].id) {
        filteredCities[1].preFillColor = 'rgba(255, 0, 0, 1)'; // set second city's color to red.
      }
      
      setCitiesOnMap({ areas: filteredCities });
    }

    if (twoCities.length > 0) {
      updateMap();
    }

    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  },[twoCities]);

  const onSearchChange = (event) => {
    setSerachField(event.target.value);
  };

  const filteredCity = cities.filter(city => {
    if (searchField === '')
    {
      return true; // If nothing was typed in the search box, all the names of cities will show up below the search box.
    }
    return city.name.toLowerCase().includes(searchField.toLowerCase()); // else, show the names of the cities that only include the input characters typed in the search box.
  });

  const onCityNameClick = () => {
    if (twoCities.length < 2) { // The twoCities array takes only up to two elements.
      setTwoCities(original => [ ...original, filteredCity[0].name ]);
    }  
  };

  const onResetClick = () => {
    setCitiesOnMap({ areas: [] });
    setTwoCities([]);
  };

  return (
    <div className='outermost-container'>
      <div className='search-box'>
        <SearchBox searchChange={onSearchChange} />
      </div>
      <div className='city-box'>
        {
          filteredCity.length === 1 ?
            <CityBox city={filteredCity} date={date} cityNameClick={onCityNameClick} /> :
            <div className='flexbox'>
              {filteredCity.map(city => <div key={city.id}>{city.name}</div>)}
            </div>
        }
      </div >
      <div className='right-display'>
        <RightDisplay date={date} 
                      twoCities={twoCities} 
                      citiesOnMap={citiesOnMap} 
                      resetClick={onResetClick} />   
      </div>
    </div>
  );
}

export default Clock;