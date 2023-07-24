import React from "react";
import { NavLink } from "react-router-dom";

function Nav({ dogs }) {
    return (
        <nav className="Nav">
            {
                dogs.map(dog => (<NavLink key={dog.name} to={`/dogs/${dog.name}`}>{dog.name}</NavLink>))
            }
        </nav>
    )
}

export default Nav;