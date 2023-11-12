import {useState, useEffect} from 'react'
import * as components from "@/components/modules"

export default function Game() {

  const [gameIdProcess, setGameId] = useState(false)

  useEffect(() => {

      if (!localStorage.getItem('userid')) {
        window.location.replace('./');
      }
 
    
    setGameId(localStorage.getItem("gameinprocess") ? true : false)
    if(!localStorage.getItem("gameinprocess")){window.location.replace('./Interface');}
  }, [])

  return gameIdProcess
  ? (
    <main className="overflow-hidden h-full flex flex-col blocks animate-zoom">
      <components.GameHeader var={'Create a Game and share it with your friends '} />
      <components.GameBody />
      <components.Footer />
    </main>
    
  )
  : (
    <div>redirecting...</div>
    
  );
  
}
