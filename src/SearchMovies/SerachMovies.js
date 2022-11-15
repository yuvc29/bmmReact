import React, { useEffect, useState } from 'react'
import './SearchMovies.css';

import SearchBakcgrnPage from './SearchBakcgrnPage';
import { Link } from 'react-router-dom';

import MovieArray from '../AllArray/MovieArray';

function SearchMovies() {

    const [Display, setdisplay] = useState("block");
    const [foundFilterItem, setFoundFilterItem] = useState([]);
    const [searchedValue, setSearchedValue] = useState();

 const [DisplayMovieArray, setDisplayMovieArray] = useState([]);

function ShowMovieArray() {
    fetch("/movie")
      .then((response) => response.json())
      .then((json) => {
        let newMovieArray = json;
        console.log("This is my Movie " + json);
        setDisplayMovieArray(newMovieArray);
       setFoundFilterItem(DisplayMovieArray);
      });
  }

  useEffect(() => {
    ShowMovieArray();
  }, []);

    const fiterMoview = (e) => {
        setSearchedValue(e.target.value);
        const results = DisplayMovieArray.filter(search => {
            if (e.target.value === "")
                return search;
            return search.title.toLowerCase().includes(e.target.value.toLowerCase());
        })

        setFoundFilterItem(results);
        if (results.length > 0) {
            setdisplay("block")
        }
        else {
            setdisplay("none")
        }
    }


    const noFiltershowAll = (e) => {
        const results = DisplayMovieArray.filter(search => {
            if (e.target.value === "")
                return search;
            return search.title.toLowerCase().includes(e.target.value.toLowerCase())
        })

        setFoundFilterItem(results);
        if (results.length > 0) {
            setdisplay("block")
        }
        else {
            setdisplay("none")
        }
    }

    return (<>
        <div className='searchpage'>
            <div className="searchnav">
                <input type="text" className="searchMovies searchMovies2"
                    placeholder='search for movies, plays, events, sports ....'
                    onChange={(e) => { fiterMoview(e) }}
                    onClick={(e) => { noFiltershowAll(e) }}
                />

            </div>

            <div className="searchedmoviespage">
                {Display === "block" ?
                    foundFilterItem.map((serachValue, index) => {
                        return (
                            <Link to='/Movie-details' state={{
                title: serachValue.title,
                releaseDate: serachValue.releaseDate,
                rating: serachValue.rating,
                length: serachValue.length,
                ageRating:serachValue.ageRating,
                description: serachValue.description,
//likes Not defined in database that's why i used static likes;
                // likes: serachValue.likes, 
                likes: "12",
                poster: serachValue.poster,
                language: serachValue.language,
                format: serachValue.format,
                  

            }}>
                                <div className='searchmoviesfoundAndIcon'>
                                    <img src="https://in.bmscdn.com/webin/common/icons/search-movies.png"
                                        alt="" className="foundIcon" />
                                    <span className="searchmoviesfound">
                                        {serachValue.title}
                                    </span>
                                </div>
                            </Link> 
                        )
                    })
                    :
                    <div className='searchmoviesfoundAndIcon'>
                        <span className="searchmoviesfoundalert">
                            Your search - <span className="searchmoviesfoundresult">{searchedValue} &nbsp;</span> didn't match to any movies information
                        </span>
                    </div>
                }

            </div>

        </div>

        <div className='SearchBakcgrnPage'>
            <SearchBakcgrnPage>
            </SearchBakcgrnPage>
        </div>
    </>)

}

export default SearchMovies;







