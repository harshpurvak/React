import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
       <div className='p-6 absolute top-0 left-0 h-full w-full flex flex-col justify-between'  >
        <h2 className='bg-white text-xl rounded-full h-12 w-12 flex justify-center items-center align-middle'>{props.id+1}</h2>
        <div >
            <p className='text-lg leading-normal text-white mb-14 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique sed voluptatibus amet soluta minus expedita cumque voluptas reiciendis fugit labore?</p>
            <div className='flex justify-between'>
                <button className='bg-blue-600 text-white font-medium px-6 py-2 rounded-full'>{props.tag}</button>
                <button className='bg-blue-600 text-white font-medium px-4 py-3 rounded-full '><i class="ri-arrow-right-up-line"></i></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent
