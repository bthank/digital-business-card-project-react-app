import React from "react";

function Body() {
    return (
        <div className="body-content">
            <div className='name-detail'>
                <h1 className="name">John Bunting</h1>
                <p className="job-title">Front-end Developer</p>
                <p className="personal-website">www.JohnBunting.com</p>
            </div>
            <div className='contact-btns'>
                <button className="btn btn-email"> <i class="fa fa-user fa-lg"></i> Email</button>
                <button className="btn btn-linkedin"><i class='fa fa-linkedin-square'></i> LinkedIn</button>
            </div>
            <div className='info-detail'>
                <div className="about-me">
                    <h2>About Me</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quidem praesentium dignissimos magnam, temporibus corporis et repellat vel error! Numquam, non? Quidem quas earum nostrum molestias labore voluptatum, rem repellendus!</p>
                </div>
                <div className="info">
                    <h2>Info</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit dignissimos dolor illum ea magni autem, unde dolorum iste consectetur aspernatur itaque obcaecati a nostrum tempore corrupti eveniet cum. Ea, deleniti?</p>
                </div>
            </div>           
        </div>
    );
}

export default Body;