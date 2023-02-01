import React from 'react'
import picture from '../assets/picture.png';
import './home.css'
import { TypeAnimation } from 'react-type-animation';
import { SocialIcon } from 'react-social-icons';

function Home() {
  return (
    <div className='bg-gray-900 h-screen flex text-white items-center justify-center content-center'>
      <div className='flex items-center content-center px-28'>
        <img className='picture rounded-full w-80' src={picture} alt="Profile"></img>
        <div className='pl-20'>
          <TypeAnimation 
            sequence={[
              'Bruno Gianini'
            ]}
            wrapper="div"
            cursor={false}
            repeat={false}
            style={{fontSize: '2em'}}
          />

          <TypeAnimation 
            sequence={[
              'Fullstack Developer'
            ]}
            wrapper="div"
            cursor={false}
            repeat={false}
            style={{fontSize: '1em'}}
          />

          <br></br>

          <TypeAnimation 
            sequence={[
              'Idade: 20'
            ]}
            wrapper="div"
            cursor={false}
            repeat={false}
            style={{fontSize: '1em'}}
          />

          <TypeAnimation 
            sequence={[
              'Telefone: (11) 97123-6030'
            ]}
            wrapper="div"
            cursor={false}
            repeat={false}
            style={{fontSize: '1em'}}
          />

          <TypeAnimation 
            sequence={[
              'Email: blgianini@gmail.com'
            ]}
            wrapper="div"
            cursor={false}
            repeat={false}
            style={{fontSize: '1em'}}
          />

          <br></br>

          <div className='social'>
            <SocialIcon className='mx-2' url="https://www.linkedin.com/in/bruno-gianini-b8703917b/"/>
            <SocialIcon url="https://github.com/skaail" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home