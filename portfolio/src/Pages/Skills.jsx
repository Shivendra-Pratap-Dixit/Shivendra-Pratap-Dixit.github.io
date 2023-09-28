import { SiChakraui, SiMongodb, SiCplusplus, SiPython, SiExpress } from 'react-icons/si';
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript } from 'react-icons/io'
import { DiJava } from 'react-icons/di'
import "../css/Skills.css"


export function Skills() {

    let icolor = "black"
    return (
        <div className='skills_main'>
            <div className='skills_main_frontend'>
                <p className='skills_main_frontend_txt'>Frontend and UI - </p>
                <div className='skills_main_frontend_icons'>
                    <div>
                        <p> React</p>
                        <FaReact size={30} color={icolor} />
                    </div>
                    <div>
                        <p> HTML & CSS </p>
                        <div>
                            <IoLogoHtml5 size={30} color={icolor} />
                            <IoLogoCss3 size={30} color={icolor} />
                        </div>
                    </div>
                    <div>
                        <p>Chakra UI</p>
                        <SiChakraui size={30} color={icolor} />
                    </div>
                </div>
            </div>


            <div className='skills_main_backend'>

                <div className='skills_main_backend_icons'>
                    <div>
                        <p>Express/Node</p>
                        <SiExpress size={30} color={icolor} />
                    </div>
                    <div>
                        <p>Node</p>
                        <FaNodeJs size={30} color={icolor} />
                    </div>
                    <div>
                        <p>MongoDb</p>
                        <SiMongodb size={30} color={icolor} />
                    </div>
                </div>
                <p className='skills_main_backend_txt'> - Backend </p>
            </div>

            <div className='skills_main_lang'>
                <p className='skills_main_lang_txt'>Languages - </p>
                <div className='skills_main_lang_icons'>
                    <div>
                        <p>Javascript</p>
                        <IoLogoJavascript size={30} color={icolor} />
                    </div>
                    <div>
                        <p>Java</p>
                        <DiJava size={30} color={icolor} />
                    </div>
                    <div>
                        <p>Python</p>
                        <SiPython size={30} color={icolor} />
                    </div>
                    <div>
                        <p>C</p>
                        <SiCplusplus size={30} color={icolor} />
                    </div>
                </div>
            </div>
        </div >
    )
}

// js, reactjs ,express js, HTML and CSS, chakra ui,java, python, C
// frontend - React Js, Html and CSS , Chakra UI
// backend - Express js, mongodb, mongoose , SQL
// languages - JS, Java, Python, C