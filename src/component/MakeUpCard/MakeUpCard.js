import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
function MakeUpCard(props) {
	const [makeup, setMakeup] = useState([]);
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
	return (
		<div className='card'>
			{makeup.map((product) => {
				return (
					<div>
						<h2>{product.brand}</h2>
						<h3>{product.name}</h3>
                        <img src={product.image_link} alt={product.name} />
                        <h3>${product.price}</h3>
                        <h4>{product.description}</h4>
					</div>
				);
			})}
		</div>
	);
}

export default MakeUpCard;
