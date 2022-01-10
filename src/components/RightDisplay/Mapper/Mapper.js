import React from 'react';
import ImageMapper from 'react-img-mapper';
import WorldMapImage from '../images/worldMap.png';
import './Mapper.css';

const Mapper = ({ citiesOnMap }) => {
  // const [coords, setCoords] = useState({ x: 0, y: 0 });

  // const setMousePointerCoords = (evt) => {
  //   setCoords({
  //     x: evt.nativeEvent.offsetX,
  //     y: evt.nativeEvent.offsetY  
  //   });
  // }

  return (
    <div>
      <div className='world-map'>
        <ImageMapper 
          src={WorldMapImage} 
          map={citiesOnMap}
          width={800}
          //onImageMouseMove={setMousePointerCoords}
        />
      </div>
      {/* <div>
        {`X: ${coords.x}, Y: ${coords.y}`}
      </div> */}
    </div>
  );
}

export default Mapper;