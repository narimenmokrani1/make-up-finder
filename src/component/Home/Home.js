import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import MakeUpCard from '../MakeUpCard/MakeUpCard';
function Home(props) {
	return (
		<div>
			<SearchBar
				value={props.value}
				setValue={props.setValue}
				setUserSelection={props.setUserSelection}
			/>

			<MakeUpCard userSelection={props.userSelection} value={props.value} />
		</div>
	);
}

export default Home;
