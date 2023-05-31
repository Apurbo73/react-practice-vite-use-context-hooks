import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const Component3 = () => {
    const {book,country}=useContext(UserContext)
    return (
        <div>
            <h1>second state data:</h1>
            <h3>{book.id}</h3>
            <h3>{book.name}</h3>
            <h1>third state data:</h1>
            <h3>{country.id}</h3>
            <h3>{country.name}</h3>

        </div>
    );
};

export default Component3;