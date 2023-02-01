import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { TypeAnimation } from 'react-type-animation';

function Projetos() {
  return (
    <div className=' h-screen flex flex-col text-white items-center justify-center content-center'>
        <TypeAnimation 
            sequence={[
              'Projetos'
            ]}
            wrapper="div"
            cursor={true}
            repeat={false}
            style={{fontSize: '2em', color:'#000'}}
        />

        <ProjectCard name='teste' desc='teste' />
    </div>
  )
}

export default Projetos