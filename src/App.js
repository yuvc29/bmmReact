import React, {useState} from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";


import AllComponent from './AllComponent';
import MovieDetail from './MoviePoster/MovieDetail';
import HallShowMovies from './AllHallAllTime/HallShowMovie';
import MallSeatMatrix from './HallSeatMatrix/SeatMatrixx'
import BookingSummary from './BookingTicket/BookingSummary';
import SearchMovies from './SearchMovies/SerachMovies';
import Ticket from './BookingTicket/Ticket';
import Admin from './Admin/Admin';

import Navbar from './MainNavbar/Navbar';

function App() {
  const [user, setUser] = useState("")
  const navigate = useNavigate();
  return (
        <>   

           <Navbar user = {user} setUser = {setUser} ></Navbar>

    {/* // <BrowserRouter> */}
      <Routes>
        <Route path="/" >  
          <Route index element={ <AllComponent user = {user} setUser = {setUser} nav = {navigate} />} />
          <Route path="/" element={<AllComponent user = {user} setUser = {setUser} nav = {navigate}/>}/>
          <Route path="/movie-details" element={<MovieDetail user = {user}/>} />
          <Route path="/movie-details/Hall-name_and_date-time" element={<HallShowMovies user = {user}/>} />
          <Route path="/movie-details/Hall-name_and_date-time/MallSeatMatrix" element={<MallSeatMatrix />} />
          <Route path="/movie-details/Hall-name_and_date-time/MallSeatMatrix/Bokking-details" element={<BookingSummary />} />
          <Route path="/movie-details/Hall-name_and_date-time/MallSeatMatrix/Bokking-details/Ticket-details" element={<Ticket></Ticket>} />
          <Route path="/admin/*" element = {<Admin mainNav = {navigate}/>}/>
          <Route path="/movie-details-By- search movie-name" element={<SearchMovies />} />
        </Route>
      </Routes>
    {/* //  </BrowserRouter>  */}


    </>
  )
}

export default App;