import Image from "next/image";

export default function Home() {
  return (
    <div className="justify-items-center items-center gap-16 grid grid-rows-[20px_1fr_20px] p-8 pb-20 min-h-screen">
      <main className="flex flex-col items-center sm:items-center gap-8 row-start-2">
        <Image
          className="justify-self-center m-5 dark"
          src="/logo.svg"
          alt="Lemon Studios Logo"
          width={256}
          height={256}
          priority />
        <h1 className={`title text-5xl`}>Lemon Studios</h1>
        <p className="mb-50 text-xl">We make software and video games (sometimes)</p>
        <h1 className="text-3xl">Our Works:</h1>
        <div>
          
        </div>
      </main>
    </div>
  );
}
