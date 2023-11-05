import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { HiHome } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaTools } from "react-icons/fa";
import {AiTwotoneSetting} from "react-icons/ai";
import {MdContacts} from "react-icons/md";


function Navbar() {
  const [hameburger, setHamberger] = useState("hameburger-open-icon-invisible");

  const handleHamburgToggle = (e) => {
    if (hameburger === "hameburger-open-icon-invisible") {
      setHamberger("nav-all-opt");
    } else {
      setHamberger("hameburger-open-icon-invisible");
    }
  };

  return (
    <header id="nav-menu">
      <div id="nav-menu" className="nav-link home">
        <div>
          <a className="nav-head" href="#">
            SHIVENDRA PRATAP DIXIT
          </a>
        </div>

        <a onClick={handleHamburgToggle} className="hameburger-open-icon">
          {hameburger == "nav-all-opt" ? (
            <CgClose size="35px" />
          ) : (
            <FiMenu size="35px" />
          )}
        </a>
        <div id="thirdCircle" className={hameburger}>
          <a
            onClick={() => {
              setHamberger("hameburger-open-icon-invisible");
            }}
            className="nav-link home"
            href="/#home"
          >
            <span><HiHome/> Home</span>
          </a>
          <a
            onClick={() => {
              setHamberger("hameburger-open-icon-invisible");
            }}
            className="nav-link about"
            href="/#about"
          >
           <span><BsFillPersonLinesFill/> About</span>
          </a>
          <a
            onClick={() => {
              setHamberger("hameburger-open-icon-invisible");
            }}
            className="nav-link skills"
            href="/#skills"
          >
           <span><FaTools/> Skills </span>
          </a>
          <a
            onClick={() => {
              setHamberger("hameburger-open-icon-invisible");
            }}
            className="nav-link projects"
            href="/#projects"
          >
           <span><AiTwotoneSetting/> Projects</span>
          </a>
          <a
            onClick={() => {
              setHamberger("hameburger-open-icon-invisible");
            }}
            className="nav-link contact"
            href="/#contact"
          >
           <span><MdContacts/> Contact</span>
          </a>
          <button>
            <a
              onClick={() => {
                setHamberger("hameburger-open-icon-invisible")
              }}
              className="nav-link resume"
              id="resume-button-1"
              href="https://drive.google.com/file/d/1POkqBmW1WQaBsYnu2M13NrlF93tupr3S/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              download="Shivendra-Pratap-Dixit.pdf"
            >
              Resume
            </a>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;