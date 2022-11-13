import React from 'react';


function MovieCard(props) {

    return (
        <div className="carousel-item1-ads">
            <img className="d-block_w-100-ads"
                src={props.Ads.poster}
                alt="" />
        </div>
    )
}


export default MovieCard;



