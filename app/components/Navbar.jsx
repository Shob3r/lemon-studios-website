'use client'

export default function Navbar() {
    return(
    <nav className="top-0 left-1/2 z-50 fixed flex justify-center items-center bg-black shadow-lg p-2 border-yellow-500 border-r border-b border-l w-full sm:w-2/5 h-15 -translate-x-1/2 rounnded-b-2xl transform">
        <button className="navbar-button">Projects</button>
        <button className="navbar-button">About</button>
        <button className="navbar-button">Articles</button>
    </nav>
    )
}
