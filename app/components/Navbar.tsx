"use client";

import React from "react";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import styles from "../styles/Navbar.module.css"; // Import your custom styles

const Navbar = () => {
  const menuItems = [
    {
      key: "1",
      label: <a href="#">Option 1</a>,
    },
    {
      key: "2",
      label: <a href="#">Option 2</a>,
    },
    {
      key: "3",
      label: <a href="#">Option 3</a>,
    },
  ];

  const dropdownMenu = <Menu items={menuItems} />;

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Hyperhirerr</div>
      <ul className={styles.menu}>
        <li>채용1</li>
        <li>채용2</li>
        <li>
          <Dropdown overlay={dropdownMenu} trigger={["hover", "click"]}>
            <Button type="text">
              해외 개발자 채용 서비스 <DownOutlined />
            </Button>
          </Dropdown>
        </li>
        <button className={styles.contactButton}>문의하기</button>
      </ul>
      <h2>helloo</h2>
    </nav>
  );
};

export default Navbar;
