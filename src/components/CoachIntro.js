import React from 'react'
import {Link} from 'react-router-dom'


function CoactIntro() {
    return (
        <div className="coach-intro">
            <h1>Are You a Coach ?</h1>
            <Link to="coach-message"><button className="login-btn">Yes</button></Link>
            <button className="login-btn">No</button>
        </div>
    )
}

export default CoactIntro
