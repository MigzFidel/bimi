import React from 'react';
import AboutData from './data/data.json';

export default function About(){
    let data = AboutData.About[0];
    return (
        <div>
            <div class="d-flex justify-content-center mt-5">
                <h1>About Us</h1>
            </div>
            <div class="container mt-5 mb-5">
                <p>{data.content1}</p>
                <p>{data.content2}</p>
                <p>{data.content3}</p>
            </div>
        </div>
    );
}