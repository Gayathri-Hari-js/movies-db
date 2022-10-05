import React, { useState }  from 'react'
import { useDispatch } from 'react-redux'
import {fetchSearchResults} from '../Middleware/api'

function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('');
    const dispatch = useDispatch();

    const handleSearch = async (e) => {
        e.preventDefault();
        const data = await fetchSearchResults(searchQuery);
        dispatch({ type: 'SEARCH_DATA', payload: data });
    }
    const handleChange = (e) => {
        e.preventDefault();
        setSearchQuery(e.target.value)
    }
  return (
    <div style={{width:'100%'}}>
        <form className='search_form'>
            <label className='search_label'>
                <input type='text' placeholder='Search for a movie, shows here...' onChange={handleChange}/>
            </label>
            <button className = 'search_button' onClick={handleSearch}>Search</button>
        </form>
    </div>
  )
}

export default SearchBar