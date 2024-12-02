"use client";

import React from "react";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css";
import TextSlider from "./TextSlider";
import Footer from "./Footer";
import styles from "../styles/Navbar.module.css"; // Custom styles

const HomeSection = () => {
  // Dropdown menu items for Ant Design
  const menuItems = [
    { key: "1", label: <a href="#">Option 1</a> },
    { key: "2", label: <a href="#">Option 2</a> },
    { key: "3", label: <a href="#">Option 3</a> },
  ];

  const dropdownMenu = <Menu items={menuItems} />;

  return (
    <div>
      {/* Header Section */}
      <header className={`${styles.navbar} bg-light py-3`}>
        <div className="container d-flex justify-content-between align-items-center">
          {/* Logo */}
          <div className={styles.logo}>Hyperhire</div>

          {/* Navigation Menu */}
          <ul className={`${styles.menu} d-flex align-items-center m-0`}>
            <li className="mx-3">채용1</li>
            <li className="mx-3">채용2</li>
            <li className="mx-3">
              {/* Ant Design Dropdown */}
              <Dropdown overlay={dropdownMenu} trigger={["hover", "click"]}>
                <Button type="text" className={styles.dropdownButton}>
                  해외 개발자 채용 서비스 <DownOutlined />
                </Button>
              </Dropdown>
            </li>
            <li>
              <button className={`${styles.contactButton} btn btn-primary`}>
                문의하기
              </button>
            </li>
          </ul>
        </div>
      </header>

      {/* Main Content */}
      <div className="mainContainer">
        {/* Example Dropdown using Bootstrap */}
        <div className="container py-4">
          <div className="d-flex justify-content-between align-items-center">
            {/* Logo */}
            <div>
              <h4 className="m-0">Logo</h4>
            </div>

            {/* Bootstrap Dropdown */}
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Bootstrap Dropdown
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>

            {/* Button */}
            <div>
              <button className="btn btn-primary">Primary Button</button>
            </div>
          </div>
        </div>

        {/* Text Slider Component */}
        <TextSlider />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default HomeSection;
