import React from 'react';
import './MovieCard.css';


import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';

function MovieDetailCard(props) {
    // Movie

    return (
        <div
            className="carousel-item1">

            <Link to='/Movie-details' state={{ title: props.Movie.title,
                   likes: props.Movie.likes,
                   poster: props.Movie.poster,
                   language: props.Movie.language,
                       format: props.Movie.format }}>
                <img className="d-block_w-100"
                    src={props.Movie.poster}
                    alt="" />
            </Link>

            <div className='carousel-item-like-icon-count'>
                <ThumbUpAltIcon className='carousel-item-likes-Icon'></ThumbUpAltIcon>
                <span className='carousel-item-likes-count'>{props.Movie.likes}k likes &nbsp;&nbsp;&nbsp;&nbsp;
                    <StarIcon className='star' />{props.Movie.rating}/5</span>
            </div>
            <h5 className='carousel-item-Title'>{props.Movie.title} <span>({props.Movie.language})</span></h5>
            <h5 className='carousel-item-Formate'>{props.Movie.format}</h5>
        </div>
    )

}


export default MovieDetailCard;

