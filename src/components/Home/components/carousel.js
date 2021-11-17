import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

export default function CarouselImages() {
    return (
        <Carousel interval={1500}>
        <Carousel.Item>
            <div class="d-flex justify-content-center">
                <img src="https://lh3.googleusercontent.com/RuaUNblcyW_JaaFdw3cu8P4yml2SQ5Ofwn1HdnTint6vVc-vvP8a1j4Mhu2s4W7w30TQLnhwaTQxsL5A8Q=w960-h960-n-o-v1"/>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div class="d-flex justify-content-center">
                <img src="https://lh3.googleusercontent.com/q4qM8c5GKCqiYNbBgfwFR3O2Fpch6RjBtreGtjqIcdt_ujGfp_ZRSX-wrXi008bDcpHDdpe5cFdZlRRxRg=w960-h960-n-o-v1" height="1080px" width="auto"/>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div class="d-flex justify-content-center">
                <img src="https://lh3.googleusercontent.com/4Ce3Du6w7pjwTW_YL1ck2dmxwd6Snvg5-gz-AD1hHb0jcm6WzdFjViXQbQa2-ygr7-Zb-zeFHxpdpOYk=w1080-h608-p-no-v0"/>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div class="d-flex justify-content-center">
                <img src="https://lh3.googleusercontent.com/5i-0tv-7w-j8-RKsiycmyU9vpKGGLiVQwhtGl056G3viBMHShg1nQ7hWzhWOSY4FQLycDbisxxAnRx79SQ=w960-h960-n-o-v1" height="1080px" width="auto"/>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div class="d-flex justify-content-center">
                <img src="https://lh3.googleusercontent.com/0qrBjhUK5QcaQZQfFZPW-MT-Cd03_ll_T3x7t7SWBRzYyBlnvfZIes2xBThGtWoWZJIJ18YfyREKpO_7ug=w960-h960-n-o-v1" height="1080px" width="auto"/>
            </div>
        </Carousel.Item>
    </Carousel>);
}