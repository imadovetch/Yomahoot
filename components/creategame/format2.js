import Image from "next/image"
import { uniqueId } from "../home/header"; 
import {count } from "./format4"


function add2formatdiv(){
	const Question2 = document.getElementById("question-2").value;

	const answer2 = document.getElementById("answer2-2").value;
	const answer1 = document.getElementById("answer1-2").value;

	console.log("count " , count)
  
	console.log("hahah" +uniqueId); // two way binding
	if (answer1 && answer2 && Question2){
		const selectedRadio = document.querySelector('input[name="answer"]:checked');

		if (selectedRadio) {
		  
		  var rightanswer_2 = selectedRadio.value;
		  console.log("Selected value: " + rightanswer_2);
		   // fetch 
			console.log(Question2, answer1, answer2);
			const data_2 = {Question2,answer1,answer2,rightanswer_2,uniqueId}

			fetch("/api/data_2",{
				method : "POST",
				headers : {
					Accept: "application/json",
					"Content-type" : "application/json"

				},
				body : JSON.stringify(data_2),
			})
			.then((res) => res.json())
			.then((res) => console.log(res));
		} else {
		  document.querySelector(".error").textContent = "Choose the right Answer";
		}
		
	}
	else {
	  document.querySelector(".error-2").style.display = "flex";
	  document.querySelector(".error-2").textContent = "Please Fill All";
	}
	
}

function show2formatdiv (){
	const format2 = document.querySelector('.formatdiv2');
	format2.style.display = "flex"
}
function cancel() {
	const format2 = document.querySelector('.formatdiv2');
	format2.style.display = "none";
  }
export default function Format2(){
	return (
		<>
			<div onClick={show2formatdiv} className="z-0 cursor-pointer hover:scale-110 format2 justify-between flex-col p-10"> 
				<h1 className=" text-2xl">Add a True False  Question ? 
				</h1>
				<Image className="  w-48" src="/truefalse.jpg" width="100" height="100"/>
				<div className="">
        
      			</div>
			</div>

	<div className="hidden z-10 formatdiv2 addquestion  ">
	<h2 className="error-2 hidden bg-red-300 rounded-md justify-center  text-2xl font-semibold p-5 mb-4">
	  Error
	</h2>
	<h2 className="text-2xl font-semibold mb-4">Add a Question</h2>
	<label htmlFor="question" className="block text-lg font-medium mb-2">
	  Question:
	</label>
	<textarea
	  id="question-2"
	  name="question"
	  className="w-full p-2 border rounded-md mb-4 text-app--dark"
	></textarea>
	<label htmlFor="answer1" className="block text-lg font-medium mb-2">
	  True: <input type="radio" name="answer" value="answer1" />
	</label>
	<input
	  id="answer1-2"
	  name="answer1"
	  value="True"
	  className="hidden w-full p-2 border rounded-md mb-4  text-app--dark"
	/>
	<label htmlFor="answer2" className="block text-lg font-medium mb-2">
	  False: <input type="radio" name="answer" value="answer2" />
	</label>

	<input
	value="false"
	  id="answer2-2"
	  name="answer2"
	  className= "hidden w-full p-2 border rounded-md mb-4 text-app--dark"
	/>
	
	<div className=" w-1/2 ml-auto flex justify-between items-center ">
	  <button
	onClick={add2formatdiv}
		className="add4formatbutton btn-base"
	  >
		{" "}
		Save
	  </button>
	  <button 
	  onClick={cancel}
	   className="cancel4formatbutton btn-base">
		{" "}
		Cancel
	  </button>
	</div>
  </div>
		</>
	
	
	)
}