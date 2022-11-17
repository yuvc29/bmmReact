import React, { useState } from "react";
import './BookingSummary.css';

import { RadioButton, RadioGroup } from "react-radio-buttons";
import { Button } from "antd";
import { Link, useLocation } from "react-router-dom";

import axois from 'axios';
import axios from 'axios';

function BookingSummary() {

  const location = useLocation();
  const {seatList, title, Hall_Name, Hall_Address, Total_ticket, total_ticket_price, seat_type, poster, Selected_date, Selected_time, showId, selected_Seat_Num, ticket, orderObj, orderId } = location.state;


  let selected_Seat_Numf = JSON.parse(selected_Seat_Num);
  let ticketf = JSON.parse(ticket);
  let seatListf = [];
  let orderObjf = JSON.parse(orderObj);

  console.log("this is orderid from ticket", orderObjf);

  ticketf.seats.map((seat) => {
    const temp = parseInt(seat.row.toString() + seat.col.toString());
    seatListf.push(temp);

  })

  console.log("this is seatListf", seatListf);



  const PostTransaction = async (transactionObj) => {
    try {
      let response = await axios.post(`/transaction`, transactionObj);
      // console.log("******Shows***", response);
      return response;
    }

    catch (error) {
      console.log(error);
    }
  }


  const PostCreditCard = async (cardObj) => {
    try {
      let response = await axios.post(`/card`, cardObj);
      // console.log("******Shows***", response);
      return response;
    }

    catch (error) {
      console.log(error);
    }
  }


  const PostBookedSeats = async (seatObj) => {
    try {
      let response = await axios.post(`/seat`, seatObj);
      // console.log("******Shows***", response);
      return response;
    }
    catch (error) {
      console.log(error);
    }
  }



  let final_ticketf_price = orderObjf.amount + 125 - 25;

  const [emailAdress, setEmailAdress] = useState('');
  const [phoneNum, setPhoneNum] = useState('');

  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expireMonth, setExpireMonth] = useState('');
  const [expireYear, setExpireYear] = useState('');
  const [cvv, setCvv] = useState('');

  const [expiry, setExpiry] = useState('')
  const [focused, setFocused] = useState('name');
  const [index, setIndex] = useState(0)
  const [type, setType] = useState('visa')


  const onChange = (form) => {
    console.log(form);
  }

  const handlePayment = async () => {

    setExpiry(expireMonth + "/" + expireYear)


    let cardObj = {
      cardNo: number,
      name: name,
      cvv: cvv,
      expDate: expiry,
      userId: 329,                    // user-Id hard coded
    }

    const crrResponse = await PostCreditCard(cardObj);
    console.log("Credit Card Post Status", crrResponse.status);

    let transactionObj = {
      orderId: orderObjf.orderId,
      status: "true",
    }



    const tranResponse = await PostTransaction(transactionObj);
    console.log(" Transaction Post Status", tranResponse.status);

    console.log("Something is wrong ", seatListf)
    seatListf.map(async (seatNo) => {
      let seatObj = {
        showId: showId,
        seatNo: seatNo,
        price: 100,
        orderId: orderId,
      }

      const seatBookingResponse = await PostBookedSeats(seatObj);
      console.log(" Seat Post Status for", seatNo, ":", seatBookingResponse.status)
    })


  }


  const handleEmailAdress = (e) => {
    setEmailAdress(e.target.value);
    // console.log(e.target.value);
  }

  const handlePhoneNum = (e) => {
    setPhoneNum(e.target.value);
    // console.log(e.target.value);
  }



  const handleCardNumber = (e) => {
    setNumber(e.target.value);
    // console.log(e.target.value);
  }

  const handleHolderName = (e) => {
    setName(e.target.value);
    // console.log(name);
  }

  const handleExpMonth = (e) => {
    setExpireMonth(e.target.value);
  };

  const handleExpYear = (e) => {
    setExpireYear(e.target.value);
  };

  const handlecvv = (e) => {
    setCvv(e.target.value);
  }




  return (

    <div className="checkout">

      <div className="RecieptAndDetails">

        <div className="receipt">

          <span className="receiptBookingSummary">SHARE CONTACT DETAILS</span>
          <div className="ContactCardDetailEnter">

            <form className="form">
              <div className="TicketAmountInfo">

                <div className="TicketAmountInfoPrice">
                  <span style={{ marginBottom: "30px" }}>Enter Email</span>
                  <span style={{ marginBottom: "30px" }}>Enter Phone Number</span>
                </div>

                <div className="TicketAmountInfoPrice tTicketAmountInfoPriceAmount">
                  <input style={{ marginBottom: "30px", textAlign: "center" }}
                    type="email" placeholder="Enter Email Address" required
                    onChange={(e) => { handleEmailAdress(e) }} />

                  <input style={{ marginBottom: "30px", textAlign: "center" }}
                    type="tel" placeholder="Enter Phone Number" required
                    onChange={(e) => { handlePhoneNum(e) }} />
                </div>

              </div>
            </form>

          </div>

          <span className="receiptBookingSummary">ENTER CARD DETAILS</span>
          <div className="ContactCardDetailEnter">

            <form className="form">
              <div className="TicketAmountInfo">

                <div className="TicketAmountInfoPrice">
                  <span style={{ marginBottom: "30px" }}>Enter Card Number</span>
                  <span style={{ marginBottom: "30px" }}>Card Holder Name</span>
                </div>

                <div className="TicketAmountInfoPrice TicketAmountInfoPriceAmount">
                  <input style={{ marginBottom: "30px", textAlign: "center" }}
                    type="email" placeholder="Enter Card Numbe" required
                    onChange={(e) => { handleCardNumber(e) }} />

                  <input style={{ marginBottom: "30px", textAlign: "center" }}
                    type="tel" placeholder="Card Holder Name" required
                    onChange={(e) => { handleHolderName(e) }} />
                </div>

              </div>


              <div className="cardExpiry">
                <div className="input-container">
                  <h6 >Exp. Month</h6>
                  <select value={expireMonth} onChange={handleExpMonth}>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                </div>
                <div className="input-container">
                  <h6>Year</h6>
                  <select value={expireYear} onChange={handleExpYear}>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                  </select>
                </div>

                <div className="input-container">
                  <h6>CVV</h6>
                  <input
                    type="password"
                    maxLength={3}
                    size={3}
                    placeholder="CVV"
                    required
                    onChange={(e) => { handlecvv(e) }}
                  />
                </div>

              </div>
            </form>


          </div>
          <Link to='/movie-details/Hall-name_and_date-time/MallSeatMatrix/Bokking-details/ticket-details'
            state={{

              title: title,
              poster: poster,

              Hall_Name: Hall_Name,
              Hall_Address: Hall_Address,

              Total_ticket: Total_ticket,
              total_ticket_price: total_ticket_price,
              seat_type: seat_type,
              seatListf: JSON.stringify(seatListf),
               ticketf: JSON.stringify(ticketf),

              Selected_date: Selected_date,
              Selected_time: Selected_time,

              Holder_name: name,
              Transaction_Id: number,
            }}

            onClick={() => { handlePayment() }}
          >
            <Button className="paymentBarBtn"
              style={{ marginBottom: "20px" }}>Make Payment</Button>
          </Link>
        </div>


        <div className="receipt">

          <span className="receiptBookingSummary">BOOKING SUMMARY</span>

          <div className="movieNameandticketbook">
            <span className="movieNamebook">{title}</span>
            <span className="movieTicketbookinfo movieNamebook"> Date - {Selected_date}</span>
            <span className="movieTicketbookinfo movieNamebook"> Time - {Selected_time}</span><br></br>
            <span className="movieTicketbookinfo">Total Tickets - {Total_ticket}</span>
            <span className="movieTicketbookinfo"> Theater Address: {Hall_Name} ({Hall_Address})</span>
            <span className="movieTicketbookinfo"> Selected seat: {seat_type}</span>
          </div>

          <div className="TicketAmountInfo">
            <div className="TicketAmountInfoPrice">
              <span>Ticket Price</span>
              <span>Convenience fees</span>
              <span>Discount</span>
              <span style={{ borderTop: "1px solid black", marginTop: "10px" }}>Sub Total</span>
            </div>

            <div className="TicketAmountInfoPrice TicketAmountInfoPriceAmount">
              <span>	&nbsp;Rs. {orderObjf.amount}</span>
              <span>	&nbsp;Rs. 125</span>
              <span>-Rs. 25</span>
              <span style={{ borderTop: "1px solid black", marginTop: "10px" }}>Rs.
                {final_ticketf_price}
              </span>
            </div>
          </div>


          <div className="SelectedTicketColletionType">
            <span style={{ fontSize: "22px", color: "#969696" }}>SELECT TICKETS TYPE</span>

            <RadioGroup horizontal>
              <RadioButton
                rootColor="#4E1427"
                pointColor="#f14c63"
                value="M-ticketf"

              >
                M-TICKETS
              </RadioButton>
              <RadioButton
                rootColor="#4E1427"
                pointColor="#f14c63"
                value="Box Office Pickup"
              >
                Box Office Pickup
              </RadioButton>
            </RadioGroup>
          </div>

        </div>

      </div>

      <div className="note">
        <h5 style={{ color: "gray" }} >Note:</h5>
        <p>
          i . Registrations/ticketfs once booked cannot be exchanged, cancelled or
          refunded.
        </p>
        <p>
          ii . In case of Credit/Debit Card bookings, the Credit/Debit Card and
          Card holder must be present at the ticketf counter while collecting the
          ticketf(s).
        </p>
      </div>

    </div>
  );
}



export default BookingSummary;

