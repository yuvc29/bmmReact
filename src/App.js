import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllComponent from './AllComponent';
import Movie from './Components/Movie';

function App() {
//   return (
//<div className='body'>
//    <AllComponent></AllComponent>
//  </div> 
// );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<AllComponent />} />
          <Route path="movie" element={<Movie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

