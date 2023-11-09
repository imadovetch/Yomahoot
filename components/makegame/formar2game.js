import React from 'react';

export default function Format2game({ id, name }) {
  return (
    <div className='a w-full h-full justify-center items-center gap-10  flex flex-col ' class="a" key={id}>
		<div className='h-1/3 w-5/6  text-4xl  font-serif p-4'>
				the questiion will be here you niga son of bitch ?
		</div>
		<div className='h-2/6  w-5/6 flex gap-10'>
			<div className='truefalse text-5xl font-serif flex items-center justify-center'>True</div>
			<div className='truefalse text-5xl font-serif flex items-center justify-center'>False</div>
		</div>
    </div>
  );
}
