import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import MakeUpCard from '../MakeUpCard/MakeUpCard';
function Home(props) {
    return (
			<div>
				<SearchBar setUserSelection={props.setUserSelection} />
				<MakeUpCard userSelection={props.userSelection} />
			</div>
		);
}

export default Home;