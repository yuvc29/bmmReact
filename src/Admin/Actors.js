import { Avatar, Button, Checkbox, Form, Input } from 'antd';
import React, {useState} from 'react';
import axios from 'axios'

const entries = {
  firstName:"",
  lastName:"",
  image:""
}
const Actors = () => {
  const [fields, setFields] = useState(entries)

  const submit = ()=>{
    const fetchData = async()=>{
      try{
        const response = await axios.post("http://localhost:8080/actor", fields)
        if(response.status === 200){
          alert("Actor Added")
          window.location.reload();
        }
        // .then(response => response.json())
      }
      catch(err){
        alert(err.message)
      }
    }
    fetchData();
  }
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
  <div style = {{margin:'20px'}}>
    <Form
      name="basic"
      labelCol={{
        span: 2,
      }}
      wrapperCol={{
        span: 12,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="First Name"
        name="firstName"
      >
      <Input style = {{width:'550px'}} value={fields.firstName} placeholder="first name" onChange={(e)=>{setFields({...fields, firstName: e.target.value })}}/>
      </Form.Item>

      <Form.Item
        label="Last Name"
        name="lastName"
      >
      <Input style = {{width:'550px'}} value={fields.lastName} placeholder="last name" onChange={(e)=>{setFields({...fields, lastName: e.target.value })}}/>
      </Form.Item>

      <Form.Item
        label="Image Link"
        name="image"
      >
      <Input style = {{width:'550px'}} value={fields.image} placeholder="Actor's image link"  onChange={(e)=>{setFields({...fields, image: e.target.value });}}/>
      </Form.Item>
      {
        fields.image &&
        (
          <Form.Item label = "Fetched Image">
            <Avatar src = {fields.image} />
          </Form.Item>
        )
      }
      <Form.Item
        wrapperCol={{
          offset: 11,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={submit}>
          Add Actor
        </Button>
      </Form.Item>
    </Form>
  </div>
  );
};
export default Actors;