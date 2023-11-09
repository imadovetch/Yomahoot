import React from 'react';

export default function Format4game({ id, name }) {
  return (
    <div className='a w-full h-full justify-center items-center gap-10  flex flex-col ' class="a" key={id}>
		<div className='h-1/3 w-5/6 flex justify-center text-4xl  font-serif p-4'>
				the questiion will be here you niga son of bitch ?
		</div>
		<div className='h-2/6 p-2 w-5/6 flex justify-between items-center flex-wrap '>
			<div className='ans4wers text-1xl font-serif flex items-center justify-center'>the questiion will be here you niga son of bitch ?</div>
			<div className='ans4wers text-1xl font-serif flex items-center justify-center'>the questiion will be here you niga son of bitch ?</div>
			<div className='ans4wers text-1xl font-serif flex items-center justify-center'>the questiion will be here you niga son of bitch ?</div>
			<div className='ans4wers text-1xl font-serif flex items-center justify-center'>the questiion will be here you niga son of bitch ?</div>
		</div>

    </div>
  );
}
