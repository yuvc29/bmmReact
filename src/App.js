import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import AllComponent from './AllComponent';
import MovieDetail from './MoviePoster/MovieDetail';
import HallShowMovies from './AllHallAllTime/HallShowMovie';
import MallSeatMatrix from './HallSeatMatrix/SeatMatrixx'
import BookingSummary from './BookingTicket/BookingSummary';

function App() {

  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<AllComponent />} />
          <Route path="/movie-details" element={<MovieDetail />} />
          <Route path="/movie-details/Hall-name_and_date-time" element={<HallShowMovies />} />
<Route path="/movie-details/Hall-name_and_date-time/MallSeatMatrix" element={<MallSeatMatrix />} />
        
<Route path="/movie-details/Hall-name_and_date-time/MallSeatMatrix/Bokking-details" element={<BookingSummary />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;