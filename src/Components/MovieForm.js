import { DownOutlined, UpOutlined } from '@ant-design/icons';
import {Tooltip, Table, Button, Col, Form, Input, Row, Select } from 'antd';
import React, { useState } from 'react';
import './Form.css'
const { Option } = Select;
const AdvancedSearchForm = () => {

  const [fields, setFields ] = useState({
    title: "Uunchai",
    releaseDate: "11 Nov 2022",
    length: 129,
    language: "Hindi",
    ageRating: "U",
    format: "2D/3D",
    poster:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/uunchai-et00335262-1665386678.jpg",
    genre:[
        "Adventure", "Drama", "Family" 
    ],
    cast:[
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

    ],
    description:"Three friends take a trek to the Everest Base Camp which becomes a personal, emotional and spiritual journey while battling their physical limitations and discovering the true meaning of freedom."
  })

  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();

  const getFields = () => {
    const count = expand ? 10 : 6;
    const children =[ 
      <Col span={8}>
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
          <Input value={fields.title} placeholder="Title" onChange={(e)=>{setFields({...fields, title: e.target.value })}}/>
        </Form.Item>
      </Col>
      ,

      <Col span={8}>
        <Form.Item
          name={`releaseDate`}
          label={`Title`}
          rules={[
            {
              required: true,
              message: 'Input something!',
            },
          ]}
        >
          <Input value={fields.title} placeholder="Title" onChange={(e)=>{setFields({...fields, title: e.target.value })}}/>
        </Form.Item>
      </Col>
    ]
    // for (let i = 0; i < count; i++) {
    //   children.push(
    //     <Col span={8} key={i}>
    //       <Form.Item
    //         name={`field-${i}`}
    //         label={`Field ${i}`}
    //         rules={[
    //           {
    //             required: true,
    //             message: 'Input something!',
    //           },
    //         ]}
    //       >
    //         {i % 3 !== 1 ? (
    //           <Input placeholder="placeholder" />
    //         ) : (
    //           <Select defaultValue="2">
    //             <Option value="1">1</Option>
    //             <Option value="2">
    //               longlonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglong
    //             </Option>
    //           </Select>
    //         )}
    //       </Form.Item>
    //     </Col>
    //   );
    // }
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
          <Button type="primary" htmlType="submit">
            Search
          </Button>
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
const MovieForm = () => (
  <div>
    <AdvancedSearchForm />
    <Table columns={columns} dataSource={data} />
  </div>
);
export default MovieForm;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 80,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address 1',
    ellipsis: {
      showTitle: false,
    },
    render: (address) => (
      <Tooltip placement="topLeft" title={address}>
        {address}
      </Tooltip>
    ),
  },
  {
    title: 'Long Column Long Column Long Column',
    dataIndex: 'address',
    key: 'address 2',
    ellipsis: {
      showTitle: false,
    },
    render: (address) => (
      <Tooltip placement="topLeft" title={address}>
        {address}
      </Tooltip>
    ),
  },
  {
    title: 'Long Column Long Column',
    dataIndex: 'address',
    key: 'address 3',
    ellipsis: {
      showTitle: false,
    },
    render: (address) => (
      <Tooltip placement="topLeft" title={address}>
        {address}
      </Tooltip>
    ),
  },
  {
    title: 'Long Column',
    dataIndex: 'address',
    key: 'address 4',
    ellipsis: {
      showTitle: false,
    },
    render: (address) => (
      <Tooltip placement="topLeft" title={address}>
        {address}
      </Tooltip>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 2 Lake Park, London No. 2 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
  },
];