import React from 'react'
import picture from '../assets/teste_proj.png';

function ProjectCard(props) {
  return (
    <div className='w-96'>
        <div className='flex'>
                <div>
                    <img src={picture}></img>
                </div>

                <div className='flex flex-col justify-between ml-5 text-black'>
                <h1>{props.name}</h1>
                <p>{props.desc}</p>
                
             </div>
        </div>
    </div>
    
  )
}

export default ProjectCard