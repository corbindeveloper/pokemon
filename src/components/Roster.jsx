import React, {useState} from 'react';
import '.././App.css';

const Roster = () => {

    // State array to store the api results
    let [names, setNames] = useState([])

    const getRoster = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=2000")
            .then(response => {
                return response.json();
            })
            .then(response => {
                console.log(response);
                setNames(response.results);
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

export default Roster;