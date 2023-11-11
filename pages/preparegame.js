import * as components from "@/components/modules";
import { useEffect, useState } from 'react';

export default function Game() {
  useEffect(() => {
	if(!localStorage.getItem('gamejoinedid')){window.location.replace('./joingame');}
    const intervalId = setInterval(() => {
      fetch(`/api/score?id=${localStorage.getItem('ownerid') + 'begin'}`) // gameid
        .then((response) => response.json())
        .then((data) => {

          if (data.game[1]) {
            setGo(true);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }, 1000);


    return () => clearInterval(intervalId);
  }, []);  

  const [go, setGo] = useState(false);

  if (go) {
    return <components.Preparedgame />;
  } else {
    return <div>loading .....</div>;
  }
}
