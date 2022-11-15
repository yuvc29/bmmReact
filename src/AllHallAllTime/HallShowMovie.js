import React, { useEffect, useState } from 'react';
import './HallShowMovies.css';
import '../MainNavbar/MainNavbar.css';

import { Button } from 'antd';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookOnlineIcon from '@mui/icons-material/BookOnline';

import Navbar from '../MainNavbar/Navbar';
import { Link, useLocation } from 'react-router-dom';


//Array of theater;
import HallNameAndTiming from '../AllArray/HallNameAndTimingArray';

function HallShowMovies() {

    const location = useLocation();
    const { movieId, title, language, format, poster } = location.state;
  

    const dateArray = [{date_formate: '22/11/2022'}, {date_formate: '23/11/2022'}]      
    const [DisplayHallArray, setDisplayHallArray] = useState([]);
    const [DisplayHallArrayShowtime, setDisplayHallArrayShowtime] = useState([]);

    const [city_Id, setCity_Id] = useState(1);
    const [date_formate, setDate_formate] = useState(dateArray[0].date_formate)
    

    function ShowHallArray(date_formate) {

        //To get All theater for particular movie on particular date; 
        fetch(`/theater/cityMovieDate?cityId=${city_Id}&movieId=${movieId}&date=${date_formate}`)
            .then((response) => response.json())
            .then((json) => {
             let newMovieArray = json;

        // console.log("This is all hall present on selected date for selected movie_id in city city_id " + json);
             setDisplayHallArray(newMovieArray);
         });
       }


    function ShowHallArrayAndshowTime(theaterId, date_formate) {

        //To get All show time for each theater for particular movie on particular date;
           fetch(`/show/theaterMovieDate?theaterId=${theaterId}&movieId=${movieId}&date=${date_formate}`)
          .then((response) => response.json())
          .then((json) => {
            let newMovieArray = json;

            console.log("This is All show time for all theater  " + json);
            setDisplayHallArrayShowtime(newMovieArray);
          });
    }


   useEffect(() => {
        ShowHallArray();
    }, []);



    const [selected_seat, setselected_seat] = useState(3);
    const [showmoviedateindex, setShowmoviedateindex] = useState(0);
  

    const [halltimefilter, setHalltimefilter] = useState( 

            //         DisplayHallArray.map((Hallnametiming, index) => {
            //         let Hallarr=Hallnametiming.split(",");
            //         console.log("this is my hall inside showmalltimefilter function" + Hallarr);

            //       ShowHallArrayAndshowTime(Hallarr[0], date_formate);
                
            //          return (
            //         <div className='HallNameShowMoviestiming'>
            //             <div className='HallNameShowMovies'>
            //                 <FavoriteBorderIcon style={{ color: "#999", marginRight: "10px" }} />{Hallarr[1]}:{Hallarr[2]}, NOIDA</div>
            //             <div className='HallShowMoviestime'>
            //                 <span className='HallShowMoviesticketSymbol'>
            //                     <BookOnlineIcon />M-Ticket</span>
                                     
            //                 {DisplayHallArrayShowtime.map((DisplayHallArrayShowtime, index) => {
            //                         let Timearr=DisplayHallArrayShowtime.split(",");
            //                         console.log("this is show time for one theater " + Timearr);

            //                     return (
            //                         <Link to="/movie-details/Hall-name_and_date-time/MallSeatMatrix"
            //                             state={{
            //                                 title: title,
            //                                 Hall_Name: Hallarr[1],
            //                                 Selected_time: Timearr[1],
            //                                 Selected_date: date_formate,
            //                                 total_seat: selected_seat
            //                             }}>
            //                             <Button className="MovieTimingInOneTheaterBtn"
            //                                 style={{ background: "white", color: "#2dc492" }}
            //                             >{Timearr[1]}</Button>
            //                         </Link>
            //                     )
            //                 })}
            //             </div>
            //         </div>
            //     )
            // })


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
                                        Selected_date: date_formate,
                                        total_seat: selected_seat,
                                        alltiming: JSON.stringify(Hallnametiming.hallshowtiming),
                                        poster: poster,
                                    }}>
                                    <Button className="MovieTimingInOneTheaterBtn"
                                        style={{ background: "white", color: "#2dc492" }}
                                    >{timing.showtimeingmovies}</Button>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            )
        })
    

    );

       const showmalltimefilter = (bookingDate, HallNameAndTiming, index) => {
 
        setShowmoviedateindex(index);

         console.log("This is booking date : " + bookingDate);
        //  ShowHallArray(bookingDate);

        //  console.log("this is my all hall inside showmalltimefilter functionnnnnnn" + DisplayHallArray);
        
        setHalltimefilter( 

            //         DisplayHallArray.map((Hallnametiming, index) => {
            //         let Hallarr=Hallnametiming.split(",");
            //         console.log("this is my hall inside showmalltimefilter function" + Hallarr);

            //       ShowHallArrayAndshowTime(Hallarr[0], date_formate);
                
            //          return (
            //         <div className='HallNameShowMoviestiming'>
            //             <div className='HallNameShowMovies'>
            //                 <FavoriteBorderIcon style={{ color: "#999", marginRight: "10px" }} />{Hallarr[1]}:{Hallarr[2]}, NOIDA</div>
            //             <div className='HallShowMoviestime'>
            //                 <span className='HallShowMoviesticketSymbol'>
            //                     <BookOnlineIcon />M-Ticket</span>
                                     
            //                 {DisplayHallArrayShowtime.map((DisplayHallArrayShowtime, index) => {
            //                         let Timearr=DisplayHallArrayShowtime.split(",");
            //                         console.log("this is show time for one theater " + Timearr);

            //                     return (
            //                         <Link to="/movie-details/Hall-name_and_date-time/MallSeatMatrix"
            //                             state={{
            //                                 title: title,
            //                                 Hall_Name: Hallarr[1],
            //                                 Selected_time: Timearr[1],
            //                                 Selected_date: bookingDate,
            //                                 total_seat: selected_seat
            //                             }}>
            //                             <Button className="MovieTimingInOneTheaterBtn"
            //                                 style={{ background: "white", color: "#2dc492" }}
            //                             >{Timearr[1]}</Button>
            //                         </Link>
            //                     )
            //                 })}
            //             </div>
            //         </div>
            //     )
            // })
        

            HallNameAndTiming[index].moviewatchingdateavailability.map((Hallnametiming, index) => {
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
                                            poster:poster,
                                            title: title,
                                            Hall_Name: Hallnametiming.hallname,
                                            Selected_time: timing.showtimeingmovies,
                                            Selected_date: bookingDate,
                                            total_seat: selected_seat,
                                            alltiming: JSON.stringify(Hallnametiming.hallshowtiming),
                                        }}>
                                        <Button className="MovieTimingInOneTheaterBtn"
                                            style={{ background: "white", color: "#2dc492" }}
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
                {dateArray.map((dateArray, index) => {
                    return (
                        <Button className="MovieTimingInOneTheaterBtn"
                               style={showmoviedateindex === index ?
                                { background: "#f84464", borderRadius: "10px", border: "1px solid #f84464", color: "#fff", } :
                                { background: "#fff", borderRadius: "10px", border: "1px solid #f84464", color: "#f84464", }}
                               
                                value={dateArray.date_formate}

                            onClick={() => { showmalltimefilter(dateArray.date_formate, HallNameAndTiming, index) }}
                            //    onClick={() =>{
                            //                 setDate_formate(dateArray.date_formate);
                            //                 showmalltimefilter(date_formate, index);
                            //                 }} 
                                  >
                            {dateArray.date_formate}</Button>
                    )
                })}
            </div>


            <div className='HallNameShowMoviestimingPage'>
                {halltimefilter}
            </div>

        </div>
    </>)
}

