import Link from "next/link";
import Image from "next/image";
import { uniqueId } from "../home/header"; 
export { count };



var count = 0;
function add4formatdiv() {
  if(!localStorage.getItem('gameinprocess')){window.location.replace('./Interface');}
  var Question4a = document.getElementById("question");
  var answer4a = document.getElementById("answer4");
  var answer3a = document.getElementById("answer3");
  var answer2a = document.getElementById("answer2");
  var answer1a = document.getElementById("answer1");

  var Question4 = Question4a.value;
  var answer4 = answer4a.value;
  var answer3 = answer3a.value;
  var answer2 = answer2a.value;
  var answer1 = answer1a.value;

  console.log("hahah" +uniqueId); // two way binding
  if (answer1 && answer2 && answer3 && answer4 && Question4){
    const selectedRadio = document.querySelector('input[name="answer"]:checked');

    if (selectedRadio) {
      
      var rightanswer = selectedRadio.value;
      
      const storedDataJson = localStorage.getItem('gameinprocess');


  const storedData = JSON.parse(storedDataJson) || { questions: [] };


  const newQuestion = {
    id: count,
    format: 4,
    question: Question4,
    answer1: answer1,
    answer2: answer2,
    answer3: answer3,
    answer4: answer4,
    correct: rightanswer,
  };

  count++;
  storedData.questions.push(newQuestion);

console.log(storedData);
  const updatedDataJson = JSON.stringify(storedData);


  localStorage.setItem('gameinprocess', updatedDataJson);


        // Reset the input field values
      Question4a.value = "";
      answer4a.value = "";
      answer3a.value = "";
      answer2a.value = "";
      answer1a.value = "";
      document.querySelector(".error").style.display = "none";
      
       
    } else {
      document.querySelector(".error").style.display = "flex";
      document.querySelector(".error").textContent = "Choose the right Answer";
    }
}else {
  
  Question4a.value = "";
      answer4a.value = "";
      answer3a.value = "";
      answer2a.value = "";
      answer1a.value = "";
    document.querySelector(".error").style.display = "flex";
    document.querySelector(".error").textContent = "Please Fill All";
  }

 

  // Gpx Code

  
}

function show4formatdiv() {
  
  if (document.querySelector(".formatdiv").style.display == "none")
    document.querySelector(".formatdiv").style.display = "flex";
  else document.querySelector(".formatdiv").style.display = "none";
}

function cancel() {
  document.querySelector(".formatdiv").style.display = "none";
}

export default function Format4() {
  return (
    <>
      <div
        onClick={show4formatdiv}
        className="-z-0 select-none cursor-pointer hover:scale-110 format4 flex-col justify-between p-4 rounded-md"
      >
        <h1 className="text-2xl">Add a Question with 4 Choices</h1>
        <Image
          className="w-48"
          src="/4questions.jpg"
          width={100}
          height={100}
        />
      </div>
      <div className="">
        <div className="hidden z-10 formatdiv addquestion ">
          <h2 className="error hidden bg-red-300 rounded-md justify-center  text-2xl font-semibold p-5 mb-4">
            Error
          </h2>
          <h2 className="text-2xl font-semibold mb-4">Add a Question</h2>
          <label htmlFor="question" className="block text-lg font-medium mb-2">
            Question:
          </label>
          <textarea
            id="question"
            name="question"
            className="input w-full p-2 border rounded-md mb-4 "
          ></textarea>
          <label htmlFor="answer1" className="block text-lg font-medium mb-2">
            Answer 1: <input type="radio" name="answer" value="answer1" />
          </label>
          <input
            id="answer1"
            name="answer1"
            className="input w-full p-2 border rounded-md mb-4  "
          />
          <label htmlFor="answer2" className="block text-lg font-medium mb-2">
            Answer 2: <input type="radio" name="answer" value="answer2" />
          </label>

          <input
            id="answer2"
            name="answer2"
            className="input w-full p-2 border rounded-md mb-4 "
          />
          <label htmlFor="answer3" className="block text-lg font-medium mb-2">
            Answer 3: <input type="radio" name="answer" value="answer3" />
          </label>
          <input
            id="answer3"
            name="answer3"
            className="input w-full p-2 border rounded-md mb-4 "
          />
          <label htmlFor="answer4" className="block text-lg font-medium mb-2">
            Answer 4: <input type="radio" name="answer" value="answer4" />
          </label>
          <input
            id="answer4"
            name="answer4"
            className="input w-full p-2 border rounded-md mb-4 "
          />
          <div className=" w-1/2 ml-auto flex justify-between items-center ">
            <button
              onClick={add4formatdiv}
              className="add4formatbutton btn-base"
            >
              {" "}
              Save
            </button>
            <button onClick={cancel} className="cancel4formatbutton btn-base">
              {" "}
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
