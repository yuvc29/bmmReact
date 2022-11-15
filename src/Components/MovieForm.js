import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Select } from 'antd';
import React, { useState } from 'react';
import './Form.css'
import axios from 'axios'
import GenreForm from './GenreForm';
// import Genres from './Genres'
// import Actors from './Actors';

import CastForm from './CastForm';
const { Option } = Select;



const AdvancedSearchForm = ({fields, setFields}) => {


  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();

  const getFields = () => {
    const count = expand ? 10 : 6;
    const children =[ 
      
      <Col span={16}>
        <Form.Item
          name={`title`}
          label={`Title`}
          rules={[
            {
              required: true,
              message: 'Input something!',
            },
          ]}
        >
          <Input style = {{width:'300px'}}value={fields.title} defaultValue={fields.title} placeholder="title" onChange={(e)=>{setFields({...fields, title: e.target.value })}}/>
        </Form.Item>
      </Col>
      ,

      <Col span={8}>
        <Form.Item
          name={`releaseDate`}
          label={`Release Date`}
        >
          <Input value={fields.releaseDate} placeholder="DD/MM/YYYY" defaultValue={fields.releaseDate} onChange={(e)=>{setFields({...fields, releaseDate: e.target.value })}}/>
        </Form.Item>
      </Col>
      ,
      <Col span={8}>
        <Form.Item
          name={`expiryDate`}
          label={`Expiry Date`}
        >
          <Input value={fields.expiryDate} placeholder="DD/MM/YYYY" defaultValue={fields.expiryDate} onChange={(e)=>{setFields({...fields, expiryDate: e.target.value })}}/>
        </Form.Item>
      </Col>
      ,
      <Col span={8}>
        <Form.Item
          name={`length`}
          label={`Movie Length`}
        >
          <Input value={fields.length} placeholder="in minutes" defaultValue={fields.length} onChange={(e)=>{setFields({...fields, length: e.target.value })}}/>
        </Form.Item>
      </Col>,
      <Col span={8}>
        <Form.Item
          name={`language`}
          label={`Language`}
        >
          <Select defaultValue= {fields.language} onChange={(e)=>{setFields({...fields, language: e})}}>
            <Option value="Hindi">Hindi</Option>
            <Option value="English">English</Option>
            <Option value="Bengali">Bengali</Option>
            <Option value="Tamil">Tamil</Option>
          </Select>
        </Form.Item>
      </Col>,
      <Col span={8}>
        <Form.Item
          name={`ageRating`}
          label={`Age Rating`}
        >
          <Select defaultValue={fields.ageRating} onChange={(e)=>{setFields({...fields, ageRating: e})}}>
            <Option value="U">U</Option>
            <Option value="U/A">U/A</Option>
            <Option value="A">A</Option>
          </Select>
        </Form.Item>
      </Col>,
      <Col span={8}>
        <Form.Item
          name={`format`}
          label={`Visual Format`}
        >
          <Select defaultValue={fields.format} onChange={(e)=>{setFields({...fields, format: e})}}>
            <Option value="2D">2D</Option>
            <Option value="3D">3D</Option>
            <Option value="2D/3D">2D/3D</Option>
          </Select>
        </Form.Item>
      </Col>
      ,

      <Col span={8}>
        <Form.Item
          name={`rating`}
          label={`IMDB Rating`}
        >
          <Input value={fields.rating} placeholder="*/5" defaultValue={fields.rating} onChange={(e)=>{setFields({...fields, rating: e.target.value })}}/>
        </Form.Item>
      </Col>
    ,
        <Col span={12}>
          <Form.Item
            name={`poster`}
            label={`Poster Link`}
          >
            <Input value={fields.poster} defaultValue={fields.poster} placeholder="link" onChange={(e)=>{setFields({...fields, poster: e.target.value })}}/>
          </Form.Item>
        </Col>,
        // <Col span={12}>
        //   <Actors fields = {fields} setFields = {setFields}/>
        // </Col>,
        <Col span={12}>
          <Form.Item
            name={`trailer`}
            label={`Trailer Link`}
          >
            <Input value={fields.trailer} defaultValue={fields.trailer} placeholder="link" onChange={(e)=>{setFields({...fields, trailer: e.target.value })}}/>
          </Form.Item>
        </Col>,
        <Col span={12}>
          <Form.Item
            name={`description`}
            label={`Description`}
          >
            <Input.TextArea style = {{width:'450px', height: '100px'}} defaultValue={fields.description} value={fields.poster} placeholder="Description" onChange={(e)=>{setFields({...fields, poster: e.target.value })}}/>
          </Form.Item>
        </Col>
        // <Col span={12}>
        //   <Form.Item
        //     name={`genre`}
        //     label={`Genres`}
        //   >
        //     <Select
        //       defaultValue={fields.genre}
        //       mode="multiple" allowClear style={{ width: '450px', }} 
        //       placeholder="Please select" 
        //       onChange={(e)=>{setFields({...fields, genre: e.target.value})}} options={Genres}
        //     />
        //   </Form.Item>
        // </Col>,
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
          <a
            style={{
              fontSize: 12,
            }}
            onClick={() => {
              setExpand(!expand);
            }}
          >
            {expand ? <UpOutlined /> : <DownOutlined />} Collapse
          </a>
        </Col>
      </Row>
    </Form>
  );
};
const MovieForm = () =>{
  const [movieId, setMovieId] = useState(0)
  const [fields, setFields ] = useState({

    title: "Uunchai",
    releaseDate: "03/11/2022",
    expiryDate:"10/12/2022",
    length: 129,
    trailer: "https://www.youtube.com/watch?v=rerwio14Fes",
    language: "Hindi",
    ageRating: "U",
    rating:4,
    format: "2D/3D",
    poster:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/uunchai-et00335262-1665386678.jpg",
    description:"Three friends take a trek to the Everest Base Camp which becomes a personal, emotional and spiritual journey while battling their physical limitations and discovering the true meaning of freedom."
  })


const postMovie = ()=>{
  const fetchData = async()=>{
    try{
      const response = await axios.post("http://localhost:8080/movie", fields)
      const data = response.data;
      setMovieId(data.movieId)
      // .then(response => response.json())
    }
    catch(err){
      alert("Failed")
    }
  }
  fetchData();

  // try{
  //   axios
  //   .post('http://localhost/8080/movie', fields)
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //     // if(data.status === 200){
  //       // setMovieId(data.movieId)
  //     //   alert("Theater added")
  //     // }
  //     alert("Movie added")
  //   })
  // }
  // catch(err){
  //   alert("Failed")
  // }
}

  
  return (
  <div>
    <AdvancedSearchForm fields = {fields} setFields = {setFields}/> 
    <Button style = {{margin: '10px'}} onClick={postMovie}>Post Movie</Button>
    {/* <Actors fields = {cast} setFields = {setCast}/> */}
      {/* <CastForm movieId = {movieId}/>
      <GenreForm movieId= {movieId}/> */}
  </div>
);}
export default MovieForm;



