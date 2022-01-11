import Slider from '@material-ui/core/Slider';
import React from 'react';
//https://www.geeksforgeeks.org/how-to-create-price-range-selector-in-reactjs/
function PriceFilter(props) {
	const { value, setValue } = props;
	const rangeSelector = (event, newValue) => {
		setValue(newValue);
		
	};
	return (
		<div
			style={{
				margin: 'auto',
				display: 'block',
				width: 'fit-content',
			}}>
			<Slider
				value={value}
				onChange={rangeSelector}
				valueLabelDisplay='auto'
				className='slider'
			/>
			Price Ranges between ${value[0]} and ${value[1]}
		</div>
	);
}

export default PriceFilter;
