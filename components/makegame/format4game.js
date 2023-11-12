import React from 'react';

export default function Format4game({ id, name, stylet,dejakhtar, rightanswer }) {
	
  function chek(answer) {
	if(dejakhtar === false){
    const mother = document.getElementById(name.question);
    const divs = mother.querySelectorAll('.answers');
    
    
	if (answer === rightanswer) {
    divs.forEach(element => {
      element.classList.add('answercorrect');
    });
		const storedNotesArrayString = localStorage.getItem('MacShaman');
		const storedNotesArray = JSON.parse(storedNotesArrayString);
		storedNotesArray.push(1);
		const updatedNotesArrayString = JSON.stringify(storedNotesArray);
		localStorage.setItem('MacShaman', updatedNotesArrayString);
		
	  }

	else{
    divs.forEach(element => {
      element.classList.add('answerwrong');
    });
  }
	
	dejakhtar =true;
  }}

  return (
    <div id={name.question} className={` a w-full h-full justify-center items-center gap-10 flex flex-col ${stylet}`} key={id}>
      <div className='h-1/3 w-6/6 mb-6 flex justify-center text-4xl font-serif p-4'>
        {name.question}
      </div>
      <div className={`motheranswers h-72 p-2 w-6/6 flex justify-between items-center flex-wrap ${stylet}`}>
        <div onClick={() => chek("answer1")} className='answers ans4wers text-xl font-serif flex items-center justify-center'>{name.answer1}</div>
        <div onClick={() => chek("answer2")} className='answers ans4wers text-1xl font-serif flex items-center justify-center'>{name.answer2}</div>
        <div onClick={() => chek("answer3")} className='answers ans4wers text-1xl font-serif flex items-center justify-center'>{name.answer3}</div>
        <div onClick={() => chek("answer4")} className='answers ans4wers text-1xl font-serif flex items-center justify-center'>{name.answer4}</div>
      </div>
    </div>
  );
}
