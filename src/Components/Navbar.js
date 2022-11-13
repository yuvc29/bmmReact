import React, { useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SearchMovies from './SerachMovies';
import logo from './logo.png';
import Image from 'rc-image';

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
                <a href="/">
                    <Image
                        width={200}
                        height={50}
                        src={logo}
                    />
                </a>
                <input type="text" className="searchMovies"
                    placeholder='Search for movies, genres, language ....'
                    onClick={() => { ShowList() }}
                />
                </div>
                <div className="navbarTopRight">
                    <MenuIcon className="menu"></MenuIcon>
                    <button onClick={() => console.log("sign in")} className="signIn">Sign-in</button>
                    <div className="currentLocation">
                        <select className="currentLocationOptions">
                            <option value="Delhi-NCR" className="currentLocationCity">Delhi-NCR</option>
                            <option value="NOIDA" className="currentLocationCity">NOIDA</option>
                            <option value="GAJIYABAD" className="currentLocationCity">GAJIYABAD</option>
                            <option value="GURUGRAM" className="currentLocationCity">GURUGRAM</option>
                            <option value="PUNJAB" className="currentLocationCity">PUNJAB</option>
                            <option value="BIHAR" className="currentLocationCity">BIHAR</option>

                        </select>
                    </div>
                </div>
            </div>
            {/* <div className="navbarBottom">
                <div className="navbarBottomAllOptionsLeft">
                    <a href="_blank" className="navbarBottomOptionsLeft">Movies</a>
                    <a href="_blank" className="navbarBottomOptionsLeft">Stream</a>
                    <a href="_blank" className="navbarBottomOptionsLeft">Events</a>
                    <a href="_blank" className="navbarBottomOptionsLeft">Plays</a>
                    <a href="_blank" className="navbarBottomOptionsLeft">Sports</a>
                    <a href="_blank" className="navbarBottomOptionsLeft">Acitvies</a>
                    <a href="_blank" className="navbarBottomOptionsLeft">Buzz</a>
                </div>
                <div className="navbarBottomAllOptionsRight">
                    <a href="_blank" className="navbarBottomOptionsRight">Gift Card</a>
                    <a href="_blank" className="navbarBottomOptionsRight">Offers</a>
                    <a href="_blank" className="navbarBottomOptionsRight">Corporates</a>
                    <a href="_blank" className="navbarBottomOptionsRight">ListYourMovies</a>

                </div>
            </div> */}
        </div>
    </>);
}

export default Navbar;