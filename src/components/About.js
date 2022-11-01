import React from "react";

function About ({about}, {image="https://via.placeholder.com/215"}){
    return (
    <div className="About">
        <aside>
            <img src={image} alt="blog logo" />
            <p>{about}</p>
        </aside>
    </div>
    )
}

export default About;