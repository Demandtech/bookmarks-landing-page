import React from 'react'
import styled from 'styled-components'
import { ReactComponent as HambugerIcon } from '../assets/images/icon-hamburger.svg'
import { ReactComponent as CloseIcon } from '../assets/images/icon-close.svg'
import { useState } from 'react'
import { ReactComponent as Logo } from '../assets/images/logo-bookmark.svg'

const Sidebar = () => {
  const [openNav, setOpenNav] = useState(false)

  return (
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
        <li>
          {/* eslint-disable-next-line */}
          <a href={'/'}>Features</a>
        </li>
        <li>
          {/* eslint-disable-next-line */}
          <a href={'/'}>pricing</a>
        </li>
        <li>
          {/* eslint-disable-next-line */}
          <a href={'/'}>contact</a>
        </li>
        <div className='login'>
          <button>Login</button>
        </div>
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  transition: 0.5s;
  padding: 0 25px;
  postion: relative;

  .logo-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;
    width: 100%;
    transition: 0.5s;

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
  @media screen and (min-width: 835px) {
    display: none;
  }
`

export default Sidebar
