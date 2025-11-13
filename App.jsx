import React, { useState } from "react";
import { Carousel } from 'antd';
import { Button, Checkbox, Form, Input, InputNumber} from 'antd';
import "./App.css"

export default function App() {
    const [songs, setSongs] = useState([]);

async function fetchData(searchTerm, limit) {
    const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';
    const url = `${baseURL}?q=${searchTerm}&type=track&limit=${limit}`;
    console.log(url)
    const request = await fetch(url);
    const data = await request.json();
    console.log(data);
    setSongs(data);
}


    const onFinish = values => {
  console.log('Success:', values);
  fetchData(values.search_term, values.limit);
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
    const carouselStyles = {
        "width": "640px", 
        "border": "solid 1px #000", 
        "margin": "auto"
    };
    
    function songToJSX(song) {
       return (
        <iframe
    key="1EjQRTG53jsinzk2xlVVJP"
    src={'https://open.spotify.com/embed/track/' + song.id + '?utm_source=generator'}
    width="100%" 
    border="0"
    height="352" 
    frameBorder="0"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
    loading="lazy"></iframe>

       )
    }

    return (
        <section>
            <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Search Term"
      name="search_term"
      rules={[{ required: true, message: 'Input Search Term' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Limit"
      name="limit"
      rules={[{ required: true, message: 'Input Search Limit' }]}
    >
      <InputNumber />
    </Form.Item>

    

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>

        <div style={carouselStyles}>
            <Carousel arrows dotPosition="top">
                { 
                    songs.map(songToJSX)
                }
            </Carousel>
        </div>
        </section>
    );
    
}
