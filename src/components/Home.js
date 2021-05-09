import React from 'react'
import {Link} from "react-router-dom";
import './component.css'

function Home() {
    return (
        <div className="Home">
            <h1 id="name">Drreamz</h1>
            <Link  to='signup'>
                <button className="proceed">Click to Proceed</button>
            </Link>
        </div>
    )
}

export default Home
