import React, { useEffect, useState } from 'react';

export default function showwinner(){
	useEffect(() => {
		if (!localStorage.getItem('userid') || !localStorage.getItem('myArray')) {
		  window.location.replace('./');
		}
		console.log('hi')
	  }, []);
	return(
		<main className=' overflow-hidden  blocks h-screen w-screen '>
      <div>
		
	  </div>
	  <div></div>
    </main>
	)
}