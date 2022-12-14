import { Button, Dropdown, Menu } from "antd";
import React from "react";
import "../resources/css/defaultlayout.css";
import { Link, useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem("vikiresume-user"));
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("vikiresume-user");
    navigate("/login");
  };

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <Link to="/home">Home</Link>,
        },
        {
          key: "2",
          label: <Link to="/profile">Profile</Link>,
        },
        {
          key: "3",
          label: <span onClick={logout}>Logout</span>,
        },
      ]}
    />
  );

  return (
    <div className="layout">
      <div className="header">
        <h1 onClick={() => navigate("/home")} style={{ cursor: "pointer" }}>
          Viki CV
        </h1>
        <Dropdown overlay={menu} placement="bottom">
          <Button icon={<UserOutlined />}>{user.username}</Button>
        </Dropdown>
      </div>
      <div className="content" style={{ overflow: "scroll" }}>
        {props.children}
      </div>
    </div>
  );
}

export default DefaultLayout;
