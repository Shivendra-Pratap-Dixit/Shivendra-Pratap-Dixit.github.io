import React from "react";
import "./Projects.css";
import { FaReact } from "react-icons/fa";
import { SiChakraui, SiCss3, SiHtml5 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

function Projects() {
  return (
    <div>
      <div id="projects">
        <h1>Projects</h1>
        <br></br>
        <br></br>
        <div>
          
          <br></br>
          <div data-aos="flip-right" className="project-card">
            <div className="project-image">
              <img
                width="100%"
                height="100%"
                src="https://i.postimg.cc/dtySmDjY/Screenshot-2023-11-05-141600.png"
              />
            </div>

            <div className="project-about">
              <h3 className="project-title">Trendio</h3>
              <p className="project-description">
              Trendio is a web application that offers a wide range of men and women's clothing and accessories.
              </p>
              <div className="project-tech-stack">
                <div>
                  <FaReact />
                </div>
                <div>
                  <SiHtml5 />
                </div>
                <div>
                  <SiJavascript />
                </div>
                <div>
                  <IoLogoNodejs />
                </div>
                <div>
                  <SiExpress />
                </div>
                <div>
                  <SiMongodb />
                </div>
              </div>
              <div className="project-btns">
                <a
                  className="project-deployed-link"
                  href="https://651c286aa4b175366a4b5e5d--lively-alpaca-0e97c3.netlify.app/"
                >
                  {" "}
                  <button>See this Live</button>
                </a>
                <a
                  className="project-github-link"
                  href="https://github.com/suriyasingaravel/handy-string-7765"
                >
                  <button>View Code</button>
                </a>
              </div>
            </div>
            
          </div>

          <div data-aos="flip-right" className="project-card">
            <div className="project-image">
              <img
                width="100%"
                height="100%"
                src="https://i.postimg.cc/hhWs3b1q/Screenshot-2023-11-05-141515.png"
              />
            </div>

            <div className="project-about">
              <h3 className="project-title">Hotel Card</h3>
              <p className="project-description">
              Collaboratively built an online hotel room booking platform with user registration and authentication.
Worked as part of a 4-member team to complete the project in 5 days.
Implemented search and booking features, along with dynamic filtering using HTML, CSS, and JavaScript.
              </p>
              <div className="project-tech-stack">
                <div>
                  <SiCss3 />
                </div>
                <div>
                  <SiHtml5 />
                </div>
                <div>
                  <SiJavascript />
                </div>
              </div>
              <div className="project-btns">
                <a  className="project-deployed-link"
                href="https://beamish-semolina-b586b9.netlify.app/">
                  {" "}
                  <button>See this Live</button>
                </a>
                <a class="project-github-link"
                  href="https://github.com/sudharshan2151/Hotel-card"
                >
                  <button>View Code</button>
                </a>
              </div>
            </div>
          </div>
          <br></br>

          <div data-aos="flip-left" className="project-card">
            <div className="project-image">
              <img
                width="100%"
                height="100%"
                src="https://i.postimg.cc/CK1287vv/Screenshot-2023-11-05-141537.png"
              />
            </div>

            <div className="project-about">
              <h3 className="project-title">KidsLand</h3>
              <p className="project-description">
              Designed and developed an educational web application enabling users to select specific courses for remarkable results.
Implemented user registration, authentication, and created a dynamic landing page using React, Chakra UI, CSS3.
Ensured responsiveness for a seamless user experience.
              </p>
              <div className="project-tech-stack">
                <div>
                  <FaReact />
                </div>
                <div>
                  <SiHtml5 />
                </div>
                <div>
                  <SiJavascript />
                </div>
               <div>
                <SiChakraui/>
               </div>
              </div>
              <div className="project-btns">
                <a className="project-deployed-link"
                href="https://comfy-shortbread-0d644f.netlify.app/">
                  {" "}
                  <button>See this Live</button>
                </a>
                <a  className="project-github-link"
                  href="https://github.com/Shivendra-Pratap-Dixit/consfused-sand-1770"
                >
                  <button>View Code</button>
                </a>
              </div>
            </div>
          </div>
          <br></br>

         
          <div data-aos="flip-left" className="project-card">
            <div className="project-image">
              <img
                width="100%"
                height="100%"
                src="https://i.postimg.cc/sgn63SV5/Screenshot-2023-11-05-141456.png"
              />
            </div>

            <div className="project-about">
              <h3 className="project-title">Anthropologie</h3>
              <p className="project-description">
              Developed an E-commerce platform from scratch, enabling user registration and login.
Implemented CRUD operations for Items, Categories, and Bills.
Designed the front-end user interface using HTML, CSS, and JavaScript.
              </p>
              <div className="project-tech-stack">
                
                <div>
                  <SiHtml5 />
                </div>
                <div>
                  <SiJavascript />
                </div>
                <div>
                  <SiCss3/>
                </div>
              </div>
              <div className="project-btns">
                <a className="project-deployed-link"
                href="https://dreamy-ganache-79276e.netlify.app/">
                  {" "}
                  <button>See this Live</button>
                </a>
                <a className="project-github-link"
                  href="https://github.com/Shivendra-Pratap-Dixit/star-middle-3447"
                >
                  <button>View Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;