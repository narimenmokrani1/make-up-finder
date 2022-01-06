import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import style from './SearchBar.css'
function SearchBar(props) {
	const [makeup, setMakeup] = useState([]);

	const url =
		'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';
	fetch(url)
		.then((res) => res.json())
		.then((res) => {
			

			// console.log(res);
			setMakeup(res);
			
		});
function findProducts(event) {
event.preventDefault()
    console.log('looking for products')
}
	return (
		<form className='searchBar-container'>
			<select name='issueType' id='issueType'>
				{makeup.map((option) => {
                    if(option.product_type) {

                        return <option key={option.id} value={option.product_type}>{option.product_type}</option> ;
                    }
				})}
			</select>
			<button onClick={findProducts}>Search</button>
		</form>
	);
}

export default SearchBar;
