import React from 'react'
import styled from 'styled-components'
import heroImg from '../assets/images/illustration-hero.svg'

const Hero = () => {
  return (
    <Wrapper>
      <div className='left'>
        <div className='bg'></div>
        <img src={heroImg} alt='' />
      </div>
      <div className='right'>
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className='btns'>
          <div className='chrome-btn'>
            <a href='/'> Get it on Chrome </a>
          </div>
          <div className='firefox-btn'>
            <a href='/'>Get it on Firefox</a>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding-top: 50px;
  .left {
    width: 100%;
    position: relative;

    img {
      width: 90%;
    }

    .bg {
      height: 200px;
      width: 80%;
      position: absolute;
      background: var(--softBlue);
      right: 0;
      bottom: 0;
      z-index: -1;
      border-bottom-left-radius: 75px;
    }
  }

  .right {
    padding: 50px 25px;
    text-align: center;

    h1 {
      font-weight: 300;
      font-size: 30px;
      margin-bottom: 20px;
      color: var(--veryDarkBlue);
    }

    p {
      font-size: 18px;
      color: var(--grayishBlue);
      margin-bottom: 20px;
      line-height: 1.5;
    }

    .btns {
      display: flex;
      justify-content: center;
      gap: 10px;

      a {
        text-decoration: none;
        padding: 10px 15px;
        display: block;
      }

      .chrome-btn {
        background: var(--softBlue);
        border: 2px solid var(--softBlue);
        border-radius: 5px;
        a {
          color: #ffffff;
        }

        &:hover {
          background: transparent;

          a {
            color: var(--softBlue);
          }
        }
      }

      .firefox-btn {
        background: var(--grayishBlue);
        border: 2px solid var(--grayishBlue);
        border-radius: 5px;

        a {
          color: var(--veryDarkBlue);
        }

        &:hover {
          background: transparent;

          a {
            color: var(--grayishBlue);
          }
        }
      }
    }
  }

  @media screen and (min-width: 835px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;

    .right {
      padding-left: 100px;
      width: 50%;
      text-align: left;

      .btns {
        justify-content: flex-start;
        gap: 20px;
      }
    }

    .left {
      width: 50%;

      .bg {
        height: 250px;
      }
    }
  }
`

export default Hero
