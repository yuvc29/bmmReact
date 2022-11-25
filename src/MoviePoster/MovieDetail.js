import React, { useEffect, useState } from 'react';
import './MovieDetail.css'

import Navbar from '../MainNavbar/Navbar';
import StarIcon from '@mui/icons-material/Star';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

import {
    Input,
    Button,
    Tag,
    Avatar,
    Divider,
    Breadcrumb,
    Layout,
    Menu,
    Image
} from 'antd';




import { Link, useLocation } from 'react-router-dom'
import { AccountTreeSharp } from '@material-ui/icons';

const { Header, Content, Footer } = Layout;
const { Search } = Input

function MovieDetail(props) {
  
   const location = useLocation();
    const { movieId, title, likes, poster, language, format, releaseDate, rating, length, ageRating, description, trailer } = location.state;

    //   console.log(releaseDate);

    let hrs = Math.floor(length / 60);
    let min = length % 60;
    if (hrs <= 9) {
        hrs = "0" + hrs;
    }
    if (min <= 9) {
        min = "0" + min;
    }

    const [DisplayActorArray, setDisplayActorArray] = useState([]);

    function ShowActorArray() {
        fetch(`/actors/${movieId}`)
            .then((response) => response.json())
            .then((json) => {
                let newMovieArray = json;
                console.log("This is my Movie " + json);
                setDisplayActorArray(newMovieArray);
            });
    }

    useEffect(() => {
        ShowActorArray();
    }, []);


    return (<>
        {/* <Navbar></Navbar> */}

        <div className='MoviesDetails'>

            <div className='MoviesPosterDetails'
                style={{
                    background: "linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26 26 26 / 7%) 100%)"
                    //  , backgroundImage:`url(${poster})`, backgroundSize: "80% 80%"
                }}>

                <div className='MoviesPosterDetailsImageLeft'>

                    <div>
                        <img className="d-block_w-100"
                            src={poster}
                            alt="Poster not found" />

                        <div className='carousel-item-like-icon-count'
                            style={{ display: "flex", justifyContent: "center" }}>
                            <span className='carousel-item-likes-count'>
                                Releasing on {releaseDate}
                            </span>
                        </div>
                    </div>

                    <div className='GoToTrailersTitleIcon'>
                        <a className='GoToTrailers'
                            href={trailer} target="_blank" rel="noreferrer"
                        >Trailers (1)</a>

                        <PlayCircleOutlineIcon
                            className='GoToTrailers GoToTrailersIcon' />
                    </div>

                </div>


                <div className='MoviesPosterDetailsImageRight'>
                    <h3 className='MoviesPosterDetailsImageRightTitle'>{title}</h3>
                    <span className='MoviesPosterDetailsImageRightRating'>
                        <StarIcon className='star' />{rating}/10</span>

                    <span className='MoviesPosterDetailsImageRightFormateLanguage'>
                        <span style={{ margin: "5px", background: "white", padding: "5px" }}>{format}</span>
                        <span style={{ margin: "5px", background: "white", padding: "5px" }}>{language}</span></span>

                    <span className='MoviesPosterDetailsImageRightLengthageRatingReleasedate'>
                        <span className='sameDetailCompo'>{hrs}h &nbsp; {min}m</span>
                        <span className='sameDetailCompo'>{ageRating}</span>
                        <span className='sameDetailCompo'>{releaseDate}</span>
                    </span>

                    <Link to="/movie-details/Hall-name_and_date-time"
                        state={{
                            poster: poster,
                            movieId: movieId,
                            title: title,
                            language: language,
                            format: format,
                        }}  >
                        <Button
                            className="paymentBarBtn"
                            type="primary" style={{ backgroundColor: "#f84464", height: "10px", width: "140px", marginTop: "42px" }}
                        >
                            <span style={{ color: "white" }}>
                                Book tickets
                            </span>
                        </Button>
                    </Link>

                </div>

            </div>


            <div className='MoviesAboutDetails'>
                <h4 className='MoviesAboutDetailsAbout'>About the movie</h4>
                <p className='MoviesAboutDetailsDesc'>{description}</p>
            </div>


            <h4 className='MoviesAboutDetailsAbout MoviesAboutDetails'>Cast</h4>
            <div className='MoviesCastsDetails'>

                {DisplayActorArray.map((actor, index) => {

                    let actorarr = actor.split(",");
                    //  console.log((actorarr));

                    return (<div className="Actor_picAndName">
                        <img className="Actor_pic"
                            src={actorarr[3]}
                            alt="" />
                        <span className="Actor_name">{actorarr[1]} {actorarr[2]}</span>
                    </div>);
                })}


            </div>


        </div>

    </>)
};


export default MovieDetail;


