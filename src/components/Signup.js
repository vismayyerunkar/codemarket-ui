import React from 'react'
import { Link } from "react-router-dom";


function Signup() {
    return (
        <div className="signup">

        <div className="intro">
            <h1>Smart Coach</h1>
            <h4>Streamline your coaching practice</h4>
        </div>
        <div className="content">

            <h2><span className="ask-authenticate">Sign Up</span> Already have an account? <Link className="link" to="login"><span className="ask-authenticate">Login</span></Link></h2>
            <button className="login-btn">Facebook</button>
            <button className="login-btn">Google</button>
            <button className="login-btn">Linkden</button>

        </div>
        </div>
    )
}

export default Signup
