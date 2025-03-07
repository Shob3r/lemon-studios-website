'use client'

export default function Navbar() {
    return(
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-black border-b border-l border-r rounded-b-2xl drop-shadow-xl shadow-md shadow-yellow-300/50 border-yellow-300 flex justify-center items-center h-15 p-2 z-50 w-2/5">
        <button className="navbar-button">Projects</button>
        <button className="navbar-button">About</button>
        <button className="navbar-button">Articles</button>
    </nav>
    )
}
