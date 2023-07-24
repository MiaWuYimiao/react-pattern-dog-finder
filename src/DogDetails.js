import React from "react";
import { Navigate, useParams } from "react-router-dom"

function DogDetails({ dogs }) {
    const { name } = useParams();
    const dog = dogs.filter(dog => dog.name === name)[0];
    console.log(dog);
    console.log(dogs[0]);

    if(!dog) {
        return <Navigate to="/dogs" />;
    }

    console.log(dog.src);
    console.log(dogs[0].src);

    return (
        <div>
            <h1>{name}</h1>
            <h4>Age: {dog.age} </h4>
            <img src={dogs[0].src}  alt={dogs[0].name} />
            <img scr={dog.src} alt={dog.name} />
            <ul>
                <h4>Fun fact:</h4>
                {
                    dog.facts.map((fact,id) => (<li key={id}>{fact}</li>))
                }
            </ul>
        </div>
    )
}

export default DogDetails;