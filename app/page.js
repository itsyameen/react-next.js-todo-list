"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([]) // hum jo task likhengy wo (mainTask) mei rahega

  const submitHandler = (e)=>{   // passing variable (e) in the function
    e.preventDefault()  // ye ek in-built method hai jis se form ko submit hony sy rokti hai 
    setmainTask  ([...mainTask, {title,desc}]); // this is spread operator (jb hum dusra task daalty hai to hum chaahty hai ke purana wala task na haty)
    console.log(title)
    console.log(desc)
    console.log(mainTask)
    settitle("")  // is sy form submit krny ke baad form empty hojayyega 
    setdesc("")  // is sy form submit krny ke baad form empty hojayyega
  }

  const deleteHandler = (i) =>{
    let copytask = [...mainTask]  // array it's a reference variable
    copytask.splice(i,1)
    setmainTask(copytask)
  }
  let renderTask = <h2>No Task Available</h2>  // jo data hum dhikayengy

  if(mainTask.length > 0){
    renderTask = mainTask.map((t,i)=>{  // (t) hamara task hai or (i) index hai.
      return (
        <li key={i} className='flex justify-between mb-6'>   {/* key={i} unique identification */}
          <div className='flex  justify-between mb-5 w-2/3'>
        <h5 className='text-2xl font-semibold'>{t.title}</h5>
        <h6 className='text-lg font-medium'>{t.desc}</h6>
      </div>
      <button onClick={()=>{
        deleteHandler(i)
      }} className='bg-red-400 px-4 py-2 text-white rounded font-bold'>Delete</button>
        </li>
      )
    });
  }
  return (
    <>
    <h1 className= 'bg-black text-white text-center font-bold p-7  text-[35px]'>My To-do-List</h1>
    <form onSubmit={submitHandler}>
      <input type='text' className='text-2xl border-4 border-zinc-600 m-10 px-4 py-3'
      placeholder='Enter Task Here:' 
      value={title}   // value={title} ye wo hai jo humne const usestate se bnaya ha, value ek property hai 
      onChange={(e)=>{   //  (it's a two way bining) jab jab mei kch change karunga tab tab mjh kch milna chahiyye
        settitle(e.target.value)  // mtlb mei title set kr raha ho
        // console.log(e.target.value)   e is elem
      }}/>  

      <input type='text' className='text-2xl border-4 border-zinc-600 m-10 px-4 py-3'
      placeholder='Enter Description Here:'
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }}/>
      <button className='bg-black text-white px-4 py-3 m-5 text-2xl font-bold rounded'>Add Task</button>
    </form>
    <hr/>
    <div className='bg-slate-200 p-8'>
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
  )
}

export default page