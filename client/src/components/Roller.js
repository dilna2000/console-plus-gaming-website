import React from 'react';
import axios from "axios";

const Roller = () => {
    const options = {
        method: 'POST',
        url: 'https://rapidapi.p.rapidapi.com/getCharacters',
        headers: {
            'x-rapidapi-key': 'f3db8dff09msha5bbe894279d80cp17a919jsn5bf76e113062',
            'x-rapidapi-host': 'GameDatabasestefan-skliarovV1.p.rapidapi.com'
        }
    };
    function onSubmit() {
        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }
    return (
        <div className="container">
           
              

            <div onClick={onSubmit} >Click me</div>
             
            </div>
        )
}

export default Roller;