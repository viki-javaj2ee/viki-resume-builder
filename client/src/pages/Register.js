import { Button, Form, Input, message, Spin } from "antd";
import React, { useEffect, useState } from "react";
import "../resources/css/authentication.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    setLoading(true);
    try {
      await axios.post("/api/user/register", values);
      setLoading(false);
      message.success("Registration successfull.");
    } catch (err) {
      setLoading(false);
      message.error("Registration failed.");
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
      <Form layout="vertical" onFinish={onFinish}>
        <h1>Register</h1>
        <hr />
        <Form.Item name="username" label="Username">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input type="password" />
        </Form.Item>
        <Form.Item name="cpassword" label="Confirm Password">
          <Input type="password" />
        </Form.Item>
        <div className="d-flex align-items-center justify-content-between">
          <Link to="/login">Click here to Login</Link>
          <Button type="primary" htmlType="submit">
            REGISTER
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Register;
