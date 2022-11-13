import React from 'react';
import AdsArray from './AdsArray';

import AdsCard from './AdsCard';




function AdsSlider() {


    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
             <div className="carousel-inner">

                {AdsArray.map((ads, index) => {
                    if (index === 0) {
                        return (
                            <div key={index} className="carousel-item carousel-item active">
                                <AdsCard Ads={ads} ></AdsCard>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div key={index} className="carousel-item">
                                <AdsCard Ads={ads} ></AdsCard>
                            </div>
                        )
                    }
                })}





            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default AdsSlider;