export default HallShowMovies;




// DisplayHallArray.map((Hallnametiming, index) => {
                    // let Hallarr=Hallnametimin.split(",");
                //  console.log((Hallarr));
                //   ShowHallArrayAndshowTime(Hallarr[0]);
//                 
                    //  return (
//                     <div className='HallNameShowMoviestiming'>
//                         <div className='HallNameShowMovies'>
//                             <FavoriteBorderIcon style={{ color: "#999", marginRight: "10px" }} />{Hallarr[1]}:{Hallarr[2]}: NOIDA</div>
//                         <div className='HallShowMoviestime'>
//                             <span className='HallShowMoviesticketSymbol'>
//                                 <BookOnlineIcon />M-Ticket</span>
                                     
//                             {DisplayHallArrayShowtime.map((DisplayHallArrayShowtime, index) => {
                                                // let Timearr=DisplayHallArrayShowtime.split(",");
                //  console.log((Timearr));
//                                 return (
//                                     <Link to="/movie-details/Hall-name_and_date-time/MallSeatMatrix"
//                                         state={{
//                                             title: title,
//                                             Hall_Name: Hallarr[1],
//                                             Selected_time: Timearr[1],
//                                             Selected_date: DisplayHallArrayShowtime.date,
//                                             total_seat: selected_seat
//                                         }}>
//                                         <Button className="MovieTimingInOneTheaterBtn"
//                                             style={{ background: "white", color: "#2dc492" }}
//                                             onClick={()=>{ShowHallArray(DisplayHallArrayShowtime.date)}}
//                                         >{DisplayHallArrayShowtime.timing}</Button>
//                                     </Link>
//                                 )
//                             })}
//                         </div>
//                     </div>
//                 )
//             })

