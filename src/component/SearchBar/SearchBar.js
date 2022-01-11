import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import PriceFilter from '../PriceFilter/PriceFilter';
import style from './SearchBar.css';

function SearchBar(props) {
	const [makeup, setMakeup] = useState(null);
	const [noMakeup, setNoMakeup] = useState([]);
	const [productType, setProductType] = useState('');
	useEffect(() => {
		const url =
			'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				setMakeup(res);
			});
	}, []);

	useEffect(() => {
		if (!makeup) return ;
		const tempArray = makeup.map((item) => {
			return item.product_type;
		});

		const newSet = [...new Set(tempArray)];
		console.log(newSet);
		setNoMakeup(newSet);
	}, [makeup]);
	function findProducts(event) {
		event.preventDefault();
		console.log('looking for products');
		props.setUserSelection(productType);
	}
	return (
		<div>
			<form className='searchBar-container' onSubmit={findProducts}>
				<PriceFilter value={props.value} setValue={props.setValue} />

				<select
					name='issueType'
					id='issueType'
					onChange={(event) => {
						setProductType(event.target.value);
					}}>
					{noMakeup.map((option, index) => {
						return (
							<option key={index} value={option} className='option'>
								{option}
							</option>
						);
					})}
				</select>

				<button className='searchBar-button'>Search</button>
			</form>
		</div>
	);
}

export default SearchBar;
