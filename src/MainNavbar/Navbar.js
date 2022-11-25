import React, { useState, useEffect } from 'react';
import './MainNavbar.css';

import {Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';

// import MenuIcon from '@mui/icons-material/Menu';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SearchMovies from '../SearchMovies/SerachMovies';
import { Link } from 'react-router-dom';
import LoginModalForm from '../LoginModal/LoginModalForm';
import RegisterModalForm from '../RegisterModal/RegisterModalForm'
import axios from 'axios';



function Navbar({ user, setUser, nav}) {

   console.log("this is  from namvae ...user is ", user);


  const isLoggedIn = ()=>{
    const prevUser = window.localStorage.getItem("user");
    if(prevUser){
        setUser(prevUser)
        return true
    }
    return false
  }
    const [searchMovie, setSearchMovie] = useState("");
    const [cityList, setCityList] = useState([{
        value:1,
        label:"Mumbai"
    },
    {
        value:2,
        
        label:"Delhi"
    }])

    const HideSearch = () => {
        setSearchMovie("");
    }

    let show = <div className='SearchFileterfixed'>
        {/* <CloseOutlinedIcon onClick={HideSearch}
            className='closeSearch' /> */}
        <SearchMovies user={user} />
    </div>

    const SignOut = ()=>{
        //////////////////////////////////axios
        const response =  axios.get("http://localhost:8080/logout")
        // cookies.remove('Token');
        // window.location.href = '/'
        console.log(response)
        setUser("")
        window.localStorage.removeItem("user");
       
    }

    useEffect(() => {
        const fetchData = async()=>{
            try{
                const response = await axios.get("http://localhost:8080/city")
                const data = response.data;
                console.log("Cities Data " ,data);
                // .then(response => response.json())
                const newCities = data.map((city)=>{return {value:city.cityId, label:city.name}})
                // setLists({ ...lists, cityList: newCities } )
                setCityList(newCities)
              }
              catch(err){
                alert("Failed to fetch cities")
              }
        }
        fetchData();
    }, []);

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
                        (user && user.length) || isLoggedIn() ? (
                            <div>
                                <a style = {{color:'white', margin:'10px'}}>Hi {user}</a>
                                <Avatar size={32} icon={<UserOutlined />} />

                                <Link to="/">
                                <button onClick={SignOut} className="signIn">Sign-out</button>
                                </Link>
                                
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
                            {
                                cityList.map((city)=>{
                                    return <option value ={city.value} className="currentLocationCity">{city.label}</option>
                                })
                            }

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










