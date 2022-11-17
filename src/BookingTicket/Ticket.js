import React from "react";
import './Ticket.css';


import { Alert } from "antd";
import { Link, useLocation } from "react-router-dom";

import PandeyJiiQR from "../QrImage";

function Ticket() {

  const location = useLocation();
  const {ticketf, title, Hall_Name, Hall_Address, Total_ticket, seatListf, total_ticket_price, seat_type, poster, Holder_name, Selected_date, Selected_time,
   Transaction_Id, } = location.state;

  // console.log("this is final seat "+seatNumber);
  const seat_Number = JSON.parse(ticketf);
//[{ row: 1, col: 0 }, { row: 1, col: 0 }, { row: 1, col: 0 }];


  // console.log("this is poster"+poster);
    
    return (  <div className="ticketPageCont">
    <div className="ticketPage">

      <div className="ticketContainer">
        <img
          className="booklogo"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8b466e9f-26b4-4f40-a5ff-7eaa4b314014/dfady0s-54ea7126-3a05-4619-b38f-fb23a2bcb887.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhiNDY2ZTlmLTI2YjQtNGY0MC1hNWZmLTdlYWE0YjMxNDAxNFwvZGZhZHkwcy01NGVhNzEyNi0zYTA1LTQ2MTktYjM4Zi1mYjIzYTJiY2I4ODcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.G49pFsWPgF1-5CMAl_jXaxiqZEi_EwMmQ3VnM40CkkY"
          alt=""
        />
        <div className="insidetkt">
          <div className="ticketHead">
            <img
              className="moviePoster"
              src={poster}
              alt="random"
            />
            <div className="movieInfo">
              <p>U/A,2D,Hindi</p>
              <h3>{title}</h3>
              <p>{Hall_Name},{Hall_Address}</p>
              <p>{Selected_date}, {Selected_time}</p>
            </div>
          </div>
          <div className="ticketMid">
            <div>
              <p>SEATS</p>
             <div className="ticketMidGrid" >
              {seat_Number.seats.map((seat, index)=>{
                return (<h2>({seat.row},{seat.col})</h2>)
              })}
              </div>
            </div>
          </div>
          <img
            className="qrCode"
            src={PandeyJiiQR}
            alt="QR"
          />
        </div>
      </div>

      <div className="finalLinks">
        <a href="#">
          <u>Download Ticket...</u>
        </a>
      </div>

      <div className="finalLinks">
          <Link to="/">
           <a href="#">Go to Home...</a>
          </Link>
         </div>
    </div>
  </div>);
  
}



export default Ticket;




// return (<div className="ticketContainer">

//     <div className="ticketPage" style={{ marginTop: "100px" }}>

//       <div className="ticketHeadAll">

//         <div className="ticketHead">
//           <img
//             className="moviePoster"
//             src={poster}
//             alt=""
//           />
//         </div>

//         <div className="movieInfo">
//           <p style={{ fontWeight: "bold" }}>{title},Hindi</p>
//           <p><span style={{ fontWeight: "bold" }}>{Hall_Name}</span> Theater</p>
//           <p> Ticket Booked :<span style={{ fontWeight: "bold" }}> {Total_ticket}</span></p>
//           <p>Total - <span style={{ fontWeight: "bold" }}>{total_ticket_price}Rs</span></p>
//           <p>Seat type : <span style={{ fontWeight: "bold" }}>{seat_type}</span></p>
//           <div><span style={{ fontWeight: "bold" }}>Seat :</span></div>
//           <div>
//             {seat_Number.map((seat, index) => {
//               return (<div >Row :Column - <span style={{ fontWeight: "bold" }}>{seat.row} : {seat.col}</span> </div>)
//             })}
//           </div>
//         </div>

//       </div>

//       <div>
//         <img
//           className="qrCode"
//           src="https://s3.eu-central-1.amazonaws.com/qrcg-free-editor.egodit.org/main/assets/images/websiteQRCode_noFrame.png"
//           alt="QR"
//         />
//       </div>

//       <div>
//         <div className="finalLinks">
//           <a href="#">Download Ticket...</a>
//         </div>

//         <div className="finalLinks">
//           <Link to="/">
//             <a href="#">Go to Home...</a>
//           </Link>
//         </div>
//       </div>

//     </div>

//   </div>);




