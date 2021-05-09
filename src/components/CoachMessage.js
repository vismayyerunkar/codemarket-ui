import React from 'react'
import {Link} from 'react-router-dom'

function CoachMessage() {
    return (
        <div className="coach-message">
            <div className="coach-message-header">
                <div className="coach-message-title">
                    <h1>Great, let's get Empowered</h1>
                </div>
                <div className="coach-message-subheader">
                    <h4>Discover the different ways you can take your business to the next level</h4>
                </div>
            </div>
            <div className="coach-message-content">

                <div className="coach-item">
                    Coaching is personal .No matter what your expertise is,this is the place to share it
                </div>
                <div className="coach-item">
                    A new oppportunity.Whenever and whereever you need.you'll always have someone to turn to
                </div>
                <div className="coach-item">
                    Coaching is personal .No matter what your expertise is,this is the place to share it
                </div>

                <Link to='coach-plan-payment'>
                    <button className="login-btn">
                    Continue                
                    </button>
                </Link>
            
            </div>
        </div>
    )
}

export default CoachMessage;
