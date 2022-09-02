import { Button, Form, Input, message, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../resources/css/authentication.css";
import axios from "axios";

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    setLoading(true);
    try {
      const user = await axios.post("/api/user/login", values);
      setLoading(false);
      message.success("Login successfull.");
      localStorage.setItem("vikiresume-user", JSON.stringify(user.data));
      navigate("/home");
    } catch (err) {
      setLoading(false);
      message.error("Login failed.");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("vikiresume-user")) {
      navigate("/home");
    }
  });

  return (
    <div className="auth-parent">
      {loading && <Spin size="large" />}
      <h1 className="brand">Viki CV</h1>
      <Form layout="vertical" onFinish={onFinish}>
        <h1>Login</h1>
        <hr />
        <Form.Item name="username" label="Username">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input type="password" />
        </Form.Item>
        <div className="d-flex align-items-center justify-content-between">
          <Link to="/register">Click here to Register</Link>
          <Button type="primary" htmlType="submit">
            LOGIN
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Login;
