import React, { useState } from 'react';
import './MainNavbar.css';

import MenuIcon from '@mui/icons-material/Menu';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SearchMovies from '../SearchMovies/SerachMovies';
import { Link } from 'react-router-dom';

function Navbar() {

    const [searchMovie, setSearchMovie] = useState("");

    const HideSearch = () => {
        setSearchMovie("");
    }

    let show = <div className='SearchFileterfixed'>
        <CloseOutlinedIcon onClick={HideSearch}
            className='closeSearch' />
        <SearchMovies />
    </div>



    const ShowList = () => {
        setSearchMovie(show)
    }
    return (<>
        <div className='returndivcloseSearch'>
            {searchMovie}
        </div>


        <div className="navbar">
            <div className="navbarTop">
                <div className="navbarTopLeft">
                    <Link to="/">
                        <a href="" className="logo">BookmyMovie</a>
                    </Link>
                    <Link to="/movie-details-By- search movie-name">
                        <input type="text" className="searchMovies"
                            placeholder='search for movies, plays, events, sports ....'
                            onClick={() => { ShowList() }} />
                    </Link>
                </div>
                <div className="navbarTopRight">
                    <MenuIcon className="menu"></MenuIcon>
                    <button onClick={() => console.log("sign in")} className="signIn">Sign-in</button>
                    <div className="currentLocation">
                        <select className="currentLocationOptions">
                            <option value="Delhi-NCR" className="currentLocationCity">Delhi-NCR</option>
                            <option value="NOIDA" selected className="currentLocationCity">NOIDA</option>
                            <option value="GAJIYABAD" className="currentLocationCity">GAJIYABAD</option>
                            <option value="GURUGRAM" className="currentLocationCity">GURUGRAM</option>
                            <option value="PUNJAB" className="currentLocationCity">PUNJAB</option>
                            <option value="BIHAR" className="currentLocationCity">BIHAR</option>

                        </select>
                    </div>
                </div>
            </div>
            <div className="navbarBottom">
                <div className="navbarBottomAllOptionsLeft">
                    <a href="" className="navbarBottomOptionsLeft">Movies</a>
                    <a href="" className="navbarBottomOptionsLeft">Stream</a>
                    <a href="" className="navbarBottomOptionsLeft">Events</a>
                    <a href="" className="navbarBottomOptionsLeft">Plays</a>
                    <a href="" className="navbarBottomOptionsLeft">Sports</a>
                    <a href="" className="navbarBottomOptionsLeft">Acitvies</a>
                    <a href="" className="navbarBottomOptionsLeft">Buzz</a>
                </div>
                <div className="navbarBottomAllOptionsRight">
                    <a href="" className="navbarBottomOptionsRight">Gift Card</a>
                    <a href="" className="navbarBottomOptionsRight">Offers</a>
                    <a href="" className="navbarBottomOptionsRight">Corporates</a>
                    <a href="" className="navbarBottomOptionsRight">ListYourMovies</a>

                </div>
            </div>
        </div>
    </>);
}

export default Navbar;










