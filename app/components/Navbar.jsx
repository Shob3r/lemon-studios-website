'use client'

import { useState } from "react";
export default function Navbar() {
    return(
        <nav className="fixed bg-black border-b-1 border-white flex flex-auto w-screen h-15 text-center items-center p-5 z-50 shadow-2xl">
            <button className="navbar-button">Projects</button>
            <button className="navbar-button">About</button>
            <button className="navbar-button">Articles</button>
        </nav>
    )
}
