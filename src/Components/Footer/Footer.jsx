import React from "react";
import "./Footer.css";
import { BsCpuFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-main">
      <div>
        <a href="https://github.com/Shivendra-Pratap-Dixit">
          <span className="footer-svg">
            <BsCpuFill />
          </span>
          <div>Designed & Built by Shivendra</div>
        </a>
      </div>
      <div>
        <span className="footer-svg">
          <FaReact />
        </span>
        <div>Built Using ReactJs</div>
      </div>
    </div>
  );
}

export default Footer;