import { Geist, Geist_Mono, Rubik, Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"]
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
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
