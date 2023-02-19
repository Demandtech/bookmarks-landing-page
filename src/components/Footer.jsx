import React from 'react'
import { ReactComponent as Logo } from '../assets/images/logo-bookmark.svg'
import { ReactComponent as Facebook } from '../assets/images/icon-facebook.svg'
import { ReactComponent as Twitter } from '../assets/images/icon-twitter.svg'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      <div className='logo-wrapper'>
        <div>
          <Logo className='logo' />
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
      </ul>
      <div className='social'>
        <a href='/' className='facebook'>
          <Facebook className='facebook-icon' />
        </a>

        <a href='/' className='twitter'>
          <Twitter className='twitter-icon' />
        </a>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  background: var(--veryDarkBlue);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  gap: 40px;

  .logo {
    .bookmark {
      fill: var(--white);
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    list-style-type: none;
    align-items: center;

    li {
      a {
        color: var(--white);
        text-decoration: none;
        font-size: 18px;
        text-transform: uppercase;

        &:hover {
          color: var(--softRed);
        }
      }
    }
  }

  .social {
    display: flex;
    align-items: center;
    gap: 50px;

    .facebook {
      &:hover {
        .facebook-icon path {
          transition: 0.5s;
          fill: var(--softRed);
        }
      }
    }
    .twitter {
      &:hover {
        .twitter-icon path {
          transition: 0.5s;
          fill: var(--softRed);
        }
      }
    }
  }

  @media screen and (min-width: 835px) {
    flex-direction: row;
    align-items: center;
    padding: 50px 100px;

    ul {
      flex-direction: row;
      align-items: center;
    }

    .social {
      margin-left: auto;
    }
  }
`

export default Footer
