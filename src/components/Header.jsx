import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <header style={{width: '100% '}} className='bg-body-tertiary'>
        <h2 className='text-center '>B1 Sample Project</h2>

        <nav className="navbar  bg-body-tertiary d-flex justify-content-around">
        <ul className='navbar-nav d-flex flex-row justify-content-between gap-5 fs-3 '>
                <li className='nav-item'><Link className='nav-link' to='/'>Home</Link></li>
                <li className='nav-item'><Link className='nav-link' to='/Abinav'>Abinav</Link></li>
                <li className='nav-item'><Link className='nav-link' to=''>Akarsh</Link></li>
                <li className='nav-item'><Link className='nav-link' to=''>Akshay</Link></li>
                <li className='nav-item'><Link className='nav-link' to=''>Anandhu</Link></li>
                
            </ul>
        </nav>


    </header>
    )
}

export default Header