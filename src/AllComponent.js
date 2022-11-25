import React from 'react';
import './index.css';

import Navbar from './MainNavbar/Navbar';
import MoviesSlider from './PosterSlider/MoviesSlider';

// import SeatSelectPage from './SeatSelect/SeatSelectPage';
function AllComponent({user, setUser, nav}) {

    return (<div>
{/* <SeatSelectPage></SeatSelectPage> */}
        {/* <Navbar user = {user} setUser = {setUser}  nav = {nav}></Navbar> */}
        <MoviesSlider user={user}></MoviesSlider>
    </div>
    );
}


export default AllComponent;







//Just to check the frontend of component;

// import MovieDetail from './MoviePoster/MovieDetail';
// import HallShowMovies from './AllHallAllTime/HallShowMovie';
// import SeatMatrix from './HallSeatMatrix/SeatMatrixx';
// import BookingSummary from './BookingTicket/BookingSummary';
// import Ticket from './BookingTicket/Ticket';




{/* <MovieDetail></MovieDetail> */ }
{/* <HallShowMovies></HallShowMovies> */ }
{/* <SeatMatrix></SeatMatrix> */ }
{/* <BookingSummary></BookingSummary> */ }
{/* <Ticket></Ticket> */ }






