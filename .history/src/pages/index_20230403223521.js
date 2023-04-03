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

        {/* hero section */}
        <div className="w-100 flex items-center my-10 mx-20">
          <div className="w-1/3">
            <Image height={100} width={100} src="./next.svg" alt="logo" />
          </div>
          <div className="navbar flex justify-center">
            <div className="nav_links">
              <ul className="flex space-x-6 justify-start">
                <li>Home</li>
                <li>Studios</li>
                <li>Metaverse</li>
                <li>Academy</li>
                <li>About</li>
                <li>Contacts</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="my-auto flex items-center justify-center">
          <p className="motto">
            Studio | Metaverse| Academy | About | Contacts
          </p>
        </div>

        {/* info section */}

        {/* slider  */}

        {/* footer */}
      </div>
    </>
  );
}
