import React, { useState } from 'react';
import './MainNavbar.css';

import {Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';

// import MenuIcon from '@mui/icons-material/Menu';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SearchMovies from '../SearchMovies/SerachMovies';
import { Link } from 'react-router-dom';
import LoginModalForm from '../LoginModal/LoginModalForm';
import RegisterModalForm from '../RegisterModal/RegisterModalForm'
import axios from 'axios'

function Navbar({ user, setUser, nav}) {

    const [searchMovie, setSearchMovie] = useState("");

    const HideSearch = () => {
        setSearchMovie("");
    }

    let show = <div className='SearchFileterfixed'>
        <CloseOutlinedIcon onClick={HideSearch}
            className='closeSearch' />
        <SearchMovies />
    </div>

    const SignOut = ()=>{
        //////////////////////////////////axios
        const response =  axios.get("http://localhost:8080/logout")
        // cookies.remove('Token');
        // window.location.href = '/'
        console.log(response)
        setUser("")
        window.localStorage.removeItem("isLoggedIn")
    }


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
                        <input type="text" className="searchMovies searchMoviesNav"
                            placeholder='search for movies, plays, events, sports ....'
                            onClick={() => { ShowList() }} />
                    </Link>


                </div>
                <div className="navbarTopRight">
                    {
                        user && user.length ? (
                            <div>
                                <a style = {{color:'white', margin:'10px'}}>Hi {user}</a>
                                <Avatar size={32} icon={<UserOutlined />} />
                                <button onClick={SignOut} className="signIn">Sign-out</button>
                            </div>
                        ): 
                        // (<button onClick={() => setShowModal(true)} className="signIn">Sign-in</button>)
                        (<div>
                            <LoginModalForm setUser = {setUser} nav = {nav}/>
                            <RegisterModalForm setUser = {setUser} nav = {nav}/>
                        </div>)
                        // <LoginModalForm setUser = {setUser} nav = {nav}/>
                    }
                    <div className="currentLocation">
                        <select className="currentLocationOptions">
                            <option value="Delhi-NCR" className="currentLocationCity">Delhi-NCR</option>
                            <option value="NOIDA" selected className="currentLocationCity">NOIDA</option>
                            <option value="GAJIYABAD" className="currentLocationCity">GHAZIABAD</option>
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










