import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {/* Code goes here */}
        <Navbar />
        {/* hero section */}

        <div className="mt-40 flex flex-col items-center justify-center">
          <p className="motto text-lg ">Studio | Metaverse| Academy</p>
          <h1 className="font-bold mt-6 text-center text-7xl">
            Keeping Pace With <br /> The Global Trends
          </h1>
          <button class="bg-yellow-500 mt-3 hover:bg-gray-400 text-white font-bold py-4 px-5 rounded inline-flex items-center">
       
            <span>CONTACT US NOW</span>
          </button>
        </div>

        {/* info section */}

        {/* slider  */}

        {/* footer */}
      </div>
    </>
  );
}