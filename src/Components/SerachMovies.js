import React, { useState } from 'react'
import MovieArray from './MovieArray';
import SearchBakcgrnPage from './SearchBakcgrnPage';
import {Link} from 'react-router-dom'

function SearchMovies() {

    const [Display, setdisplay] = useState("none");
    const [foundFilterItem, setFoundFilterItem] = useState(MovieArray);
    const [searchedValue, setSearchedValue] = useState();

    const fiterMoview = (e) => {
        setSearchedValue(e.target.value);
        const results = MovieArray.filter(search => {
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


    const noFiltershowAll = (e) => {
        const results = MovieArray.filter(search => {
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
                        <div className='searchmoviesfoundAndIcon'>
                            <Link to = '/movie' state = {{ title: serachValue.title }}>    
                                <img src="https://in.bmscdn.com/webin/common/icons/search-movies.png"
                                    alt="" className="foundIcon" />
                                <span className="searchmoviesfound">
                                    {serachValue.title}
                                </span>
                            </Link>
                        </div>
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







