import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ReactComponent as HambugerIcon } from '../assets/images/icon-hamburger.svg'
import { ReactComponent as CloseIcon } from '../assets/images/icon-close.svg'
import { ReactComponent as Logo } from '../assets/images/logo-bookmark.svg'
import { motion } from 'framer-motion'

const variants ={
  open: {opacity: 1, x: 0},
  closed: {opacity:0, x: '-100%'}
}

const Sidebar = () => {
  const [openNav, setOpenNav] = useState(false)

  useEffect(() => {
    if (openNav == true) {
      document.documentElement.style.position = 'fixed'
    }else{
      document.documentElement.style.position = 'sticky'
    }
  }, [openNav])

  return (
    <motion.div animate={openNav ? "open" : "close"} variants={variants}>
      <Wrapper className={`${openNav ? 'open-nav' : null}`}>
        <div className='logo-wrapper'>
          <div>
            <Logo className='logo' />
          </div>
          <div className='hamburger'>
            <button onClick={() => setOpenNav(!openNav)}>
              {openNav ? <CloseIcon /> : <HambugerIcon />}
            </button>
          </div>
        </div>

        <ul className='nav-lists'>
          <li onClick={() => setOpenNav(false)}>
            {/* eslint-disable-next-line */}
            <a href={'#features'}>Features</a>
          </li>
          <li onClick={() => setOpenNav(false)}>
            {/* eslint-disable-next-line */}
            <a href={'#pricing'}>pricing</a>
          </li>
          <li onClick={() => setOpenNav(false)}>
            {/* eslint-disable-next-line */}
            <a href={'#contact'}>contact</a>
          </li>
          <div className='login'>
            <button>Login</button>
          </div>
        </ul>
      </Wrapper>
    </motion.div>
  )
}

const Wrapper = styled.aside`
 
  padding: 0 25px;
  position: fixed;
  z-index: 100;
  width: 100%;
  background-color: rgba(255,255,255,0.95);
  top:0;

  .logo-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    
    padding: 30px 0;
    top: 0;
    left: 0;
    z-index: 100;

    button {
      all: unset;
    }
  }
  .nav-lists {
    text-align: center;
    list-style-type: none;
    height: 0;
    overflow: hidden;
    transition: 0.5s;
    z-index: 100;

    li {
      border-bottom: 1px solid var(--grayishBlue);
      padding: 20px 0;

      a {
        text-decoration: none;
        font-size: 22px;
        color: #ffffff;
        font-weight: light;
        text-transform: uppercase;
      }
    }

    .login {
      margin-top: 20px;

      button {
        background: transparent;
        border: 2px solid #ffffff;
        color: #ffffff;
        width: 100%;
        border-radius: 8px;
        padding: 10px 0;
        font-size: 18px;
      }
    }
  }
  &.open-nav {
    background: var(--veryDarkBlue);

    .bookmark {
      fill: var(--white);
    }

    .logo circle {
      fill: var(--white);
    }

    .flag {
      fill: var(--veryDarkBlue);
    }

    .logo-wrapper {
      border-bottom: 1px solid var(--grayishBlue);
    }

    .nav-lists {
      height: calc(100vh - 90px) !important;
      position: absolute;
      padding: 0 25px;
      transition: 0.5s;
      background: var(--veryDarkBlue);
      right: 0;
      left: 0;
    }
  }
  @media screen and (min-width: 835px) {
    display: none;
  }
`

export default Sidebar
