import React from 'react';
import style from './About.css';
// import { useState } from 'react';
function About(props) {
	// const [isShow, setIsShow] = useState(false);
	// function toggleDetails() {
	// 	setIsShow(!isShow);
	// }
	return (
		// <div>
		// 	<h3 onClick={toggleDetails} style={{cursor: 'pointer'}}>About</h3>
		// 	{isShow === true ? <p>
		// 		Lorem ipsum dolor sit, amet consectetur adipisicing elit. At natus,
		// 		veniam labore odit iure totam in ut quibusdam illum inventore laboriosam
		// 		nulla iste perspiciatis aut quasi officia expedita, iusto maiores!
		// 	</p> : null}
		// </div>
		<p>
			Maybeline make-up finder is a site where you can find the products you
			need with their prices. you can filter the price range you want. so if you
			are looking looking for a less than $9 bronze, just select bronze and
			flter a less than $9 price. and we'll display all the products that will
			probably be available in the market
		</p>
	);
}

export default About;
