import React from "react";
import './Ticket.css';


import { Alert } from "antd";
import { Link, useLocation } from "react-router-dom";
function Ticket() {

  const location = useLocation();
  const { title, Hall_Name, Total_ticket, total_ticket_price, seat_type, poster, Holder_name,
    Transaction_Id, } = location.state;
    
// console.log("this is final seat "+seatNumber);
  const seat_Number = [{row:1, col:0},{row:1, col:0},{row:1, col:0}];


  // console.log("this is poster"+poster);

  return (<div className="ticketContainer">

    <div className="ticketPage" style={{ marginTop: "100px" }}>

      <div className="ticketHeadAll">

        <div className="ticketHead">
          <img
            className="moviePoster"
            src={poster}
            alt=""
          />
        </div>

        <div className="movieInfo">
          <p style={{ fontWeight: "bold" }}>{title},Hindi</p>
          <p><span style={{ fontWeight: "bold" }}>{Hall_Name}</span> Theater</p>
          <p> Ticket Booked :<span style={{ fontWeight: "bold" }}> {Total_ticket}</span></p>
          <p>Total - <span style={{ fontWeight: "bold" }}>{total_ticket_price}Rs</span></p>
          <p>Seat type : <span style={{ fontWeight: "bold" }}>{seat_type}</span></p>
          <div><span style={{ fontWeight: "bold" }}>Seat :</span></div>
          <div>
            {seat_Number.map((seat, index) => {
              return (<div >Row :Column - <span style={{ fontWeight: "bold" }}>{seat.row} : {seat.col}</span> </div>)
            })}
          </div>
        </div>

      </div>

      <div>
        <img
          className="qrCode"
          src="https://s3.eu-central-1.amazonaws.com/qrcg-free-editor.egodit.org/main/assets/images/websiteQRCode_noFrame.png"
          alt="QR"
        />
      </div>

      <div>
        <div className="finalLinks">
          <a href="#">Download Ticket...</a>
        </div>

        <div className="finalLinks">
          <Link to="/">
            <a href="#">Go to Home...</a>
          </Link>
        </div>
      </div>

    </div>

  </div>);
}



export default Ticket;