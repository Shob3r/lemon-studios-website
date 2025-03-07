import Image from "next/image";
import { Josefin_Sans } from "next/font/google";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"]
});

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
        <Image
          className="dark m-5 justify-self-center"
          src="/logo.svg"
          alt="Next.js logo"
          width={256}
          height={256}
          priority />
        <h1 className={`${josefinSans.className} text-5xl`}>Lemon Studios</h1>
        <p className="mb-50 text-xl">We make software and video games (sometimes)</p>
        <h1 className="text-3xl">Our Works:</h1>
        <div>
          
        </div>
      </main>
    </div>
  );
}
