import React from 'react';

const SearchBox = ({serachField, searchChange}) => {
    return (
        <input 
            className='pa3 ba b--green bg-lightest-green' 
            type="search" 
            placeholder="search robots" 
            onChange = {searchChange}
        />
    );
}

export default SearchBox;