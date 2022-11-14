import { Alert } from "antd";
import React from "react";

export default function Ticket() {
  return (
    <div className="ticketPage">
      <Alert
        message="Booking success"
        description="Your ticket is booked and can be downloaded through link below."
        type="success"
        showIcon
        closable
      />

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
              src="https://i2.cinestaan.com/image-bank/1500-1500/136001-137000/136340.jpg"
              alt="random"
            />
            <div className="movieInfo">
              <p>U/A,2D,Hindi</p>
              <h3>Zero</h3>
              <p>R-City, Delhi</p>
              <p>Fri, 32 Oct</p>
            </div>
          </div>
          <div className="ticketMid">
            <div>
              <p>SCREEN</p>
              <h2>Audi 2</h2>
            </div>
            <div>
              <p>SEATS</p>
              <h2>A1,A2</h2>
            </div>
          </div>
          <img
            className="qrCode"
            src="https://s3.eu-central-1.amazonaws.com/qrcg-free-editor.egodit.org/main/assets/images/websiteQRCode_noFrame.png"
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
        <a href="#">
          <u>Go to Home...</u>
        </a>
      </div>
    </div>
  );
}
