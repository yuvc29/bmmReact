import React, { useEffect, useState } from 'react';
import './MoviesSlider.css';

import MovieCard from './MovieCard';


function MoviesSlider(props) {
   


    const [DisplayMovieArray, setDisplayMovieArray] = useState([]);
    function ShowMovieArray() {
        fetch("/movie")
            .then((response) => response.json())
            .then((json) => {
                let newMovieArray = json;
                console.log("This is my Movie " + json);
                setDisplayMovieArray(newMovieArray);
            });
    }

    useEffect(() => {
        ShowMovieArray();
    }, []);

    const result = DisplayMovieArray.reduce((resultArray, item, index) => {
        //divide MovieArray in subarray with 5 elements
        const chunkIndex = Math.floor(index / 5)

        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [] // start a new chunk
        }

        resultArray[chunkIndex].push(item)

        //resultArray (same as MovieArray)is array of subarray with length 5
        return resultArray;
    }, [])





    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="RecommendedMoviesText">Recommended Movies</div>
            <div className="carousel-inner">


                {/* or print all subarray */}
                {result.map((movies, index) => {
                    if (index === 0) {
                        return (
                            <div key={index} className="carousel-item carousel-item active">

                                {/* for print one subarray */}
                                <div className='carousel-item1-Row'>
                                    {result[index].map((chunkmovies, chunkindex) => {
                                        return (<>
                                            <MovieCard Movie={chunkmovies} user={props.user}></MovieCard>
                                        </>)
                                    })}
                                </div>

                            </div>
                        )
                    }
                    else {
                        return (
                            <div key={index} className="carousel-item ">

                                {/* for print one subarray */}
                                <div className='carousel-item1-Row'>
                                    {result[index].map((chunkmovies, chunkindex) => {
                                        // console.log(chunkmovies.length);
                                        return (<>
                                            <MovieCard Movie={chunkmovies} user={props.user}></MovieCard>
                                        </>)
                                    })}
                                </div>

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

export default MoviesSlider;







//for dummy Array;


// import MovieArray from '../AllArray/MovieArray';
// import MovieDetailsEntryArray from '../AllArray/MovieDetailsEntryArray';



// const result = MovieArray.reduce((resultArray, item, index) => {
    //     //divide MovieArray in subarray with 5 elements
    //     const chunkIndex = Math.floor(index / 5)

    //     if (!resultArray[chunkIndex]) {
    //         resultArray[chunkIndex] = [] // start a new chunk
    //     }

    //     resultArray[chunkIndex].push(item)

    //     //resultArray (same as MovieArray)is array of subarray with length 5
    //     return resultArray;
    // }, [])




