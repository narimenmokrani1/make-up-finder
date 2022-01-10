import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { useState } from 'react';
import React from 'react';
//https://www.geeksforgeeks.org/how-to-create-price-range-selector-in-reactjs/
function PriceFilter(props) {
   const {value, setValue} = props
     const rangeSelector = (event, newValue) => {
				setValue(newValue);
				console.log(newValue);
			};
            return (
	<div style={{
      margin: 'auto',
      display: 'block',
      width: 'fit-content'
    }}>
      
      {/* <Typography id="range-slider" gutterBottom>
        Select Price Range:
      </Typography> */}
      <Slider
        value={value}
        onChange={rangeSelector}
        valueLabelDisplay="auto"
      />
      Price Ranges between {value[0]} and {value[1]}
    </div>
  );
}

export default PriceFilter;
