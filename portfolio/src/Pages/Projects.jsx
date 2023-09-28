import "../css/Projects.css"
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export function Projects() {
    return (
        <div className="projects_main">
           
            <div className="projects_row1">

                <div className="projects_individual_project1">
                    <div>
                        <img src={"https://images.ctfassets.net/5de70he6op10/2qNPYihpSMixD9hklRMIOH/5d4ac88b65d7929f9fc667f114bd4593/LS_M1a-1__1_.jpg?w=1784&q=80&fm=webp"} alt="Anthropologie" />
                    </div>
                    <div>
                        <h3>Anthropologie</h3>
                        <div>
                            <button>
                                <a href="https://dreamy-ganache-79276e.netlify.app/" target="_blank" className="remove_link_color" >Live</a>
                            </button>
                            <a href="https://github.com/Shivendra-Pratap-Dixit/star-middle-3447" target="_blank" ><FaGithub size={35} /></a>
                        </div>

                    </div>
                    <p>
                    Developed a clone of Anthropologie e-commerce platform from scratch, enabling user registration and login.
                     where users can search products, and place orders for the same.
                    </p>
                </div>

                <div className="projects_individual_project2">
                    <div>
                        <img src={"https://beamish-semolina-b586b9.netlify.app/images/h6.jpg"} alt="Hotel Card"></img>
                    </div>
                    <div>
                        <h3>Hotel Card</h3>
                        <div>
                            <button>
                                <a href="https://beamish-semolina-b586b9.netlify.app/" target="_blank" className="remove_link_color" >Live</a>
                            </button>
                            <a href="https://github.com/sudharshan2151/Hotel-card" target="_blank" ><FaGithub size={35} /></a>
                        </div>
                    </div>
                    <p>
                        Hotel provides hotel room, Hotels and PG properties on rent across major cities in the country. These properties exhibit professional standards in hygine, maintainence and come furnished with myriad amneties.
                    </p>
                </div>

                <div className="projects_individual_project3">
                    <div>
                        <img src={"https://comfy-shortbread-0d644f.netlify.app/images/About.jpg"} alt="Kids Land"></img>
                    </div>
                    <div>
                        <h3>Kids Land</h3>
                        <div>
                            <button>
                                <a href="https://comfy-shortbread-0d644f.netlify.app/" target="_blank" className="remove_link_color" >Live</a>
                            </button>
                            <a href="https://github.com/Shivendra-Pratap-Dixit/consfused-sand-1770" target="_blank"><FaGithub size={35} /></a>
                        </div>
                    </div>
                    <p>
                    Designed and developed an educational web application enabling users to select specific courses for remarkable results.
Implemented user registration, authentication, and created a dynamic landing page using React, Chakra UI, CSS3.
                    </p>
                </div>

            </div>
        </div >
    )
}