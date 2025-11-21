import React from "react";
import { Form, Input, InputNumber, Button } from "antd";

export default function SongForm({ onSearch }) {
  const onFinish = (values) => {
    onSearch(values.search_term, values.limit);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Search Term"
        name="search_term"
        rules={[{ required: true, message: "Input Search Term" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Limit"
        name="limit"
        rules={[{ required: true, message: "Input Search Limit" }]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
