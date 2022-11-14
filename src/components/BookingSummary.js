import React, { useState } from "react";
import Cleave from "cleave.js/react";

import { RadioButton, RadioGroup } from "react-radio-buttons";
import "./BookingSummary.css";

export default function BookingSummary(props) {
    const [creditCardNum, setCreditCardNum] = useState('#### #### #### ####');
  const [cardHolder, setCardHolder] = useState('Your Full Name');
  const [expireMonth, setExpireMonth] = useState("MM");
  const [expireYear, setExpireYear] = useState("YYYY");

  const handleCardNumber = (e) => {
    setCreditCardNum(e.target.value);
    // console.log(e.target.value);
  }

  const handleHolderName = (e) => {
    setCardHolder(e.target.value);
    // console.log(cardHolder);
  }

  const handleExpMonth = (e) => {
    setExpireMonth(e.target.value);
  };

  const handleExpYear = (e) => {
    setExpireYear(e.target.value);
  };

  const handlePayButton = ()=>{
     console.log("random")
  }

  return (
    <div>
      <div className="checkout">
        <div className="details">
          <div className="heading">
            <h2>Share contact details</h2>
          </div>

          <div>
            <form className="form">
              <div className="input-container">
                <h4>Enter Email</h4>
                <input type="email" placeholder="Email Address" required />
              </div>
              <div className="input-container">
                <h4>Enter Mobile Number</h4>
                <input type="tel" placeholder="Mobile Number" required />
              </div>
            </form>
          </div>

          <div className="heading">
            <h2>Enter Card details</h2>
          </div>

          <div>
            <form className="form">
              <div className="input-container mt">
                <h4>Enter card number</h4>
                <Cleave
                  delimiter="-"
                  options={{ creditCard: true }}
                  placeholder="Please enter your credit card number"
                  onChange={handleCardNumber}
                />
              </div>

              <div className="input-container">
                <h4>Card Holder Name</h4>
                <input
                  // onChange={handleCardHolder}
                  type="text"
                  placeholder="Please enter your full name"
                  onChange={handleHolderName}
                  required
                />
              </div>

              <div className="cardExpiry">
                <div className="input-container">
                  <h4>Exp. Month</h4>
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
                  <h4>Year</h4>
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
                  <h4>CVV</h4>
                  <input
                    type="password"
                    maxLength={3}
                    size={3}
                    placeholder="CVV"
                    required
                  />
                </div>
              </div>
            </form>
          </div>

          <div className="payButtonContainer">
            <button className="payButton" onClick={handlePayButton}>Make Payment</button>
          </div>
        </div>

        <div className="receipt">
          <div>
            <h2>Booking Summary</h2>
          </div>

          <div className="movieName">
            <p>{props.movieName}</p>
            <p>{props.tickets} tickets</p>
          </div>

          <div>
            <p>{props.language}, {props.definition}</p>
            <p>{props.cinemaName}</p>
          </div>

          <div>
            <h4>Select ticket type</h4>
            <RadioGroup horizontal>
              <RadioButton
                rootColor="#4E1427"
                pointColor="#f14c63"
                value="M-Ticket"
              >
                M-Ticket
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

          <div>
            <p>{props.seatNumbers}</p>
            <p>{props.movieDate}</p>
            <p>{props.movieTime}</p>
          </div>

          <div>
            <div className="subTotal">
              <p>Subtotal</p>
              <h4>Rs. {props.tickets}*{props.ticketPrice}</h4>
            </div>
            <div className="subTotal">
                <p>+Convenience fee</p>
                <h4>Rs. {props.tickets}*{props.fee}</h4>
            </div>
            <div className="subTotal">
                <p>-Discount applied</p>
                <h4>Rs. {props.tickets}*{props.ticketPrice}*{props.discount}/100</h4>
            </div>
          </div>

          <div className="amountPayable">
            <p>Amount Payable</p>
            <h4>Rs. {}</h4>
          </div>
        </div>
      </div>
      <div className="note">
        <h5>Note:</h5>
        <p>
          1. Registrations/Tickets once booked cannot be exchanged, cancelled or
          refunded.
        </p>
        <p>
          2. In case of Credit/Debit Card bookings, the Credit/Debit Card and
          Card holder must be present at the ticket counter while collecting the
          ticket(s).
        </p>
      </div>
    </div>
  );
}
