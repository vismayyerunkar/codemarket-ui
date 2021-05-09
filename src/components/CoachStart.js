import React from 'react'
import {Link} from 'react-router-dom'

function CoachStart() {
    return (
        <div className="coach-start">
            <div className="coach-start-header">
                <h1>Here we go.</h1>
            </div>
            <div className="coach-start-body">
                <h1 id="coach-start-title">Your journey to a happier,healthier coaching practice starts now...</h1>
                <Link to="coach-plan-payment"><button className="login-btn coach-start-btn">Explore Drreamz</button></Link>
            </div>
        </div>
    )
}

export default CoachStart
