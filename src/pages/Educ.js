import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoMdSchool } from "react-icons/io";
import { MdWork } from "react-icons/md";

function Educ() {
  return (
    <div className='bg-gray-900 h-screen flex text-white items-center justify-center content-center'>
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2017 - 2019"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<IoMdSchool />}
            >
                <h3 className="vertical-timeline-element-title">Ensino Médio Técnico</h3>
                <h4 className="vertical-timeline-element-subtitle">FECAP</h4>
                <p>Ensino Médio Técnico em Desenvolvimento de Sistemas</p>

            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2020 - 2023"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<IoMdSchool />}
            >
                <h3 className="vertical-timeline-element-title">Bacharelado em Sistemas de Informação</h3>
                <h4 className="vertical-timeline-element-subtitle">FIAP</h4>

            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 243, 124)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 243, 124)' }}
                date="2021 - 2022"
                iconStyle={{ background: 'rgb(33, 243, 124)', color: '#fff' }}
                icon={<MdWork />}
            >
                <h3 className="vertical-timeline-element-title">Estágio em Arquitetura de Sistemas</h3>
                <h4 className="vertical-timeline-element-subtitle">DRIVEN.CX</h4>
                <p>Estágio em Arquitetura para ecommerce feitos com VTex</p>

            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 243, 124)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 243, 124)' }}
                date="2022 - 2023"
                iconStyle={{ background: 'rgb(33, 243, 124)', color: '#fff' }}
                icon={<MdWork />}
            >
                <h3 className="vertical-timeline-element-title">Desenvolvedor Fullstack</h3>
                <h4 className="vertical-timeline-element-subtitle">Readmore</h4>
                <p>Desenvolvimento de Aplicativos Web Usando PHP, Laravel, React, Next.js, Angular, Node.js, VTex e Wordpress</p>

            </VerticalTimelineElement>

        </VerticalTimeline>
    </div>
  )
}

export default Educ