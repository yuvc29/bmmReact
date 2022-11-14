import React, { useState } from 'react';
import './HallShowMovies.css';
import '../MainNavbar/MainNavbar.css';

import { Button } from 'antd';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookOnlineIcon from '@mui/icons-material/BookOnline';

import HallNameAndTiming from '../AllArray/HallNameAndTimingArray';

import Navbar from '../MainNavbar/Navbar';
import { Link, useLocation } from 'react-router-dom';



function HallShowMovies() {

    const location = useLocation();
    const { title, language, format } = location.state;

    const [selectticketnumPage, setSelectticketnumPage] = useState("");
    const [selected_seat, setselected_seat] = useState(3);

    const pleaseselect = (seat_count) => {
        setselected_seat(3);
    }


    const showselectticketnumPage = () => {
        setSelectticketnumPage(
            <div className="selectticketnumPage">
                <Button className="selectticketnumPagebtn" onClick={()=>{
pleaseselect(1)}}>1</Button>
                <Button className="selectticketnumPagebtn" onClick={()=>{
pleaseselect(2)}}>2</Button>
                <Button className="selectticketnumPagebtn" onClick={()=>{
pleaseselect(3)}}>3</Button>
                <Button className="selectticketnumPagebtn" onClick={()=>{
pleaseselect(4)}}>4</Button>
                <Button className="selectticketnumPagebtn" onClick={()=>{
pleaseselect(5)}}>5</Button>
                <Button className="selectticketnumPagebtn" onClick={()=>{
pleaseselect(6)}}>6</Button>
                <Button className="selectticketnumPagebtn" onClick={()=>{
pleaseselect(7)}}>7</Button>
                <Button className="selectticketnumPagebtn" onClick={()=>{
pleaseselect(8)}}>8</Button>
                <Button className="selectticketnumPagebtn" onClick={()=>{
pleaseselect(9)}}>9</Button>
                <Button className="selectticketnumPagebtn" onClick={()=>{
pleaseselect(9)}}>10</Button>
            </div>
        )
    }

    const [showmoviedateindex, setShowmoviedateindex] = useState(0);
    const [malltimefilter, setMalltimefilter] = useState(
        HallNameAndTiming[0].moviewatchingdateavailability.map((Hallnametiming, index) => {
            return (
                <div className='HallNameShowMoviestiming'>
                    <div className='HallNameShowMovies'>
                        <FavoriteBorderIcon style={{ color: "#999", marginRight: "10px" }} />{Hallnametiming.hallname}</div>
                    <div className='HallShowMoviestime'>
                        <span className='HallShowMoviesticketSymbol'>
                            <BookOnlineIcon />M-Ticket</span>
                        {Hallnametiming.hallshowtiming.map((timing, index) => {
                            return (
                                <Link to="/movie-details/Hall-name_and_date-time/MallSeatMatrix"
                                    state={{
                                        title: title,
                                        Hall_Name: Hallnametiming.hallname,
                                        Selected_time: timing.showtimeingmovies,
                                        Selected_date: HallNameAndTiming[0].moviewatchingdate,
                                        total_seat: selected_seat
                                    }}>
                                    <Button className="MovieTimingInOneTheaterBtn"
                                        style={{ background: "white", color: "#2dc492" }}
                                        onClick={showselectticketnumPage}
                                    >{timing.showtimeingmovies}</Button>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            )
        })
    );

    const showmalltimefilter = (timedatemalldetails, index) => {

        // alert(index);
        setShowmoviedateindex(index);
        setMalltimefilter(
            timedatemalldetails.moviewatchingdateavailability.map((Hallnametiming, index) => {
                return (
                    <div className='HallNameShowMoviestiming'>
                        <div className='HallNameShowMovies'>
                            <FavoriteBorderIcon style={{ color: "#999", marginRight: "10px" }} />{Hallnametiming.hallname}</div>
                        <div className='HallShowMoviestime'>
                            <span className='HallShowMoviesticketSymbol'>
                                <BookOnlineIcon />M-Ticket</span>
                            {Hallnametiming.hallshowtiming.map((timing, index) => {
                                return (
                                    <Link to="/movie-details/Hall-name_and_date-time/MallSeatMatrix"
                                        state={{
                                            title: title,
                                            Hall_Name: Hallnametiming.hallname,
                                            Selected_time: timing.showtimeingmovies,
                                            Selected_date: timedatemalldetails.moviewatchingdate,
                                            total_seat: selected_seat
                                        }}>
                                        <Button className="MovieTimingInOneTheaterBtn"
                                            style={{ background: "white", color: "#2dc492" }}
                                            onClick={showselectticketnumPage}
                                        >{timing.showtimeingmovies}</Button>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                )
            })

        );
    }


    return (<>
        <div className='selectticketnumPagereturn'>{selectticketnumPage}</div>
        <Navbar></Navbar>
        <div className='HallShowMovies'>

            <div className="HallShowMoviesNavBar">

                <div className="HallShowMoviesNavBarTop">
                    <a href="" className="HallShowMoviesNavBarTop0">{title}</a>
                    <a href="" className="HallShowMoviesNavBarTop0">-</a>
                    <a href="" className="HallShowMoviesNavBarTop0">{language}</a>

                </div>
                <div className="HallShowMoviesNavBarBottom">
                    <span className="HallShowMoviesNavBarBottom0">{format}</span>
                    <span className="HallShowMoviesNavBarBottom0">HORROR</span>

                </div>

            </div>

            <div className='HalltimefilterforDate'>
                {HallNameAndTiming.map((timedatemalldetails, index) => {
                    return (
                        <Button className="MovieTimingInOneTheaterBtn"
                            style={showmoviedateindex === index ?
                                { background: "#f84464", borderRadius: "10px", border: "1px solid #f84464", color: "#fff", } :
                                { background: "#fff", borderRadius: "10px", border: "1px solid #f84464", color: "#f84464", }}

                            onClick={() => { showmalltimefilter(timedatemalldetails, index) }}   >
                            {timedatemalldetails.moviewatchingdate}</Button>
                    )
                })}
            </div>


            <div className='HallNameShowMoviestimingPage'>
                {malltimefilter}
            </div>

        </div>
    </>)
}

export default HallShowMovies;
