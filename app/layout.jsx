import { Geist, Geist_Mono, Rubik } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import About from "./about";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"]
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lemon Studios"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} ${geistMono.variable} antialiased`}>
        <nav className="fixed bg-black border-b-1  border-white flex flex-auto w-screen h-15 text-center items-center p-5 z-50 shadow-2xl">
          <button className="navbar-button">Projects</button>
          <button className="navbar-button">About</button>
          <button className="navbar-button">Articles</button>
        </nav>
        {children}
      </body>
    </html>
  );
}
