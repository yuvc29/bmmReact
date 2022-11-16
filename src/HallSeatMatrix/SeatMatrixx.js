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
const { title, Hall_Name, Selected_date, Selected_time, total_seat, alltiming, poster, showId } = location.state;
  
const AllTiming=JSON.parse(alltiming);
// console.log("This is array" + AllTiming[0].timing);


const [DisplayBookedSeatArray, setDisplayBookedseateArray] = useState([]);

const GetSeatsbyShowId = async(showId) => {
	
   fetch(`/seat/show/${showId}`)
      .then((response) => response.json())
      .then((json) => {
        let newBookedSeatArray = json;
        console.log("This is my Movie " + json);
        setDisplayBookedseateArray(newBookedSeatArray);
      });
}

  useEffect(() => {
    GetSeatsbyShowId(showId);
  }, []);



    const [selected_Seat_Num, setSelected_Seat_Num ] = useState([]); 
    const [buttonTimeId, setButtonTimeId] = useState(Selected_time);
    
    const R = 11;
    const C = 23;

//  const [authenticated, setAuthenticated] = useState(true);
    const [isModalVisible, setModalVisible] = useState(true);
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
        
        let recentlySeletSeat = {
            row: index,
            col: cindex
        }
        
        
        const data = [...ticket.seats, recentlySeletSeat];

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
        const temp = parseInt(index.toString() + cindex.toString());
        // console.log("booked ",DisplayBookedSeatArray,"temp", temp);

        let ans= false;
        DisplayBookedSeatArray.map((book) => ans|=(book.seatNo === temp && book.orderId!==null));
        // console.log("ans",ans);

        return ans;
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
                            Cindex <= 3 && Rindex <= 7 ?
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
                            Cindex >= 4 && Cindex <= 17 ?
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
                            Cindex >= 18 && Cindex <= 19 ?
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
                {AllTiming.map((time, index) => {
                    return (
                        <Button className="MovieTimingInOneTheaterBtn"
                            style={buttonTimeId === time.timing ? { background: "#2dc492", color: "white" }
                                : { background: "white", color: "#2dc492" }}
                            onClick={() => {
                                setButtonTimeId(time.timing);
                            }}
                        >{time.timing}</Button>
                    )
                })}

            </div>

            {seatMatrixOfMall}

            {enabledPaymentRedirect ? (
                <span className="paymentBar">
                    <Link to="/movie-details/Hall-name_and_date-time/MallSeatMatrix/Bokking-details"
                        state={{
                            selected_Seat_Num: JSON.stringify(selected_Seat_Num),
                             poster: poster,
                            title: title,
                            Hall_Name: Hall_Name,
                            Total_ticket: selectedCount,
                            total_ticket_price: selectedCount * ticket.seatPrice,
                            seat_type: "Gold",
                            
                        }}>
                        <Button className="paymentBarBtn"
                            type="primary" style={{ backgroundColor: "#f84464" }}
                        // onClick={() =>{alert("jai shree ram"); ShowBookingSummaryPage()}}
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







//For dummy seat adding.. wrire in onselect function in last;

// let newsetSelected_Seat_Num = selected_Seat_Num;
        // newsetSelected_Seat_Num.push(recentlySeletSeat);
        // setSelected_Seat_Num(newsetSelected_Seat_Num);
        //  console.log(selected_Seat_Num);


//for remove the dummy added seat that contain row and column;....write it in unselect function;
// var removeByAttr = function(arr, Row, Col){
        //         var i = arr.length;
        //         while(i--){
        //             if(arr[i].row===Row && arr[i].col===Col){
        //               break;
        //                }
        //          }

        //         arr.splice(i,1);
        
        //      return arr;
        //   }

        // let newsetSelected_Seat_Num = selected_Seat_Num;
        // newsetSelected_Seat_Num=removeByAttr(newsetSelected_Seat_Num, index, cindex);
        // setSelected_Seat_Num(newsetSelected_Seat_Num);
        // console.log(selected_Seat_Num);
