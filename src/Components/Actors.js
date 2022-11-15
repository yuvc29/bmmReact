import { SmileOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Form, Input, InputNumber, Modal, Typography } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import './Actors.css'
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
// reset form fields when modal is form, closed
const useResetFormOnCloseModal = ({ form, open }) => {
  const prevOpenRef = useRef();
  useEffect(() => {
    prevOpenRef.current = open;
  }, [open]);
  const prevOpen = prevOpenRef.current;
  useEffect(() => {
    if (!open && prevOpen) {
      form.resetFields();
    }
  }, [form, prevOpen, open]);
};


const ModalForm = ({ open, onCancel }) => {
  const [form] = Form.useForm();
  useResetFormOnCloseModal({
    form,
    open,
  });
  const onOk = () => {
    form.submit();
  };
  return (
    <Modal title="Basic Drawer" open={open} onOk={onOk} onCancel={onCancel}>
      <Form form={form} layout="vertical" name="userForm">
        <Form.Item
          name="firstName"
          label="First Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="lastName"
          label="Last Name"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="image"
          label="Image link"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
const Actors = () => {
  const [fields, setFields] = useState({
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
  ]})
  const [open, setOpen] = useState(false);
  const showUserModal = () => {
    setOpen(true);
  };
  const hideUserModal = () => {
    setOpen(false);
  };
  const onFinish = (values) => {
    console.log('Finish:', values);
  };
  return (
    <Form.Provider
      onFormFinish={(name, { values, forms }) => {
        if (name === 'userForm') {
          const { basicForm } = forms;
          const users = basicForm.getFieldValue('users') || [];
          basicForm.setFieldsValue({
            users: [...users, values],
          });
          setFields({...fields, cast:users})
          setOpen(false);

        }
      }}
    >
      <Form {...layout} name="basicForm" onFinish={onFinish}>
        <Form.Item
          label="Cast"
          shouldUpdate={(prevValues, curValues) => prevValues.users !== curValues.users}
        >
          {({ getFieldValue }) => {
            const users = getFieldValue('cast') || fields.cast;
            return users.length ? (
              <ul>
                {users.map((user, index) => (
                  <li key={index} className="user" style = {{width:'200px'}}>
                    <Avatar src = {user.image}/>
                    {user.firstName + " " +user.lastName}
                  </li>
                ))}
              </ul>
            ) : (
              <Typography.Text className="ant-form-text" type="secondary">
                No Actors
              </Typography.Text>
            );
          }}
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button
            htmlType="button"
            style={{
              margin: '0 8px',
            }}
            onClick={showUserModal}
          >
            Add Actor
          </Button>
        </Form.Item>
      </Form>

      <ModalForm open={open} onCancel={hideUserModal} />
    </Form.Provider>
  );
};
export default Actors;