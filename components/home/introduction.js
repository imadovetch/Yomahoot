import Image from "next/image"
import Link from "next/link";
import React, { useEffect, useState } from 'react';

export default function Introduction() {
  const [gameconnectcode, setconnectgame] = useState(null)
  async function checkifitbigen(){
    
    localStorage.setItem("connectedgamecode",gameconnectcode)// chek security
    const data = {
      id: gameconnectcode+"begin",
      questions: [
        {
          bdat: "la",
        }
      ]
    };
    await fetch("/api/score", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log('mcha')
  }
  return (

    <div className="flex flex-col-reverse md:flex-row gap-4 h-screen items-center justify-center">
      <div className="gap-8 absolute top-20 bg-app--dark px-12 border flex justify-between items-center shadow-2xl border-black mt-1 rounded-lg  m-auto   h-1/6">
        <div className="text-2xl font-serif">BY IMAD PHP</div>
        <input
          type="text"
          id="codeInput"
          value={gameconnectcode}
          onChange={(e) => setconnectgame(e.target.value)}
        />
        <Link href="./loby"><button onClick={checkifitbigen} className="btn-base px-5 py-3 text-xl float-right border border-black shadow-lg">Run Game</button></Link>
      </div>
      {/* introduction */}
      <div className="text-xl font-bold max-w-xl mx-auto animate-toright">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
        malesuada arcu. Nullam tristique libero nec euismod. Nunc sed ultricies
        justo. Morbi vestibulum ipsum at ante euismod.
      </div>

      {/* shopping image */}
      <div className="center animate-toleft">
        <Image
          className="w-full h-full"
          src="/gameinterface.svg"
          width="400"
          height="400"
          alt="shoppigintroduction"
        />
      </div>

    </div>

  )

}
