import Format4 from './format4'
import Format2 from './format2'
import Charit from './charit'

export default function GameBody() {

  return (
    <div className='flex w-full h-full items-center'>
      <Charit />
      <div className="max-w-full  mx-auto h-full flex items-center justify-between gap-12">
      
      <Format4 />
      <Format2 />
      
    </div>
    </div>

    

  )

}