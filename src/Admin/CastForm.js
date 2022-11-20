// import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Select } from 'antd';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './Form.css'
// import Genres from './Genres'
// import Actors from './Actors'
// import ShowForm from './ShowForm';
// import Theaters from './Theaters';
// const { Option } = Select;


const AdvancedSearchForm = ({fields, setFields, actors}) => {


  const [form] = Form.useForm();

  const getFields = () => {
    const children =[ 
      
      <Col span={24}>
        <Form.Item
          name={`cast`}
          label={`Cast`}
        >
            <Select
                mode="multiple"
                allowClear
                style={{
                    width: '400px',
                }}
                placeholder="Select Actors"
                onChange={(value)=>{setFields({...fields, actorIds:value})} }
                options={actors}
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


const CastForm = ({movieId}) =>{
  const [fields, setFields ] = useState({
    movieId:movieId,
    actorIds:[]
  })

  const [actors,setActors ]= useState([{value:1, label:"Amitabh Bachchan"}, {value:2, label:"Sharukh"}, {value:3, label:"Salman"}])

  useEffect(() => {
    const fetchData = async()=>{
    try{
      const response = await axios.get("http://localhost:8080/actor")
      const data = response.data;
      console.log("Cast Data " ,data);
      // .then(response => response.json())
      const fetched = data.map((actor)=>{return {value:actor.actorId, label:(actor.firstName + " "+actor.lastName) }})
      setActors(fetched)
    }
    catch(err){
      alert("Failed to get Actors")
    }
  }
  fetchData();
  }, []);

  function handleClick() {
    let idString = ""
    fields.actorIds.forEach((id)=>{
        idString += id.toString()+','
    })
    const fetchData = async()=>{
      try{
        const response = await axios.post(`http://localhost:8080/cast/movie?movieId=${movieId}&actorIds=${idString}`)
        if(response.status === 200){
          console.log("Cast Post Data " ,response.data);
          alert("Cast added")
        }
        // .then(response => response.json())
      }
      catch(err){
        alert(err.message)
      }
    }
    fetchData();

  }


  return (
  <div>
    <div>
        <AdvancedSearchForm fields = {fields} setFields = {setFields} actors = {actors}/>
    </div>
        
    <Button style = {{margin: '10px'}} onClick = {handleClick}>Post Cast</Button>
  </div>
);}
export default CastForm;



