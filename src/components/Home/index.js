import React from 'react';

export default function Home(){
    return<div> <nav class="navbar navbar-expand-md navbar-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">BIMI TAKOYAKI</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
                <li class="navbar-item">
                    <a class="nav-link active" href="#" data-bs-toggle="collapse">HOME</a>
                </li>
                <li class="navbar-item">
                    <a class="nav-link" href="#" data-bs-toggle="collapse">ABOUT</a>
                </li>
                <li class="navbar-item">
                    <a class="nav-link" href="#" data-bs-toggle="collapse">MENU</a>
                </li>
            </ul>
            <a class="nav-link" href="#"><i class="fas fa-shopping-cart"></i></a>
        </div>
    </div>
</nav>
<div id="slides" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#slides" data-bs-slide-to="0" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#slides" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#slides" data-bs-slide-to="2" class="active" aria-current="true" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#slides" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#slides" data-bs-slide-to="4" aria-label="Slide 5"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item">
        <div class="d-flex justify-content-center">
            <img src="https://lh3.googleusercontent.com/RuaUNblcyW_JaaFdw3cu8P4yml2SQ5Ofwn1HdnTint6vVc-vvP8a1j4Mhu2s4W7w30TQLnhwaTQxsL5A8Q=w960-h960-n-o-v1"/>
        </div>
      </div>
      <div class="carousel-item">
        <div class="d-flex justify-content-center">
            <img src="https://lh3.googleusercontent.com/q4qM8c5GKCqiYNbBgfwFR3O2Fpch6RjBtreGtjqIcdt_ujGfp_ZRSX-wrXi008bDcpHDdpe5cFdZlRRxRg=w960-h960-n-o-v1" height="1080px" width="auto"/>
        </div>
      </div>
      <div class="carousel-item active">
        <div class="d-flex justify-content-center">
            <img src="https://lh3.googleusercontent.com/4Ce3Du6w7pjwTW_YL1ck2dmxwd6Snvg5-gz-AD1hHb0jcm6WzdFjViXQbQa2-ygr7-Zb-zeFHxpdpOYk=w1080-h608-p-no-v0"/>
        </div>
      </div>
      <div class="carousel-item">
        <div class="d-flex justify-content-center">
            <img src="https://lh3.googleusercontent.com/5i-0tv-7w-j8-RKsiycmyU9vpKGGLiVQwhtGl056G3viBMHShg1nQ7hWzhWOSY4FQLycDbisxxAnRx79SQ=w960-h960-n-o-v1" height="1080px" width="auto"/>
        </div>
      </div>
      <div class="carousel-item">
        <div class="d-flex justify-content-center">
            <img src="https://lh3.googleusercontent.com/0qrBjhUK5QcaQZQfFZPW-MT-Cd03_ll_T3x7t7SWBRzYyBlnvfZIes2xBThGtWoWZJIJ18YfyREKpO_7ug=w960-h960-n-o-v1" height="1080px" width="auto"/>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#slides" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#slides" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
</div>
<div class="container-fluid padding">
    <div class="row g-3 padding">
        <div class="col-md-4">
            <div class="card">
                <img src="https://lh3.googleusercontent.com/p/AF1QipOWApR9_YAR1QI_bMvsut_3n5TSsyI36yVnfHAq=s1280-p-no-v1" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Food Panda</h5>
                    <p class="card-text">Stay Home. Stay safe.</p>
                    <p>Deliver via foodpanda</p>
                    <a href="https://www.foodpanda.ph/restaurant/ph9t/bimi-takoyaki-private-road?fbclid=IwAR37tm-6NMC7YifMDp948Al6nmsC1D02oeiXNz6DeM_ApBOdqIKWKq4SM-0" class="btn btn-success">Order now</a>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <img src="https://lh3.googleusercontent.com/p/AF1QipMp42Qs1IX_ht1t0AiFCzjdk3ZAR1IZFaC6H1hm=s1280-p-no-v1" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Grab Food</h5>
                    <p class="card-text">Stay Home. Stay safe.</p>
                    <p>Deliver via GrabFood PH</p>
                    <a href="https://food.grab.com/ph/en/restaurant/bimi-takoyaki-mandaluyong-delivery/2-C2LYC2UWLVMJUA?fbclid=IwAR2e3R-vCGCz3lcoknwhE2JCWx3UxABixji7TjAQi_dHnCMiGIY9Y-KUDJ0" class="btn btn-success">Order now</a>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <img src="https://lh3.googleusercontent.com/p/AF1QipOWmZ-bFyDs4A2U-qCXA5ho8cHZ3hjQ4TlQ-nus=s1280-p-no-v1" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Stay Safe Together</h5>
                    <p class="card-text">Bimi Takoyaki × Ingat Angat</p>
                    <p class="card-text">Visit Us on Facebook</p>
                    <div class="d-grip gap-2 d-md-flex justify-content-md-start">
                        <a href="https://www.facebook.com/BIMITakoyakiMain/" class="btn btn-primary">Bimi Takoyaki</a>
                        <a href="https://www.facebook.com/ingatangatph/" class="btn btn-outline-primary">Ingat Angat</a>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</div>
<footer>
    <div class="container-fluid">
        <div class="row text-center">
            <div class="col-md-4 text-center">
                <hr class="light"/>
                <h6>CONTACT US</h6>
                <hr class="light"/>
                <p>0915 135 7504</p>
                <p>0968 303 0479</p>
            </div>
            <div class="col-md-4 text-center">
                <hr class="light"/>
                <h6>ADDRESS</h6>
                <hr class="light"/>
                <p>200 Private Road, Mandaluyong,</p>
                <p>1550 Metro Manila, Philippines</p>
            </div>
            <div class="col-md-4 text-center">
                <hr class="light"/>
                <h6>BUSINESS HOURS</h6>
                <hr class="light"/>
                <p>Monday: Closed</p>
                <p>Tuesday - Sunday: 3:00 PM - 8:00 PM</p>
            </div>
            <div>
                <hr class="name text-align-center"/>
                <h5 class="col text-center">&copy; BIMI TAKOYAKI</h5>
            </div>
        </div>
    </div>
</footer>
</div>
}