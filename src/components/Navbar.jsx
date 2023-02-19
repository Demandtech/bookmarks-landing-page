import React, {useEffect, useRef} from 'react'
import { ReactComponent as Logo } from '../assets/images/logo-bookmark.svg'
import styled from 'styled-components'
import Button from './Button'



const Navbar = () => {
  //const [openNav, setOpenNav] = useState(false)
  const navContainer = useRef(null);

  const stickyNav = function(entries){
   const [entry] = entries
   if(!entry.isIntersecting) navContainer.current.classList.add('sticky')
   else navContainer.current.classList.remove('sticky')
  }

  useEffect(()=>{
    const header = document.querySelector('.hero');
    const navHeight = navContainer.current.getBoundingClientRect().height;
    console.log(header, navHeight)
    const headerObserver = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0,
      rootMargin: `-${navHeight}px`
    })
    headerObserver.observe(header)
  }, [])
  return (
    <Wrapper >
      <nav className='navbar' ref={navContainer}>
        <div className='logo-wrapper'>
          <div>
            <Logo className='logo' />
          </div>
        </div>

        <ul className='nav-lists'>
          <li>
            {/* eslint-disable-next-line */}
            <a href={'#features'}>Features</a>
          </li>
          <li>
            {/* eslint-disable-next-line */}
            <a href={'/'}>pricing</a>
          </li>
          <li>
            {/* eslint-disable-next-line */}
            <a href={'#contact'}>contact</a>
          </li>
          <Button label={'Login'} type={'secondary'} />
        </ul>
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  .navbar {
    display: flex;
    justify-content: space-between;
    padding: 30px 100px;
    max-width: 1440px;
    margin: 0 auto;
    z-index: 100;

    &.sticky {
      position: fixed;
      background-color: rgba(255, 255, 255, 0.95);
      top: 0;
      left: 0;
      right: 0;
    }

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
    }

    @media screen and (max-width: 835px) {
      display: none;
    }
  }
`

export default Navbar
