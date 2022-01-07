import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import style from'./MakeUpCard.css'
function MakeUpCard(props) {
	const [makeup, setMakeup] = useState([]);
	useEffect(() => {
		const url =
			`https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline${props.userSelection && `&product_type=${props.userSelection}`}`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				setMakeup(res);
				// const array = [...new Set(res.product_type)];

			});
	}, [props.userSelection]);

    if (!makeup) {
        return <h1>still loading....</h1>
    }
	return (
		<div>
			{makeup.map((product) => {
				return (
					<div key={product.id} className='card'>
						<h1>Maybeline</h1>
						<h3>{product.name}</h3>
						<img src={product.image_link} alt={product.name} />
						<h3>${product.price}</h3>
                        <button>Select</button>
						<h4>{product.description}</h4>
					</div>
				);
			})}
		</div>
	);
}

export default MakeUpCard;
