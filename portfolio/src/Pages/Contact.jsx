import "../css/Contact.css"
import { Link } from "react-router-dom"
import { GrLinkedin } from 'react-icons/gr'
import { FaGithub, FaTelegramPlane } from "react-icons/fa"
import { SiGmail } from 'react-icons/si'

export function Contact() {
    return (
        <div className="contact_main">
            <div className="contact_main_heading">
                <p>
                    Drop in you details
                </p>
                <FaTelegramPlane size={25} />
            </div>
            <div className="contact_form_ext">
                <form className="contact_form">
                    <input type="text" placeholder="Enter name" />
                    <input type="text" placeholder="Enter mail" />
                    <textarea type="text" placeholder="short description"></textarea>
                    <input type='submit' name="Submit" />
                </form>
            </div>

            <hr />

            <div className="contact_icons_div">
                <p className="contact_icons_txt">OR</p>
                <div className="contact_icons">
                    <a href={"https://www.linkedin.com/in/shivendra-pratap-dixit"} target={"_blank"} rel="noreferrer" >
                        <GrLinkedin size={30} />
                    </a>
                    <span></span>
                    <a href={"https://github.com/Shivendra-Pratap-Dixit"} target={"_blank"}  rel="noreferrer">
                        <FaGithub size={30} />
                    </a>
                    <span></span>
                    <Link onClick={(e) => { window.location.href = 'mailto:cvendradixit@gmail.com'; }}>
                        <SiGmail size={30} />
                    </Link>
                </div>
            </div>
        </div>
    )
}