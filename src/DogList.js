import React from "react";
import { Link } from "react-router-dom";

function DogList({ dogs }) {
    console.log(dogs[0].src);
    return (
        <div>
            <ul>
                {
                    dogs.map(dog => (
                    <li key={dog.name}>
                        <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
                    </li>))
                }
            </ul>
            <img src={dogs[0].src} />
        </div>
    )
}

export default DogList;