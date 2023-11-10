import React from 'react';

export default function Format2game({ id, name, styler,dejakhtar, rightanswer }) {
  function chek(answer) {

	if(dejakhtar === false){
    if (answer === rightanswer) {
      console.log('s7ii7');
      const storedNotesArrayString = localStorage.getItem('notes');
      const storedNotesArray = JSON.parse(storedNotesArrayString);
      storedNotesArray.push(1);
      const updatedNotesArrayString = JSON.stringify(storedNotesArray);
      localStorage.setItem('notes', updatedNotesArrayString);
    } else {
      // Handle the case where the answer is incorrect
    }
	dejakhtar =true;
}

}

  return (
    <div className={`a w-full h-full justify-center items-center gap-10 flex flex-col ${styler}`} key={id}>
      <div className='h-1/3 w-5/6 text-4xl flex justify-center font-serif p-4'>
        {name.question}
      </div>
      <div className='motheranswers h-2/6 w-5/6 flex gap-10'>
        <div onClick={() => chek("answer1")} className='answers truefalse text-5xl font-serif flex items-center justify-center'>True</div>
        <div onClick={() => chek("answer2")} className='answers truefalse text-5xl font-serif flex items-center justify-center'>False</div>
      </div>
    </div>
  );
}

