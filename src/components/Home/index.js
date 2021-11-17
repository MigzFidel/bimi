
import React from 'react';
import CarouselImages from './components/carousel';

export default function Home() {
    return (
        <div>
            <CarouselImages/>
            <div class="container-fluid padding">
                <div class="row g-3 padding">
                    <div class="col-md-4">
                        <div class="card">
                            <img
                                src="https://lh3.googleusercontent.com/p/AF1QipOWApR9_YAR1QI_bMvsut_3n5TSsyI36yVnfHAq=s1280-p-no-v1"
                                class="card-img-top"
                                alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Food Panda</h5>
                                <p class="card-text">Stay Home. Stay safe.</p>
                                <p>Deliver via foodpanda</p>
                                <a
                                    href="https://www.foodpanda.ph/restaurant/ph9t/bimi-takoyaki-private-road?fbclid=IwAR37tm-6NMC7YifMDp948Al6nmsC1D02oeiXNz6DeM_ApBOdqIKWKq4SM-0"
                                    class="btn btn-success">Order now</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <img
                                src="https://lh3.googleusercontent.com/p/AF1QipMp42Qs1IX_ht1t0AiFCzjdk3ZAR1IZFaC6H1hm=s1280-p-no-v1"
                                class="card-img-top"
                                alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Grab Food</h5>
                                <p class="card-text">Stay Home. Stay safe.</p>
                                <p>Deliver via GrabFood PH</p>
                                <a
                                    href="https://food.grab.com/ph/en/restaurant/bimi-takoyaki-mandaluyong-delivery/2-C2LYC2UWLVMJUA?fbclid=IwAR2e3R-vCGCz3lcoknwhE2JCWx3UxABixji7TjAQi_dHnCMiGIY9Y-KUDJ0"
                                    class="btn btn-success">Order now</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <img
                                src="https://lh3.googleusercontent.com/p/AF1QipOWmZ-bFyDs4A2U-qCXA5ho8cHZ3hjQ4TlQ-nus=s1280-p-no-v1"
                                class="card-img-top"
                                alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Stay Safe Together</h5>
                                <p class="card-text">Bimi Takoyaki × Ingat Angat</p>
                                <p class="card-text">Visit Us on Facebook</p>
                                <div class="d-grip gap-2 d-md-flex justify-content-md-start">
                                    <a href="https://www.facebook.com/BIMITakoyakiMain/" class="btn btn-primary">Bimi Takoyaki</a>
                                    <a
                                        href="https://www.facebook.com/ingatangatph/"
                                        class="btn btn-outline-primary">Ingat Angat</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}