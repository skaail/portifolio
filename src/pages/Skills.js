import React from 'react'
import './skills.css'
import { TypeAnimation } from 'react-type-animation';
import SkillCard from '../components/SkillCard';

function Skills() {

    const skills = [
        {name: 'HTML', progress: '90'},
        {name: 'CSS', progress: '90'},
        {name: 'Bootstrap', progress: '60'},
        {name: 'Tailwind', progress: '60'},
        {name: 'JavaScript', progress: '90'},
        {name: 'Node.js', progress: '80'},
        {name: 'Python', progress: '80'},
        {name: 'React', progress: '70'},
        {name: 'Next.js', progress: '60'},
        {name: 'Angular', progress: '50'},
        {name: 'Typescript', progress: '80'},
        {name: 'GIT', progress: '70'},
        {name: 'Wordpress', progress: '70'},
        {name: 'Svelte', progress: '40'},
        {name: 'MongoDB', progress: '80'},
        {name: 'Firebase', progress: '70'},
        {name: 'Electron', progress: '70'},
        {name: 'Scrum', progress: '90'},
        {name: 'Ingles', progress: '100'},
        {name: 'Espanhol', progress: '90'}
    ]


  return (
    <div className='bg-gray-900 h-screen flex flex-col text-white items-center justify-center content-center'>
        <div>
            <TypeAnimation 
                sequence={[
                'Habilidades'
                ]}
                wrapper="div"
                cursor={true}
                repeat={false}
                style={{fontSize: '2em'}}
            />
        </div>  

        <div className='example flex justify-center flex-wrap overflow-auto'>
            { skills?.map((skill , i) =>                     
                <SkillCard name={skill.name} progress={skill.progress}/>
            )}
        </div>
    </div>
  )
}

export default Skills