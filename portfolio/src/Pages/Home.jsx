import React, { useEffect, useState } from "react"
import "../css/Home.css"
import { Link } from "react-router-dom"
// import pdf from "../extra/Aman_Singh_Resume.pdf"
import { useSpring, animated } from "@react-spring/web"

export function Home() {

    let [landingText, setLandingText] = useState("")
    let [aspiring, setAspiring] = useState("Aspiring")
    let [full, setFull] = useState("Full")
    let [stack, setStack] = useState("Stack")
    let [developer, setDeveloper] = useState("Developer")
    let [index, setIndex] = useState(0)
    const first = "aspiring"

    const springs = useSpring({
        from: { x: 0 },
        to: { x: 100 },
    })

    useEffect(() => {

    }, [])

    return (
        <div className="main">
            <div>
                {/* <div className="circle"></div> */}
                <animated.div
                    style={{
                        width: 80,
                        height: 80,
                        background: '#ff6d6d',
                        borderRadius: 8,
                        ...springs,
                    }}
                />
            </div>

            <div className="mid_container">
                <div className="mid_container_txt">
                    <div className="intro_txt">
                        <h1>Hello folks,I Am Shivendra-Pratap-Dixit
                            <br></br>
                            An <span className="txt_aspiring"> {aspiring} </span>
                            <span className="txt_fullstack"> {full} {stack} </span>
                            <span className="txt_developer">{developer}.</span>
                        </h1>

                    </div>

                </div>

                <div className="vertical_break">

                </div>

                <div className="image_div">
                    <img className="image" src="https://img.freepik.com/premium-photo/cartoon-boy-giving-thumbs-up-with-both-hands-generative-ai_958098-11073.jpg" alt="me" />
                </div>
            </div>

            <div className="resume_div">
                <button className="resume_div_btn">
                    <a className="resume_div_btn_link" href={"https://www.pdfbooksworld.com/The-Great-Gatsby-by-Francis-Scott-Fitzgerald"} download={"https://www.pdfbooksworld.com/The-Great-Gatsby-by-Francis-Scott-Fitzgerald"}>
                        Download Resume
                    </a>
                </button>
            </div>
        </div>
    )
}