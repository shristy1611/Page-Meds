import React from 'react'
import { Link } from 'react-router-dom';
import { FaLinkedinIn ,FaInstagram ,FaGithub } from "react-icons/fa";


const Footer = () => {

  const links =[
    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/shristy-kumari-1995b2222',
      icon: <FaLinkedinIn/>,
    },
    {
      label: 'Instagram',
      link: 'https://www.instagram.com/shristy.__jha/',
      icon: <FaInstagram/>,
    },
    {
      label: 'GitHub',
      link: 'https://github.com/shristy1611',
      icon: <FaGithub/>
    }
  ]
  return (
    <footer className='bg-slate-200'>
      <div className='container flex flex-col items-center justify-center gap-4 mx-auto p-4 '>
      
        <div className='text-lg text-center  font-bold'>
          Glad to see you enjoying the latest deals. <br/>
          Follow us on the <p className='text-pink-600'>LINKS</p> |=========================| <br/>
        </div>

        <div >
          <ul className='flex flex-row  md:gap-x-7 gap-x-3 '> 
                    
            {links.map((item,index)=>(
              <li key={index} className='text-xl font-bold' >
                  <Link aria-label='lklkl' to={item.link} target="_blank">
                  <p className='text-pink-600'>{item.icon}</p>
                  <p>{item.label}</p>
                  </Link>
              </li>
            )
            )}
          </ul>
          </div>         
      
              
      </div>
    </footer>
  )
}

export default Footer
