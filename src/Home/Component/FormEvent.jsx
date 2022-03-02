import React, { useState } from 'react'
import { Form, Input, DatePicker, Button, message } from 'antd'
import './FormEvent.scss'
import axios from 'axios'

const FormEvent = () => {

  const [data, setData] = useState({
    title: "",
    location: "",
    participant: "",
    date: "",
    note: "",
  });


  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  }

  const handleSubmit = () => {
    const userData = {
      title: data.title,
      location: data.location,
      participant: data.participant,
      date: data.date,
      note: data.note,
    };

    axios.post('http://localhost:3004/data', userData).then(res => { console.log(res.data) }).then(() => {
      handlesucceed();
    });
  };

  const handlesucceed = () => {
    message.info('success');
  }


  return (
    <div className='form'>
      <h1>Form new Event</h1>
      <Form labelCol={{
        span: 4,
      }}
        wrapperCol={{
          span: 20,
        }}
        onFinish={handleSubmit}
      >
        <Form.Item label='Title' name="title" rules={[
          {
            required: true,
            message: 'Please input your title!',
          },
        ]}>
          <Input type='text' name='title' value={data.title} onChange={handleChange} />
        </Form.Item>
        <Form.Item label='Location' name="location" rules={[
          {
            required: true,
            message: 'Please input your location!',
          },
        ]}>
          <Input type='text' name='location' value={data.location} onChange={handleChange} />
        </Form.Item>
        <Form.Item label='Participant' name="participant" rules={[
          {
            required: true,
            message: 'Please input your participant!',
          },
        ]}>
          <Input type='text' name='participant' value={data.participant} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Date" name="date" rules={[
          {
            required: true,
            message: 'Please input your date!',
          },
        ]}>
          <DatePicker name='date' onChange={(date, dateString) => handleChange({ target: { name: 'date', value: dateString } })} />
        </Form.Item>
        <Form.Item label="Note" name="note" rules={[
          {
            required: true,
            message: 'Please input your note!',
          },
        ]}>
          <Input.TextArea name='note' value={data.note} onChange={handleChange} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" id='btn'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default FormEvent