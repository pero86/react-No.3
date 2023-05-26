import React from "react"

export default function Card(props) {
    
    return (
        <div className="card">
            <div>
                <img 
                    src={props.imageUrl} className="card--image" 
                />
            </div>
            <div className="card--stats">
                <div className="card--location">
                    <img src="../images/Icon-location.png" className="path--logo"/>
                    <h2>{props.location}</h2>
                    <a href="{}" className="card--map">View on Google Maps</a>
                </div>
                <div className="card--title">
                    <p>{props.title}</p>
                </div>
                <div className="card--dates">
                    <p>{props.startDate}</p>
                    <p>{props.endDate}</p>
                </div>
                <div className="card--text">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}