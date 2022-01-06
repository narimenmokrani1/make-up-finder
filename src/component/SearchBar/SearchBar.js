import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


function SearchBar(props) {
    const [makeup, setMakeup] = useState([])

    const url = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
    fetch(url)
    .then((res)=> res.json())
    .then((res) => {
        console.log(res)
    })

    return (
        <form className='searchBar-container'>
           <select name="issueType" id="issueType">
               <option value=""></option>
               </select> 
               <button>Search</button>
        </form>
    );
}

export default SearchBar;