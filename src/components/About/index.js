import React from 'react';
import AboutData from './data/data.json';

export default function About(){
    let data = AboutData.AboutData[0];
    return (
    <div>
       <div class ="About">
            <div class="container">
                <div class="col-lg-12">
                    <h2>Bimi Takoyaki</h2>
                    <p> Also known as Osaka's Favorite Street food. Bimi Takoyaki has multiple tasty twists that will transport you back to the busy streets of Japan, a new tasting experience that you've never been experienced in any takoyaki before!</p>   
                    <p>Bimi Takoyaki serves up the perfect savory snack that use premium octopus and squid with fresh vegetables and authentic Japanese ingredients that will give you a very hot yet delicious palate experience which lingers and registers to your taste buds and makes you crave for more!</p>
                    <p> Bimi Takoyaki first store was opened in Mandaluyong on February 4, 2020. Bimi Takoyaki offers different flavors of takoyaki, cater to any special occasions and online orders. You don't have to travel to Osaka for takoyaki. Bimi Takoyaki main branch is located at 200 Private Road Hula Mandaluyong City. Find us on Google Maps Bimi Takoyaki.</p>
                </div>
            </div>

       </div>
           

         <div class="image-gallery">
         <div class="photo-gallery">
            <div class="container">
                <div class="intro">     
                    <h2 class="text-center">Gallery</h2>
                    <p class="text-center"> See our Store and feedbacks!</p>
                      </div>
                <div class="row photos">
                    <div class="col-sm-12 col-md-4 col-lg-4 item"><a href="https://i.imgur.com/LEZByVx.jpg" data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/fGuMCim.png"/></a></div>
                    <div class="col-sm-12 col-md-4 col-lg-4 item"><a href="https://i.imgur.com/dYoYjh1.jpg" data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/Fgol92n.png"/></a></div>
                    <div class="col-sm-12 col-md-4 col-lg-4 item"><a href="https://i.imgur.com/CPYCS2V.jpg" data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/4IRHM0w.png"/></a></div>
                    <div class="col-sm-12 col-md-4 col-lg-4 item"><a href="https://i.imgur.com/SH1MJP8.jpg" data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/FIKUYLs.png"/></a></div>
                    <div class="col-sm-12 col-md-4 col-lg-4 item"><a href="https://i.imgur.com/oOOzOCu.jpg" data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/WgSz80M.png"/></a></div>
                    <div class="col-sm-12 col-md-4 col-lg-4 item"><a href="https://i.imgur.com/nBi9meX.jpg" data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/bN6k9Zt.png"/></a></div>  
                </div>
            </div>
        </div>
    </div>
    </div>
    );
}