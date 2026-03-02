import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContent = (props) => {

  
  return (
    <div id='right' className='h-full p-2 w-3/4 flex flex-nowrap gap-10 overflow-x-auto'>
     {props.users.map(function(elem, idx){
      return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
     })}
    </div>
  )
}

export default RightContent
