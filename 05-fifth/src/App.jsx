import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])
  const [error, setError] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()
    if (title.trim() === '' || details.trim() === '') {
      
      setError(true)
      return
    }

    setError(false)
 
    const newTask = [...task]

    
    newTask.push({title,details})
    setTask(newTask)
    
    
    setTitle('')
    setDetails('')
  }



  return (
    <div className='lg:flex h-screen bg-black text-white'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex p-10 lg:w-1/2 gap-4 items-start flex-col'>
        <h2  className='text-3xl font-bold'>Add Note</h2>
        <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value)
          
        }}
        className='px-5 py-2 w-full font-medium border-2 rounded' type="text" placeholder='Enter Notes Headings' />
        <textarea
        value={details}
        onChange={(e) => {
          setDetails(e.target.value)
        }}
        className='px-5 py-2 h-32 w-full font-medium border-2 rounded' type="text" placeholder='Write Details' />
        
        {error && <span className="text-red-500 text-sm">Fields can't be empty</span>}

        <button className='bg-white w-full font-medium text-black px-5 py-2 rounded active:scale-95'>Add Note</button>
      </form>
      <div className=' lg:w-1/2 lg:border-l p-10 bg-gray-900'>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap gap-5 mt-5 overflow-auto h-full'>
         {task.map(function(elem,idx){

          return  <div key={idx} className="h-52 w-40 rounded-2xl text-black p-4 bg-amber-50">
            <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
            <p className= 'mt-2 leading-tight font-medium text-gray-700' >{elem.details}</p>
          </div>
         })}
         
         
        </div>
      </div>
    </div>
  )
}

export default App
