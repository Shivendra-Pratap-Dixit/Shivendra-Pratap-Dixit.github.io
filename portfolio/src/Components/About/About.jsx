import React from "react";
import "./About.css";
import ParticlesBg from 'particles-bg'
import { FaRegHandPointRight } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';


function About() {
  return (
    <div>
     <ParticlesBg type="square" color="black"  bg={true} />
      <div id="about" className="about section">
        <h1>About me</h1>
        <br></br>
        <br></br>
        <div className="about_me">
          <div className="home-img-parent">
            <img
            data-aos="flip-up"
              className="home-img"
              style={{ width: "100%", height: "100%", borderRadius: "50%" }}
              src="https://i.postimg.cc/PqNFXt2Q/My-Pic.png"
            />
          </div>
          <div data-aos="flip-down" className="my_introduction">
            <p id="user-detail-intro">
              Hi Everyone, I am <span style={{color:"#40e48f"}}>Shivendra Pratap Dixit</span> from Lucknow, Uttar Pradesh. I
              have completed my Higher Secondary Education from Lucknow Christian Inter College 
              , Uttar Pradesh. As a Full Stack Web
              Developer, I possess a broad range of technical skills, including
              proficiency in HTML, CSS, JavaScript, and Node.js. I have a deep
              understanding of database design, web services, and API
              integration, and I am committed to staying up-to-date with the
              latest trends and technologies in the field.
            </p>
            <br></br>

            <p>Some of my interests apart form Coding :</p>

            <p>
              {" "}
              <FaRegHandPointRight color="ecdcc1" /> eSports Enthusiast
            </p>
            <p>
              {" "}
              <FaRegHandPointRight color="ecdcc1" /> Travelling
            </p>
            <p>
              {" "}
              <FaRegHandPointRight color="ecdcc1" /> Reading Adventure stories
            </p>
          </div>
        </div>
        <div id="resume-link-2">
          <button>
            <a
              id="resume-button-2"
              href="https://drive.google.com/file/d/1RJStHK_6u1ZoO2SNEbvUQLTghljqg_O2/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              download="SHIVENDRA-DIXIT-RESUME.pdf"
            >
              Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;