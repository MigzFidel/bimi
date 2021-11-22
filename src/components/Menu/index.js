import React from 'react';
import BabyOct from '../../Assets/menu/BabyOctopus.png';
import Chessbomb from '../../Assets/menu/Cheesebomb.png';
import Combo1 from '../../Assets/menu/Combo1.png';
import Combo2 from '../../Assets/menu/Combo2.png';
import Octobits from '../../Assets/menu/Octobits.png';
import Squid from '../../Assets/menu/Squid.png';
import MenuHeader from '../../Assets/menu/Menu.jpg';
import Beverages from '../../Assets/menu/Beverages.png';


export default function Menu() {
    return (
        <div>
            <div class="d-flex justify-content-center mt-5">
                <img src={MenuHeader} style={{marginLeft: 50, height: "20rem"}}></img>
            </div>
            <div class="container mt-5">
                <h3 class="d-flex justify-content-center">Takoyaki</h3>
                <div class="row">
                    <div class="col-xl-4 col-sm-12 mb-2">
                        <div class="card">
                            <div class="card-body">
                                <img src={Octobits} width="100%"></img>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-sm-12 mb-2">
                        <div class="card">
                            <div class="card-body">
                                <img src={Squid} width="100%"></img>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-sm-12 mb-2">
                            <div class="card">
                                <div class="card-body">
                                    <img src={Chessbomb} width="100%"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                <div class="row">

                    <div class="col-xl-4 col-sm-12 mb-2">
                    <div class="card">
                            <div class="card-body">
                                <img src={BabyOct} width="100%"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mt-5 mb-5">
                <h3 class="d-flex justify-content-center">Takoyaki - Fries Combo</h3>
                <div class="row">
                    <div class="col-xl-4 col-sm-12 mb-2">
                        <div class="card">
                            <div class="card-body">
                                <img src={Combo1} width="100%"></img>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-sm-12 mb-2">
                        <div class="card">
                            <div class="card-body">
                                <img src={Combo2} width="100%"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mt-5">
                <div class="row">
                    <div class="col-xl-4"/>
                    <div class="col-xl-4 col-sm-12 mb-2">
                        <div class="card">
                            <div class="card-body">
                                <img src={Beverages} width="100%" ></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}