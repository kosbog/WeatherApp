import React, { Component } from 'react';

const Form = ({city, setCity, handleCityName}) => {
    return (
        <form noValidate onSubmit={setCity}>
            <input type="text" value={city} onChange={handleCityName} />
            <button type="submit">SET</button>
        </form>
    );
}

export default Form;