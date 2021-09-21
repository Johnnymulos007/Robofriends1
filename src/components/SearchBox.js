import React from "react";


const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='pa2'>
            <input 
            className='bg-lightest-blue dib ba pa3 b--green'
            type='search'
            placeholder='search robots'
            onChange={searchChange}
            />
        </div>
    );
}
 export default SearchBox;









