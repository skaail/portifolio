import React, {useState} from 'react'
import {HiMenuAlt3, HiHome, HiTerminal, HiPencilAlt, HiPhone} from 'react-icons/hi'
import { IoMdSchool } from "react-icons/io";
import { Link } from 'react-router-dom'

function Sidebar() {

    const menus = [
        {name: 'Home', link:'/', icon: HiHome},
        {name: 'Educação', link:'/educação', icon: IoMdSchool},
        {name: 'Skills', link:'/skills', icon: HiTerminal},
        {name: 'Projetos', link:'/projetos', icon: HiPencilAlt},
        {name: 'Contato', link:'/contato', icon: HiPhone},
    ]

    const [open, setOpen] = useState(false);

  return (
    <section className='float-left'>
        <div className={`bg-[#0e0e0e] min-h-screen ${open ? 'w-72':'w-16'} duration-500 text-gray-100 px-4`}>
            <div className='py-3 flex justify-end'>
                <HiMenuAlt3 size={26} className='cursor-pointer' onClick={()=>setOpen(!open)}/>
            </div>
            <div className='mt-4 flex flex-col gap-4 relative'>
            { menus?.map((menu , i) =>                     
                <Link to={menu?.link} key={i} className="flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md">
                    <div>{React.createElement(menu?.icon, {size: '20'})}</div>
                    <h2 className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>{menu?.name}</h2>
                </Link>
            )}
            </div>
        </div>
    </section>
  )
}

export default Sidebar