import React from 'react'
import { useState } from 'react-dom';
import { FaCircle, FaRocket, FaYoutube, FaWikipediaW } from 'react-icons/fa'
import { IoMdRocket } from 'react-icons/io'
import './card.css'
const Card = (props) => {
    const {
        flight_number,
        mission_name,
        launch_year,
        launch_success,
        links,
        rocket,
        detalis,
        launch_site
    } = props.data;
    const imgUrl = links.mission_patch_small;
    const land_success = rocket.first_stage.cores[0].land_success;
    const launch_color = launch_success ? "green" : "red"
    const land_color = land_success ? "green" : "red"


    return (
        <div className="card-wrapper">
            <div className="card-background">
                <div className="card-icon">
                    <div className="img-cont">
                        <img className="card-img" src={imgUrl} alt="" />
                    </div>
                    <div className="card-name">
                        <h3 className="flight-num">#{flight_number}</h3>
                        <h3> {mission_name}</h3>
                    </div>
                </div>
                <div className="card-content">
                    <div>Rocket: {rocket.rocket_name}</div>
                    <div>Launch Year: {launch_year}</div>
                    <div>Launch: <IoMdRocket style={{ color: launch_color, fontSize: "16px" }}></IoMdRocket></div>
                    <div>Landing: <IoMdRocket style={{ color: land_color, fontSize: "16px" }}></IoMdRocket></div>
                    <div>Launch Site: {launch_site.site_name}</div>
                    <div className="icon-link">
                        <div >
                            <a href={links.video_link}><FaYoutube style={{ color: "red", fontSize: "26px" }} /></a>
                        </div>
                        <div>
                            <a href={links.wikipedia}><FaWikipediaW style={{ color: "white", fontSize: "26px" }} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
// #181818
// #202020