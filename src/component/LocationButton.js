import React from 'react'
import { Button } from 'react-bootstrap';

const LocationButton = ({cities, handleCityChange, selectedCity}) => {
  return (
    <div className="location-btn">
      <Button 
        variant={`${selectedCity === '' ? "warning" : "outline-warning"}`}
        onClick={() => handleCityChange("current")}
        className="btns"
      >
        Current Location
      </Button>

      {cities.map((city)=>(
        <Button 
          variant={`${selectedCity === city ? "warning" : "outline-warning"}`}
          onClick={()=>handleCityChange(city)}
          className="btns"
        >
          {city}  
        </Button>
      ))}
    </div>
  )
}

export default LocationButton

