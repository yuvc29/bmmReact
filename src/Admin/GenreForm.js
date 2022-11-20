import { DownOutlined, UpOutlined } from '@ant-design/icons';//
import { Button, Col, Form, Input, Row, Select } from 'antd';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './Form.css'
// import Genres from './Genres'
// import Actors from './Actors'
// import ShowForm from './ShowForm';
// import Theaters from './Theaters';
// const { Option } = Select;


const AdvancedSearchForm = ({fields, setFields, genres}) => {


  const [form] = Form.useForm();

  const getFields = () => {
    const children =[ 
      
      <Col span={24}>
        <Form.Item
          name={`genre`}
          label={`Genre`}
        >
            <Select
                mode="multiple"
                allowClear
                style={{
                    width: '400px',
                }}
                placeholder="Select Genres"
                onChange={(value)=>{setFields({...fields, genreIds:value})} }
                options={genres}
            />
        </Form.Item>
      </Col>
      
      ]
    return children;
  };


  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      onFinish={onFinish}
    >
      <Row gutter={24}>{getFields()}</Row>
      <Row>
        <Col
          span={24}
          style={{
            textAlign: 'right',
          }}
        >
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => {
              form.resetFields();
            }}
          >
            Clear
          </Button>
        </Col>
      </Row>
    </Form>
  );
};


const GenreForm = ({movieId}) =>{
  const [fields, setFields ] = useState({
    movieId:movieId,
    genreIds:[]
  })

  const [genres, setGenres ]= useState([{value:1, label:"comedy"}, {value:2, label:"Horror"}, {value:3, label:"Thriller"}])


  useEffect(() => {
    const fetchData = async()=>{
    try{
      const response = await axios.get("http://localhost:8080/genre")
      const data = response.data;
      console.log("Genre Data " ,data);
      // .then(response => response.json())
      const fetched = data.map((genre)=>{return {value:genre.genreId, label:genre.name }})
      setGenres(fetched)
    }
    catch(err){
      alert("Failed to get Genres")
    }
  }
  fetchData();
  }, []);


  async function handleClick() {
    let idString = ""
    fields.genreIds.forEach((id)=>{
        idString += id.toString()+','
    })
    const Item = {movieId:fields.movieId, genreIds:idString};
    console.log(Item);
    try{
      const response = await axios.post('http://localhost:8080/postGenre', Item)
      if(response.status === 200){
          alert(response.data)
      }
    }
    catch(err){
      alert("Failed")
    }
    // try{
    //   axios
    //   .post('http://localhost/8080/postGenre', {movieId:fields.movieId, genreIds:idString})
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     if(data.status === 200)alert("Genres added")
    //   })
    // }
    // catch(err){
    //   alert("Failed to post genres")
    // }
  }

  return (
  <div>
    <div>
        <AdvancedSearchForm fields = {fields} setFields = {setFields} genres = {genres}/>
    </div>
        
    <Button style = {{margin: '10px'}} onClick = {handleClick}>Post Genres</Button>
  </div>
);}
export default GenreForm;



