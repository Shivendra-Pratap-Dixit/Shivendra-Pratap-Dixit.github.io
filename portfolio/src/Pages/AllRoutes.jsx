import React from "react"
import { Routes } from "react-router"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { Skills } from "./Skills"
import { Projects } from "./Projects"
import { Contact } from "./Contact"

export function AllRoutes() {
    return (

        <Routes>
            <Route path="/" element={< Home />} />
            <Route path="/projects" element={< Projects />} />
            <Route path="/skills" element={< Skills />} />
            <Route path="/contact" element={< Contact />} />
        </Routes>

    )
}