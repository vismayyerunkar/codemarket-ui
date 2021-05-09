import React from 'react'
import {Link} from 'react-router-dom'

function CoachPlan() {
    return (
        <div className="coachplan">
        <div className="plan">
            <div className="plan-header">
                <h1>Try Drreamz for free</h1>
            </div>
            <div className="plan-body">
                <h4 className="plan-item">Unlock the full drreamz experience</h4>
                <h4 className="plan-item">Manae your entire business in one place</h4>
                <h4 className="plan-item">Grow your community and collaboration</h4>
                <h4 className="plan-item">Develop & launch new programs</h4>
            </div>
            <div className="plan-options">
                <button className="plan-annual">Annual(Best Value) $315 <span>First 14 days free</span></button>
                <button className="plan-annual">Monthly $29 <span>First 7 days free</span></button>
            </div>
            <div className="plan-footer">
                <p>After free trial, annual subscription automatically renews each year and monthly
                subscription automatically renews each month. If you subscribe before your free
                trial ends, the rest of your free trial period will be forfeited as soon as your
                purchase is confirmed. Eligible for new users only.
                </p>
                <span>Terms & Conditions</span>

                <Link to="coach">
                    <button className="plan-footer-btn">
                        Try free and subscribe
                    </button>
                </Link>
            </div>

            
        
        </div>
            
        </div>
    )
}

export default CoachPlan
