


export default function insertscore(){
	
	// name dynamic apres
	// const gameid = localStorage.getItem("game_id")
	
	  const  name = localStorage.getItem('joinerserialid');
	var gameidf = localStorage.getItem('gamejoinedid')+'score';
	const storedNotesArrayString = localStorage.getItem('notes');
const notes = JSON.parse(storedNotesArrayString);
var notesl = notes.length; 

	const data= {
		id:gameidf ,
		questions: [
		  {
			name: name,
			note: notesl,
			
		  }
		]
	  };
	  console.log(data)
	  
	fetch("/api/score", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
	  setTimeout(() => {
		catchwinner();
	  }, 3000);
	  
};
async function catchwinner(){

	await fetch(`/api/score?id=${localStorage.getItem('gamejoinedid')+'score'}`)
	.then((response) => response.json())
	.then((data) => {
	  console.log("Success:", data.game);
	
	const games = data.game; 
	games.sort((gameA, gameB) => {
	const noteA = gameA.questions[0].note || 0;
	const noteB = gameB.questions[0].note || 0;
	return noteB - noteA;
	});

	var tartib = []
	games.forEach(element => {
		tartib.push(element.questions[0].name)
	});
	console.log(tartib)
	const arrayString = JSON.stringify(tartib);

	localStorage.setItem('myArray', arrayString);
	})
	.catch((error) => {
	  console.error("Error:", error);
	});
	
	

	window.location.href = './showwinners';
}