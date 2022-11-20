import { CaretRightOutlined } from '@ant-design/icons';
import { Button, Collapse } from 'antd';
import React, {useState, useEffect} from 'react';
import axios from 'axios'
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const MovieList = () => {

    const [ movieList, setMovieList ] = useState([])
    useEffect(() => {
        const fetchData = async()=>{
        try{
          const response = await axios.get("http://localhost:8080/movie")
          const data = response.data;
          // .then(response => response.json())
          setMovieList(data)
        }
        catch(err){
          alert("Failed")
        }
    }
    fetchData();
    }, []);

    const deleteMovie = (id)=>{
      const fetchData = async()=>{
        try{
          const response = await axios.delete(`/movie/${id}`)
          // const data = response.data;
          // console.log("Theater Data " ,response);
          if(response.status === 200){
              alert(response.data)
              window.location.reload(false);
          }
          // .then(response => response.json())
        }
        catch(err){
          alert("Failed")
        }
      }
      fetchData();
      
    }
    
    return(
  <Collapse
    bordered={false}
    defaultActiveKey={['1']}
    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
    className="site-collapse-custom-collapse"
  >
    {
        movieList.map((movie)=>
        <Panel header={movie.title} key={movie.movieId} className="site-collapse-custom-panel">
            <Button type='primary' onClick={()=>deleteMovie(movie.movieId)}>Delete</Button>
        </Panel>
        )
    }
  </Collapse>
)};

export default MovieList;