import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import style from './SearchBar.css';

function SearchBar(props) {
	const [makeup, setMakeup] = useState(null);
	const [noMakeup, setNoMakeup] = useState([]);
	useEffect(() => {
		const url =
			'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				setMakeup(res);
				// const array = [...new Set(res.product_type)];
			});
	}, []);

	useEffect(() => {
        if(!makeup) return;
		const tempArray = makeup.map((item) => {
			return item.product_type;
		});

		const newSet = [...new Set(tempArray)];
		console.log(newSet);
        setNoMakeup(newSet)
	}, [makeup]);
	function findProducts(event) {
		event.preventDefault();
		console.log('looking for products');
	}
	return (
		<form className='searchBar-container' type=''>
			<select name='issueType' id='issueType'>
				{noMakeup.map((option, index) => {
					

					return (
						<option key={index} value={option} className='option'>
							{option}
						</option>
					);

					
				})}
			</select>
			<button onClick={findProducts}>Search</button>
		</form>
	);
}

export default SearchBar;
