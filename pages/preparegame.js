import * as components from "@/components/modules";
import { useEffect, useState } from 'react';

export default function Game() {
  useEffect(() => {

	if(!localStorage.getItem('gamejoinedid') || !localStorage.getItem('userid') ){window.location.replace('./joingame');}
    const intervalId = setInterval(() => {
      
      fetch(`/api/score?id=${localStorage.getItem('gamejoinedid') + 'begin'}`) // gameid
        .then((response) => response.json())
        .then((data) => {
          var comand = data.game;
        
          
          if (comand[comand.length - 1 ].questions[0].bdat === 'yes') {
            clearInterval(intervalId)
            setGo(true);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }, 500);


    return () => clearInterval(intervalId);
  }, []);  

  const [go, setGo] = useState(false);

  if (go) {
    return <components.Preparedgame />;
  } else {
    return(<div className="blocks h-full overflow-hidden flex justify-center items-center" >
          <div>
            <div className="clignote  text-3xl m-3 font-serif">Waiting For Host .....</div>
           <div class="loader">
            
      <div class="cell d-0"></div>
      <div class="cell d-1"></div>
      <div class="cell d-2"></div>

      <div class="cell d-1"></div>
      <div class="cell d-2"></div>
      
      
      <div class="cell d-2"></div>
      <div class="cell d-3"></div>
      
      
      <div class="cell d-3"></div>
      <div class="cell d-4"></div>
      
      
    </div>
          </div>
         
    </div>) 
  }
}
