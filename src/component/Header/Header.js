import React from 'react';
import About from '../About/About';
import Home from '../Home/Home';
import { Routes, Route, Link } from 'react-router';
function Header(props) {
    return (
        <div>
            
        <Link to='/about'>About</Link>
			<Routes>
				<Route path='/about' element={<About />} />
			</Routes>
        </div>
		);
}

export default Header;