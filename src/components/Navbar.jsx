import React from 'react'
import { ReactComponent as Logo } from '../assets/images/logo-bookmark.svg'
import styled from 'styled-components'


const Navbar = () => {
  //const [openNav, setOpenNav] = useState(false)

  return (
    <Wrapper >
      <div className='logo-wrapper'>
        <div>
          <Logo className='logo' />
        </div>
        {/* <div className='hamburger'>
          <button onClick={() => setOpenNav(!openNav)}>
            {openNav ? <CloseIcon /> : <HambugerIcon />}
          </button>
        </div> */}
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

        <button className='login'>Login</button>
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 30px 100px;
  max-width: 1440px;
  margin: 0 auto;
  .nav-lists {
    display: flex;
    list-style-type: none;
    align-items: center;
    gap: 40px;

    a {
      text-transform: uppercase;
      font-size: 18px;
      text-decoration: none;
      color: var(--veryDarkBlue);
      transition: all 0.3s;
      

      &:hover {
        color: var(--softRed);
      }
    }

    button {
      all: unset;
      background: var(--softRed);
      border: 2px solid var(--softRed);
      color: #ffffff;
      padding: 7px 25px;
      border-radius: 5px;
      transition: all 0.3s;
      cursor:pointer;

      &:hover {
        color: var(--softRed);
        background: #ffffff;
      }
    }
  }

  @media screen and (max-width:835px){
    display:none;
  }
`

export default Navbar
