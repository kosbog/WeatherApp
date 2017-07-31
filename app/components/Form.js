import React, { Component } from 'react';

const Form = ({ city, setCity, handleCityName }) => {
    return (
        <form noValidate onSubmit={setCity}>
            <input
                type="text"
                value={city}
                onChange={handleCityName}
                placeholder="e.g. New York" />
            <button type="submit">Choose city</button>
        </form>
    );
}

export default Form;