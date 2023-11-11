import Format4 from './format4';
import Format2 from './format2';
import Charit from './charit';
import Link from 'next/link';

export default function GameBody() {

  async function savegame() {
    const storedDataJson = localStorage.getItem('gameinprocess');
    if(!storedDataJson){window.location.replace('./Interface');}
    const data = JSON.parse(storedDataJson);
    if(data.questions.length > 0){
      try {
        const response = await fetch("/api/game", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
  
        localStorage.removeItem("gameinprocess");
        
      } catch (error) {
        console.error("Error:", error);
      }
    }else{
      return
    }
    

    
  }
    function hasQuestionsInLocalStorage() {
      const storedDataJson = localStorage.getItem('gameinprocess');
      if (storedDataJson) {
        const data = JSON.parse(storedDataJson);
        return data.questions && data.questions.length > 0;
      }
      return false;
    }
  return (
    <div className='flex w-full h-full items-center'>
      <Charit />
      <div className="max-w-full  mx-auto h-full flex items-center justify-between gap-12">
        <Format4 />
        <Format2 />
      </div>
      <Link  href="./Interface"><button onClick={savegame} className="btn-base absolute   bottom-16  right-3 my-7 mr-4 px-5 py-3">Finish & save game</button></Link>
    </div>
  );
}
