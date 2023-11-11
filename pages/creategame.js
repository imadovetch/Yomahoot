import {useState, useEffect} from 'react'
import * as components from "@/components/modules"

export default function Game() {

  const [gameIdProcess, setGameId] = useState(false)

  useEffect(() => {

    
    setGameId(localStorage.getItem("gameinprocess") ? true : false)
    if(!localStorage.getItem("gameinprocess")){window.location.replace('./Interface');}
  }, [])

  return gameIdProcess
  ? (
    <main className="overflow-hidden h-full flex flex-col blocks animate-zoom">
      <components.GameHeader />
      <components.GameBody />
      <components.Footer />
      {/* My custom components called Icon give it a type and size and maybe custom style */}
      {/* This is just a test you can use this component through out your funny game :o */}
      <components.Icon type="user" size={50}/>
    </main>
    
  )
  : (
    <div>redirecting...</div>
    
  );
  
}
