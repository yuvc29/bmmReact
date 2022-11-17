import React from 'react';
import './MovieCard.css';


import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';

function MovieDetailCard(props) {


    return (
        <div onClick={() => { alert(props.Movie.movieId) }}
            className="carousel-item1">


            <Link to='/Movie-details' state={{
                movieId: props.Movie.movieId,
                title: props.Movie.title,
                releaseDate: props.Movie.releaseDate,
                rating: props.Movie.rating,
                length: props.Movie.length,
                ageRating: props.Movie.ageRating,
                description: props.Movie.description,
                //likes Not defined in database that's why i used static likes;
                // likes: props.Movie.likes, 
                likes: "12",
                poster: props.Movie.poster,
                trailer: props.Movie.trailer,
                language: props.Movie.language,
                format: props.Movie.format,


            }}>
                <img className="d-block_w-100"
                    src={props.Movie.poster}
                    alt="" />
            </Link>

            <div className='carousel-item-like-icon-count'>
                <ThumbUpAltIcon className='carousel-item-likes-Icon'></ThumbUpAltIcon>
                <span className='carousel-item-likes-count'>12k likes &nbsp;&nbsp;&nbsp;&nbsp;
                    <StarIcon className='star' />{props.Movie.rating}/5</span>
            </div>
            <h5 className='carousel-item-Title'>{props.Movie.title}<span>
                ({props.Movie.language})
            </span></h5>
            <h5 className='carousel-item-Formate'>
                {props.Movie.format}
            </h5>
        </div>
    )

}


export default MovieDetailCard;

