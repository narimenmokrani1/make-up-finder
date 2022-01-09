import logo from './logo.svg';
import './App.css';
import About from './component/About/About';
import { useState } from 'react';
import SearchBar from './component/SearchBar/SearchBar';
import MakeUpCard from './component/MakeUpCard/MakeUpCard';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './component/Home/Home';
import ProductDetails from './component/ProductDetails/ProductDetails';
function App() {
	const [userSelection, setUserSelection] = useState('');

	return (
		<div className='App'>
			<header className='header'>
				<Link to='/about' className='about'>About</Link>

				<Link to='/home' className='home'>Home</Link>
			</header>
			<main>
				<h1 className='h1'>
					Want some glam? here you can find all the products you need
				</h1>
			</main>
			<Routes>
				<Route
					path='/'
					element={
						<Home
							userSelection={userSelection}
							setUserSelection={setUserSelection}
						/>
					}
				/>
				<Route path='/product/:id' element={<ProductDetails />} />
				<Route path='/about' element={<About />} />
				<Route
					path='/home'
					element={
						<Home
							userSelection={userSelection}
							setUserSelection={setUserSelection}
						/>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
