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


const AdvancedSearchForm = ({fields, setFields, cities}) => {


  const [form] = Form.useForm();

  const getFields = () => {
    const children =[ 
      
      <Col span={8}>
        <Form.Item
          name={`name`}
          label={`Name`}
        >
          <Input style = {{width:'200px'}} value={fields.name} defaultValue={fields.name} placeholder="Cinema Name" onChange={(e)=>{setFields({...fields, name: e.target.value })}}/>
        </Form.Item>
      </Col>
      ,

      <Col span={8}>
        <Form.Item
          name={`address`}
          label={`Address`}
        >
          <Input style = {{width:'350px'}} value={fields.address} placeholder="address" defaultValue={fields.address} onChange={(e)=>{setFields({...fields, address: e.target.value })}}/>
        </Form.Item>
      </Col>
      ,
      <Col span={12}>
        <Form.Item
          name={`city`}
          label={`City`}
        >
          <Select
            allowClear style={{ width: '350px' }} 
            placeholder="Select city" 
            onChange={(e)=>{setFields({...fields, cityId: e})}} options={cities}
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


const TheaterForm = () =>{
  const [fields, setFields ] = useState({
    name: "",
    address: "",
    cityId:0
  })

  const [cities, setCities ] = useState([{value:1, label:"Delhi"}, {value:3, label:"Noida"}, {value:2, label:"Mumbai"}] )

  useEffect(() => {
    const fetchData = async()=>{
    try{
      const response = await axios.get("/city")
      const data = response.data;
      console.log("Cities Data " ,data);
      // .then(response => response.json())
      setCities(data.map((city)=>{return {value:city.cityId, label:city.name}}))
    }
    catch(err){
      alert("Failed")
    }
  }
  fetchData();
  }, []);


  function handleClick() {
    const fetchData = async()=>{
      try{
        const response = await axios.post("/theater", fields)
        // const data = response.data;
        // console.log("Theater Data " ,response);
        if(response.status === 200){
            alert(response.data)
        }
        // .then(response => response.json())
      }
      catch(err){
        alert("Failed")
      }
    }
    fetchData();

  }

  return (
  <div>
    <div>
        <AdvancedSearchForm fields = {fields} setFields = {setFields} cities = {cities}/>
    </div>
        
    <Button style = {{margin: '10px'}} onClick = {handleClick}>Post Theater</Button>
  </div>
);}
export default TheaterForm;



