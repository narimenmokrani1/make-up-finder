import './App.css';
import About from './component/About/About';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './component/Home/Home';
import ProductDetails from './component/ProductDetails/ProductDetails';

function App() {
	const [userSelection, setUserSelection] = useState('');
	const [value, setValue] = useState([2, 50]);
	return (
		<div className='App'>
			<header className='header'>
				<Link to='/about' className='about'>
					About
				</Link>

				<Link to='/home' className='home'>
					Home
				</Link>
			</header>
			<main className='hall'>
				<h1 className='main-header'>Maybeline Make-up Finder</h1>
				<h2 className='h1'>
					Want some glam? here you can find all the products you need !
				</h2>
			</main>
			<Routes>
				<Route
					path='/'
					element={
						<Home
							userSelection={userSelection}
							setUserSelection={setUserSelection}
							value={value}
							setValue={setValue}
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
							value={value}
							setValue={setValue}
						/>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
