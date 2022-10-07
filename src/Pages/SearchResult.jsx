import React from 'react'
import {useSelector} from 'react-redux';
import Card from '../Components/Cards';

function SearchResult() {
    const searchResult = useSelector((state) => state.searchReducer.filtered);
    return (
        <section className='inner_content_part_two'>
            <div style={{width:'100%'}}>
            <h2 style={{paddingTop: '50px'}}>Search Result</h2>
            <div className='card_container'>
                {searchResult && searchResult.map(movie=>(
                <Card key={movie.id} data={movie}></Card>))}
            </div>
            <p>{searchResult.length >0?'':'No results found'}</p>
            </div>
            </section>
    )
}

export default SearchResult