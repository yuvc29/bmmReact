import React from 'react';
import './SeatMatrix.css';


import { AltRoute } from "@mui/icons-material";
import { textAlign } from "@mui/system";
import { Button } from "antd";
import { useEffect, useState } from "react"


import BookingSummary from "../BookingTicket/BookingSummary";
import { Link, useLocation } from 'react-router-dom';

import axios from 'axios';


const SeatMatrix = () => {

const location = useLocation();
const { title, Hall_Name, Hall_Address, Selected_date, Selected_time, total_seat, alltiming, poster, showId } = location.state;
  
const AllTiming=JSON.parse(alltiming);
// console.log("This is array" + AllTiming[0].timing);

   console.log("This is show id ",showId);
    const R = 11;
    const C = 23;
    
    
    const [enabledPaymentRedirect, setEnabledPaymentRedirect] = useState(false);
    const [selectedCount, setSelectedCount] = useState(0);
    const [isModalVisible, setModalVisible] = useState(true);
    const [booked , setBooked] = useState([]);
    const [authenticated, setAuthenticated] = useState(true);
    const [amount, setAmount ] = useState(0);
    const [couponId, setCouponId] = useState(1);   


    const [selected_Seat_Num, setSelected_Seat_Num ] = useState([]); 
    const [buttonTimeId, setButtonTimeId] = useState(Selected_time);
   
  
    
    const [ticket, setTicket] = useState({
        seats: [],
        seatCount: total_seat,
        seatPrice: 100,
    })
    
  let seatList= [];

     useEffect(() => {
        setAmount(selectedCount*(ticket.seatPrice));
    }, [selectedCount])
 

    const GetSeatsbyShowId = async(showId) => {
	  try {
		 let response =  await axios.get(`/seat/show/${showId}`);
		// console.log("******Shows***", response);
		 return response;
	  }

	   catch (error) {
		   console.log(error);
	  }
   }



   useEffect(() => {
        const fetchData = async() => {
            let response = await GetSeatsbyShowId(showId);
            const seatList = response.data;

            console.log("Seat Lists", seatList);
            setBooked(seatList);
        }
        fetchData();
     }, [])


     
const PostMyOrder = async(orderObj) => {
	   try {
		  let response =  await axios.post(`/order`, orderObj);
		  // console.log("******Shows***", response);
		  return response;
	   }

	    catch (error) {
		  console.log(error);
	   }
   }

     
   let orderObj = {
            showId:showId,
            userId:329,                                 // hard Coded , have to change after log in integration
            amount : amount,
            couponId: couponId,
            amountAfterDiscount : amount,  
     }

    let orderId=1111; //Hard coded because i could able to get the orderId from anywhere;

   const handleSubmit = async() => {
        // ReserveBookedSeats();                         //hold seats for some time
        orderObj = {
            showId:showId,
            userId:329,                                 // hard Coded , have to change after log in integration
            amount : amount,
            couponId: couponId,
            amountAfterDiscount : amount,  
        }

       
        const response = PostMyOrder(orderObj);
        console.log("Order Post Response Status" ,(await response));
         

        orderObj = (await response).data;
        console.log("Order Post Response Data" ,orderObj);  

        orderId = orderObj.orderId;  // getting from api
        //  seatList= [];
            
        ticket.seats.map((seat)=> {
            const temp = parseInt(seat.row.toString() + seat.col.toString());
            seatList.push(temp);
           
        })
             
           //After login  integration successull move to "/movie-details/Hall-name_and_date-time/MallSeatMatrix/Bokking-details" else move to Login_Page;
        // (authenticated?navigation.navigate("PaymentPage", { seatList : seatList, ticket : ticket , orderObj: orderObj , movieItem:route.params.movieItem,  theaterItem: route.params.theaterItem, showItem : route.params.showItem, date : route.params.date}):navigation.navigate("Login"));
        
};



    const onSelect = (e, index, cindex) => {
        if (selectedCount >= ticket.seatCount) {
            alert(`You already selected ${selectedCount} seat.`)
            return;
        }
        
        let recentlySeletedSeat = {
            row: index,
            col: cindex
        }
        
    
        const data = [...ticket.seats, recentlySeletedSeat];
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
         // console.log("booked ",booked,"temp", temp);  
         

        let ans= false;
        // console.log("ans",ans);
   
       booked.map((book) => ans|=(book.seatNo === temp && book.orderId!==null));
        return ans;
    }

    const isSelected = (index, cindex) => {
        const ans = ticket.seats.find((book) => book.row === index && book.col === cindex)
        if (ans)
            return true;
        return false;
    }


//Clear the concept of toggleModalVisibility;
      const toggleModalVisibility = () => {
        console.log("Toggling Count Seat Modal");
        setModalVisible(!isModalVisible);
    };


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
                            selected_Seat_Num: JSON.stringify(selected_Seat_Num),//ticket_seat_Location_info
                            Total_ticket: selectedCount, //ticket_seat_count
                            total_ticket_price: selectedCount * ticket.seatPrice,//ticket_price
                            ticket:  JSON.stringify(ticket),//(booked_seatArray, seatCount, ticket_Price)
                           
      //seatList : seatList  Not working properly so i used ticket.seats in BookingSummary compo to get all seats;
                            // seatList : JSON.stringify(seatList),//All_seat_Location_info
                             seat_type: "Gold", //Seat_Type

                             poster: poster,//Movie_Poster
                             title: title, //Movie_title
   
                             Hall_Name: Hall_Name,//Theater_Name
                             Hall_Address:Hall_Address,//Theater_Address

                             orderObj: JSON.stringify(orderObj),//it's object of all info of reserveBooked Seats
                             orderId:orderId, //orderId is hard coded in just below the let orderObj;                               

                             Selected_date: Selected_date,//Show_Item
                             Selected_time: Selected_time,//Show_Item
                             showId: showId, //Show_Item
                        }}>

                        <Button className="paymentBarBtn"
                            type="primary" style={{ backgroundColor: "#f84464" }}
                        onClick={() =>{  handleSubmit(); console.log("SeatList = ", seatList)}}
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

//const [DisplayBookedSeatArray, setDisplayBookedseateArray] = useState([]);


// const GetSeatsbyShowId = async(showId) => {
	
//    fetch(`/seat/show/${showId}`)
//       .then((response) => response.json())
//       .then((json) => {
//         let newBookedSeatArray = json;
         
//        console.log("Seat Lists", newBookedSeatArrayt)
//        setBooked(newBookedSeatArray);
    
//         setDisplayBookedseateArray(newBookedSeatArray);
//       });
// }

//   useEffect(() => {
//     GetSeatsbyShowId(showId);
//   }, []);

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
