import React from 'react';
import Image from 'next/image';
import Studio from '../images/Studio1.png';
import Hero from '../images/hero1.png';

function Info() {
  return (
    <div className="grid grid-cols-2 h-70vh bg-gray-100">
      <div className="flex justify-end items-center pt-16 pl-16">
        <div className="grid ml-100 grid-cols-2">
          <Image src={Hero} alt="Picture of the author" width={250} height={250} className="mt-[-100px]" />
          <Image src={Studio} alt="Picture of the author" width={250} height={250} className="ml-[-90px] mt-6" />
        </div>
      </div>

      <div className="flex w-1/2 flex-col justify-start items-start pt-16 px-16">
        <div className="text-xs  mb-4">NILEONE STUDIOS</div>
        <div className="text-xl font-semibold mb-4">Video, Audio and Podcast studios</div>
        <div className="text-xs mb-4">
          We have broadcast quality studio setups with professional equipment and lighting that deliver outstanding work.
        </div>
        <ul className="list-disc list-inside mb-8 text-xs">
          <li className="flex items-center mb-2">
            <span className="text-yellow-500 mr-2">✓</span>
            Various video Production Sets
          </li>
          <li className="flex items-center mb-2">
            <span className="text-yellow-500 mr-2">✓</span>
            State of the Art Podcast studio
          </li>
          <li className="flex items-center mb-2">
            <span className="text-yellow-500 mr-2">✓</span>
            Audio studio with the latest Equipment
          </li>
        </ul>
        <button className="bg-yellow-500 px-4 py-2 rounded-sm flex justify-between items-center text-sm">
          Learn more
          <span className="ml-2">➔</span>
        </button>
      </div>
    </div>
  );
}

export default Info;
