import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BookingSummary from "./components/BookingSummary";
import Ticket from "./components/Ticket";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/book" element={<BookingSummary/>}>
        </Route>
        <Route path="/ticket" element={<Ticket/>}>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
