import Image from "next/image";

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
        <p className="text-center text-2xl">Reconstruction (is probably) in progress...</p>
      </main>
    </div>
  );
}
