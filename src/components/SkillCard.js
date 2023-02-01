import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

function SkillCard(props) {
  return (
    <div className='hover:animate-pulse flex flex-col p-6 border border-indigo-500/50 rounded-lg m-4'>
        <div className='flex justify-between w-96 mb-4'>
            <h1>{props.name}</h1>
            <h1>{props.progress}%</h1>
        </div>

        <div>
            <ProgressBar completed={props.progress} customLabel="  " height='3px'/>
        </div>

    </div>
  )
}

export default SkillCard