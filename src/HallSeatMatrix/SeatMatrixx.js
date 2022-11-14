import React from 'react';
import './SeatMatrix.css';


import { AltRoute } from "@mui/icons-material";
import { textAlign } from "@mui/system";
import { Button } from "antd";
import { useEffect, useState } from "react"


import BookingSummary from "../BookingTicket/BookingSummary";
import { Link, useLocation } from 'react-router-dom';

const SeatMatrix = () => {
    const location = useLocation();
    const { title, Hall_Name, Selected_date, Selected_time, total_seat } = location.state;


    let Timing = [
        { movieTime: "12:15 PM" },
        { movieTime: "03:30 PM" },
        { movieTime: "06:45 PM" },
        { movieTime: "10:15 PM" },
    ];

    const [buttonTimeId, setButtonTimeId] = useState(0);
    const R = 11;
    const C = 23;

    const [enabledPaymentRedirect, setEnabledPaymentRedirect] = useState(false);
    const [selectedCount, setSelectedCount] = useState(0);
    const [ticket, setTicket] = useState({
        seats: [],
        seatCount: total_seat,
        seatPrice: 100,
    })

    const onSelect = (e, index, cindex) => {
        if (selectedCount >= ticket.seatCount) {
            alert(`You already selected ${selectedCount} seat.`)
            return;
        }
        const s = {
            row: index,
            col: cindex
        }

        const data = [...ticket.seats, s];

        setTicket({ ...ticket, seats: data })

        if (selectedCount + 1 >= ticket.seatCount) {
            setEnabledPaymentRedirect(true);
        }

        setSelectedCount(selectedCount + 1);


    }

    const unSelect = (e, index, cindex) => {
        if (selectedCount - 1 < ticket.seatCount) {
            setEnabledPaymentRedirect(false);
        }
        setSelectedCount(selectedCount - 1);
        const tick = [...ticket.seats]
        const ans = tick.filter((se) => (se.row !== index || se.col !== cindex))
        setTicket({ ...ticket, seats: ans })
    }

    const isOccupied = (index, cindex) => {
        // const ans = booked.find((book) => book.row == index && book.col == cindex)
        // if(ans)
        //     return true;
        return false;
    }

    const isSelected = (index, cindex) => {
        const ans = ticket.seats.find((book) => book.row === index && book.col === cindex)
        if (ans)
            return true;
        return false;
    }

    let seatMatrixOfMall = <div className="seatMatrixOfHall">

        <div className="seatMatrixOfHallLeftCount">
            {[...Array(R)].map((R, Rindex) => (
                <h5 className="seatMatrixOfHallLeftCountshow">{Rindex}</h5>
            ))
            }
        </div>

        <div className="seatMatrixOfHallLeft">
            {[...Array(R)].map((R, Rindex) => (
                <div key={Rindex} className="row">
                    {
                        [...Array(C)].map((C, Cindex) => (
                            Cindex <= 4 && Rindex <= 7 ?
                                isOccupied(Rindex, Cindex)
                                    ? <div className="occupied">{Cindex}</div>
                                    : isSelected(Rindex, Cindex)
                                        ? <div className="selected" onClick={(e) => unSelect(e, Rindex, Cindex)}>{Cindex}</div>
                                        : <div className="seat" onClick={(e) => onSelect(e, Rindex, Cindex)}>{Cindex}</div>

                                :
                                <div style={{ display: "none" }}>1</div>
                        ))
                    }
                </div>
            ))
            }
        </div>

        <div className="seatMatrixOfHallLeft">
            {[...Array(R)].map((R, Rindex) => (
                <div key={Rindex} className="row">
                    {
                        [...Array(C)].map((C, Cindex) => (
                            Cindex >= 5 && Cindex <= 18 ?
                                isOccupied(Rindex, Cindex)
                                    ? <div className="occupied">{Cindex}</div>
                                    : isSelected(Rindex, Cindex)
                                        ? <div className="selected" onClick={(e) => unSelect(e, Rindex, Cindex)}>{Cindex}</div>
                                        : <div className="seat" onClick={(e) => onSelect(e, Rindex, Cindex)}>{Cindex}</div>

                                :
                                <div style={{ display: "none" }}>1</div>
                        ))
                    }
                </div>
            ))
            }
        </div>

        <div className="seatMatrixOfHallRight">
            {[...Array(R)].map((R, Rindex) => (
                <div key={Rindex} className="row">
                    {
                        [...Array(C)].map((C, Cindex) => (
                            Cindex >= 19 && Cindex <= 20 ?
                                isOccupied(Rindex, Cindex)
                                    ? <div className="occupied">{Cindex}</div>
                                    : isSelected(Rindex, Cindex)
                                        ? <div className="selected" onClick={(e) => unSelect(e, Rindex, Cindex)}>{Cindex}</div>
                                        : <div className="seat" onClick={(e) => onSelect(e, Rindex, Cindex)}>{Cindex}</div>

                                :
                                <div style={{ display: "none" }}>1</div>
                        ))
                    }
                </div>
            ))
            }
        </div>

        <div className="seatMatrixOfHallRightMain">
            {[...Array(R)].map((R, Rindex) => (
                <div key={Rindex} className="row">
                    {
                        [...Array(C)].map((C, Cindex) => (
                            Cindex >= 20 && Rindex <= 3 ?
                                isOccupied(Rindex, Cindex)
                                    ? <div className="occupied">{Cindex}</div>
                                    : isSelected(Rindex, Cindex)
                                        ? <div className="selected" onClick={(e) => unSelect(e, Rindex, Cindex)}>{Cindex}</div>
                                        : <div className="seat" onClick={(e) => onSelect(e, Rindex, Cindex)}>{Cindex}</div>

                                :
                                <div style={{ display: "none" }}>1</div>
                        ))
                    }
                </div>
            ))
            }
        </div>

    </div>



    const [bookingSummaryPage, setBookingSummaryPage] = useState("");
    const HideBookingSummaryPage = () => {
        setBookingSummaryPage("")
    }
    const ShowBookingSummaryPage = () => {
        setBookingSummaryPage(<div>
            <Button className="MovieTimingInOneTheaterBtn 
                            BackToSeatMatrix"
                onClick={HideBookingSummaryPage}
            >Back</Button>
            <BookingSummary />
        </div>
        )
    }



    return (
        <div className="seatmatrixbody">
            <div className="movie_desc_bar">

                <div className="movie_desc_bar-Left">
                    <span className="movie_desc_bar-Left-Top">{title} </span>
                    <span className="movie_desc_bar-Left-Down">{Hall_Name} | {Selected_date} , {Selected_time} </span>
                </div>

                <div className="movie_desc_bar-Right">
                    <Button className="movie_desc_bar-Right-btn">Total : {ticket.seatCount} Tickets</Button>
                    <Button className="movie_desc_bar-Right-btn">Left : {ticket.seatCount - selectedCount} Tickets</Button>
                </div>

            </div>


            <div className="MovieTimingInOneTheater">
                {Timing.map((time, index) => {
                    return (
                        <Button className="MovieTimingInOneTheaterBtn"
                            style={buttonTimeId === index ? { background: "#2dc492", color: "white" }
                                : { background: "white", color: "#2dc492" }}
                            onClick={() => {
                                setButtonTimeId(index);
                            }}
                        >{time.movieTime}</Button>
                    )
                })}

            </div>

            {seatMatrixOfMall}

            <div>
                {bookingSummaryPage}
            </div>


            {enabledPaymentRedirect ? (
                <span className="paymentBar">
                    <Link to="/movie-details/Hall-name_and_date-time/MallSeatMatrix/Bokking-details"
                        state={{
                            title: title,
                            Hall_Name: Hall_Name,
                            Total_ticket: selectedCount,
                            total_ticket_price: selectedCount * ticket.seatPrice,
                            seat_type: "Gold",

                        }}>
                        <Button className="paymentBarBtn"
                            type="primary" style={{ backgroundColor: "#f84464" }}
                        // onClick={ShowBookingSummaryPage}
                        >
                            <span style={{ color: "white" }}>
                                Total : {selectedCount * ticket.seatPrice}
                            </span>
                        </Button>
                    </Link>
                </span>
            ) : <></>}

        </div>
    )
}

export default SeatMatrix;