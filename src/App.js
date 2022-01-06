import logo from './logo.svg';
import './App.css';
import About from './component/About/About';
import { useState,  } from 'react';
import SearchBar from './component/SearchBar/SearchBar';
function App() {
	return (
		<div className='App'>
			<header>
        {/* <About/> */}
      </header>
			<main>
				<h1>Want some glam? here you can find all the products you need</h1>
			</main>
      <SearchBar/>
		</div>
	);
}

export default App;
