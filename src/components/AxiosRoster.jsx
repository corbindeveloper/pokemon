import React, {useState} from 'react';
import '.././App.css';
import axios from 'axios';

const AxiosRoster = () => {

    // State array to store the api results
    let [names, setNames] = useState([])

    const getRoster = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=2000")
            .then(response => {
                console.log(response);
                setNames(response.data.results);
            })
            .catch(err => {
                console.log(err)
            });
    };

    return (
        <div>
            <button onClick={getRoster}>Get Pokemon Roster!</button>
            {
                names.map((nameObj, idx) => {
                    return (
                        <div>
                            <p>{nameObj.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default AxiosRoster;