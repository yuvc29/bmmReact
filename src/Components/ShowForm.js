import {Button,  Select, Input } from 'antd';
import React, {useState, useEffect} from 'react';
// import Theaters from './Theaters'
import axios from 'axios' 

const timings = [
    {
        label:"12:00",
        value:"12:00"
    },
    {
        label:"03:00",
        value:"03:00"
    },
    {
        label:"06:00",
        value:"06:00"
    },
    {
        label:"09:00",
        value:"09:00"
    }
]




const ShowForm = () => {
    // const [showDate, setShowDate] = useState("")
    const [city, setCity] = useState(0)
    // const [movieId, setMovieId] = useState(0)
    // const [theaterId, setTheaterId] = useState(0)
    const [fields, setFields] = useState({
        date:"",
        movieId:0,
        theaterId:0,
        timing: ""
    })
    const cityList = [{
        value:1,
        label:"Mumbai"
    },
    {
        value:2,
        label:"Delhi"
    }]
    const movieList = [{
        value:1,
        label:"Iron Man"
    },
    {
        value:2,
        label:"Infinity war"
    }]
    const theaterList = [{
        value:1,
        label:"Inox, Sector-18"
    },
    {
        value:2,
        label:"Cineplex, Sector-20"

    }]

    // useEffect(() => {
    //     try{
    //         axios.get("https://localhost:8080/city")
    //         .then(response => response.json())
    //             // 4. Setting *dogImage* to the image url that we received from the response above
    //         .then(data => {cityList = data.map((city)=>{return {value:city.cityId, label:city.name}}) }  );
    //     }
    //     catch(err){
    //         alert("Failed to fetch cities")
    //     }
    //     try{
    //         axios.get("https://localhost:8080/movie")
    //         .then(response => response.json())
    //             // 4. Setting *dogImage* to the image url that we received from the response above
    //         .then(data => {movieList = data.map((movie)=>{return {value:movie.movieId, label:movie.title}}) }  );
    //     }
    //     catch(err){
    //         alert("Failed to fetch Movies")
    //     }
    // }, []);

    // useEffect(() => {
    //     try{
    //         axios.get("https://localhost:8080/movie")
    //         .then(response => response.json())
    //         .then(data => {
    //             movieList = data.map((movie)=>{return {value:movie.movieId, label:movie.title}}) } );
    //     }
    //     catch(err){
    //         alert("failed to fetch theaters")
    //     }
    // }, [city]);

    const Submit = () => {
        try{
            axios
            .post('http://localhost/8080/show', JSON.stringify(fields))
            .then(response => response.json())
            .then(data => {
              console.log(data);
              if(data.status === 200)alert("Theater added")
            })
        }
        catch(err){
            alert("Failed")
        }
    };
    return (
    <div style = {{marginLeft: '50px'}}>
        <div style = {{margin:'20px'}}>
            <Input style = {{width:'200px'}} value={fields.date} placeholder="DD/MM/YYYY"  onChange={(e)=>{setFields({...fields, date:e.target.value} ) } }/>
            {/* <Button style={{ margin:'30px'}} type="primary" onClick={handleDate}>Choose Date</Button> */}
        </div>
        <div style = {{margin:'20px'}}>
            <Select
                allowClear style={{ width: '450px' }} 
                placeholder="Select Movie" 
                onChange={(e)=>{setFields({...fields, movieId:e})}} options={movieList}
            />
            {/* <Button type="primary" onClick={handleDate}>Choose Date</Button> */}
        </div>
        <div style = {{margin:'20px'}}>
            <Select
                allowClear style={{ width: '450px' }} 
                placeholder="Select City" 
                onChange={(e)=>{setCity(e)}} options={cityList}
            />
        </div>
        <div style = {{margin:'20px'}}>
            <Select
                allowClear style={{ width: '450px' }} 
                placeholder="Select Theater" 
                onChange={(e)=>{setFields({...fields, theaterId:e})}} options={theaterList}
            />
            {/* <Button type="primary" onClick={handleDate}>Choose Date</Button> */}
        </div>
        <div style = {{margin:'20px'}}>
            <Select
                allowClear style={{ width: '450px' }} 
                placeholder="Select Timing" 
                onChange={(e)=>{setFields({...fields, timing:e})}} options={timings}
            />
            {/* <Button type="primary" onClick={handleDate}>Choose Date</Button> */}
        </div>
        {/* {
            Theaters.map((theater)=>{
                return 
                (<div>
                    <div style = {{margin:'20px'}}>
                        <p>{theater.name}</p>
                    </div>
                    <div style = {{margin: '10px'}}>
                        <Select
                            mode="multiple"
                            allowClear
                            style={{
                                width: '400px',
                            }}
                            placeholder="Please select"
                            onChange={(value)=>{handleChange(value, theater)} }
                            options={options.filter((slot)=>{
                                for(let i = 0; i < theater.shows.length; i++){
                                    const arr = theater.shows[i].split(" ");
                                    if(slot.value === arr[3])return false;
                                }
                                return true
                            })}
                        />
                    </div>
                </div>)
            })
        } */}

        <Button type="primary" onClick={Submit}>Post Show</Button>
    </div>
);}
export default ShowForm;