import React from 'react'
import './educ.css'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import 'react-vertical-timeline-component/style.min.css';
import { TypeAnimation } from 'react-type-animation';

function Educ() {
  return (
    <div className='bg-gray-900 h-screen flex-col flex text-white items-center justify-center content-center'>
        <TypeAnimation 
            sequence={[
              'Linha do tempo'
            ]}
            wrapper="div"
            cursor={true}
            repeat={false}
            style={{fontSize: '2em'}}
        />
        <div className='example overflow-auto py-28 w-4/5'>
            <Timeline lineColor={'#ddd'}>
                <TimelineItem
                    key="001"
                    dateText="02/2017 – 11/2019"
                    style={{ color: '#e86971' }}
                >
                    <h3 className='text-white'>Ensino Médio Técnico</h3>
                    <h4 className='text-white'>FECAP</h4>
                    <p className='text-white'>
                        Ensino Médio Técnico em Desenvolvimento de sistemas
                    </p>
                    <br></br>
                    <p className='text-white'>
                        Durante o curso fui capaz de realizar um trabalho de conclusão, 
                        esse sendo um sistema de gerenciamento para um cliente real
                    </p>

                </TimelineItem>


                <TimelineItem
                    key="002"
                    dateText="02/2010 – 11/2023"
                    style={{ color: '#e86971' }}
                >
                    <h3 className='text-white'>Bacharelado em Sistemas de Informação</h3>
                    <h4 className='text-white'>FIAP</h4>
                    <br></br>
                    <p className='text-white'>
                        Durante o curso fui capaz de realizar diversos trabalhos de iniciação cientifica, um deles, 
                        totejuke um toten jukebox ultilizando tecnologia nfc para cadastro de musicas em cartões, premiado em 3° lugar na edição de 2022.
                    </p>
                    <br></br>
                    <p className='text-white'>
                        Realização de diversos cursos com certificados como Lidership Comunication e Gestão de Infraestrutura de TI
                    </p>

                </TimelineItem>


                <TimelineItem
                    key="003"
                    dateText="06/2021 – 04/2022"
                    style={{ color: '#e86971' }}
                >
                    <h3 className='text-white'>Estágio em Arquitetura de Solução</h3>
                    <h4 className='text-white'>Driven.cx</h4>
                    <br></br>
                    <p className='text-white'>
                        Durante meu estágio participei de vários projetos VTex como: 
                    </p>
                    <br></br>
                    <ul className='text-white'>
                        <li>- Tramontina (BR/LATAN / VTex)</li>
                        <li>- Lacta (VTex)</li>
                        <li>- Sicoob (VTex)</li>
                    </ul>
                </TimelineItem>


                <TimelineItem
                    key="004"
                    dateText="04/2022 – 01/2023"
                    style={{ color: '#e86971' }}
                >
                    <h3 className='text-white'>Desenvolvedor Fullstack</h3>
                    <h4 className='text-white'>Readmore</h4>
                    <br></br>
                    <p className='text-white'>
                        Enquanto estava trabalhando na Readmore fui pessoalmente resposável por vários projetos como:
                    </p>
                    <br></br>
                    <ul className='text-white'>
                        <li>- Corapost (Site de Marketing e Sistema de Gerenciamento / Wordpress e Laravel)</li>
                        <li>- Paola da Vinci (Vtex)</li>
                        <li>- Ponto Now (Angular)</li>
                        <li>- Pokermob (Wordpress e Node.js)</li>
                    </ul>
                </TimelineItem>
            </Timeline>
        </div>
    </div>
  )
}

export default Educ