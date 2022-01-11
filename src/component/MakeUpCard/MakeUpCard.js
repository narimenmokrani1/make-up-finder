import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import style from './MakeUpCard.css';
//https://reactrouter.com/docs/en/v6/api#usenavigate
import { useNavigate } from 'react-router-dom';
///////////////////////////////////////////////////////
//////////////////////////////////////////////////////
function MakeUpCard(props) {
	const [makeup, setMakeup] = useState([]);
	//https://reactrouter.com/docs/en/v6/api#usenavigate
	const navigate = useNavigate();
	useEffect(() => {
		if (!props.userSelection) return;
		const url = `https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline${
			props.userSelection && `&product_type=${props.userSelection}`
		}${props.value[0] ? `&price_greater_than=${props.value[0]}` : ''}${
			props.value[1] ? `&price_less_than=${props.value[1]}` : ''
		}`;
		
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setMakeup(res);
			});
	}, [props.userSelection, props.value]);

	const showProductDetails = (productId) => {
		navigate(`/product/${productId}`);
	};

	if (!makeup) {
		return <h1>still loading....</h1>;
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
						<button
							className='searchBar-button'
							onClick={() => showProductDetails(product.id)}>
							Select
						</button>
					</div>
				);
			})}
		</div>
	);
}

export default MakeUpCard;
