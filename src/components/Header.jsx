import React, { useState } from 'react'
import './styles/Header.scss';
import { Close, MenuOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Header = () => {

    const [active,setActive] = useState(false)

    const showMenu = () => {
        setActive(!active) 
    }


  return (
    <div className='header'>

        <div className="header__logo">
            <h1>BEK</h1>
        </div>

        <nav className={active ? 'navbar active' : 'navbar'}>

            <ul>
                <div className="closed">
                    <Close className='close' onClick={showMenu}   />
                </div>

                <li>
                  <p>   <Link to="/">Home </Link> </p>
                </li>
                <li>
                    <Link to="/about">About </Link>
                </li>
                <li>
                    <Link to="/">Portfolio</Link>
                </li>
                <li>
                    <Link to="/">Pages</Link>
                </li>
                <li>
                    <Link to="/">Blog</Link>
                </li>
                <li>
                    <Link to="/contact">Contact </Link>
                </li>
            </ul>
        </nav>

        <div className="changer">
            <MenuOutlined className='menu' onClick={showMenu}  />
        </div>

        

    </div>
  )
}

export default Header