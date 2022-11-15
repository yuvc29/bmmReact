
import { Button, Table, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import Mod from './Mod'
const { Column } = Table;

const MovieList = ()=>{

    // const [modal, contextHolder] = Modal.useModal();
    const [open, setOpen] = useState(false);
    const [movieList, setMovieList] = useState([
        {

            movieId: 1,
            title: "Uunchai",
            releaseDate: "03/11/2022",
            expiryDate:"10/12/2022",
            length: 129,
            trailer: "https://youtube.com",
            language: "Hindi",
            ageRating: "U",
            format: "2D/3D",
            poster:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/uunchai-et00335262-1665386678.jpg",
            description:"Three friends take a trek to the Everest Base Camp which becomes a personal, emotional and spiritual journey while battling their physical limitations and discovering the true meaning of freedom."
          }
      ])
    const [genre, setGenre] = useState([
        "Adventure", "Drama", "Family" 
    ])
    const [cast, setCast] = useState([
        {
            firstName:"Amitabh",
            lastName:"Bachchan",
            image:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/amitabh-bachchan-138-12-09-2017-02-34-37.jpg"
        },
        {
            firstName:"Rekha",
            lastName:"Bachchan",
            image:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/rekha-1864-22-09-2017-03-36-15.jpg"
        }
    ]) 
    //   useEffect(() => {
    //     fetch("https://localhost:8080/movie", {
    //         method: 'GET', // *GET, POST, PUT, DELETE, etc.
    //         // mode: 'cors', // no-cors, *cors, same-origin
    //         // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //         // credentials: 'same-origin', // include, *same-origin, omit
    //         headers: {
    //           'Content-Type': 'application/json'
    //           // 'Content-Type': 'application/x-www-form-urlencoded',
    //         },
    //         // redirect: 'follow', // manual, *follow, error
    //         // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //         // body: JSON.stringify(data) // body data type must match "Content-Type" header
    //       })
    //     .then(response => response.json())
    //         // 4. Setting *dogImage* to the image url that we received from the response above
    //     .then(data => setMovieList(data.message))
    //   },[])
    const deleteMovie = (text)=>{
        setMovieList(movieList.filter((movie)=>{if(movie.title !== text) return movie; return null}))
    }
    return (
        <Table name = "Movies" dataSource={movieList} >
            <Column title= "Movies" dataIndex = "title" key="title"/>
            <Column title= "Action" dataIndex = "title" key="title"
            render={(text)=>{
                // const detail = ()=>{modal.info({title:text});}
                return <Button type="primary" onClick={()=>{setOpen(true)}}>Show Details</Button>
            }}
            />
            <Column title= "Delete" dataIndex = "title" key="title"
            render={(text)=>{
                return <Button type="primary" onClick={()=>{deleteMovie(text)}}>Delete</Button>
            }}
            />
        </Table>
    )
}

export default MovieList
