import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import style from './ProductDetails.css';
// import { Link } from 'react-router-dom';
function ProductDetails(props) {
	const { id } = useParams();
	const [product, setProduct] = useState({});
	useEffect(() => {
		const url = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				console.log('Single product:', res);
				setProduct(res);
			});
	}, []);
	return (
		<div>
			<div key={product.id} className='card'>
				<h1>Maybeline</h1>
				<h3>{product.name}</h3>
				<img src={product.image_link} alt={product.name} />
				<h3>${product.price}</h3>

				<a className='productLink-button' href={product.product_link}>
					Shop for product here
				</a>

				{/* <button>Select</button> */}
				<h4>{product.description}</h4>
			</div>
		</div>
	);
}

export default ProductDetails;
