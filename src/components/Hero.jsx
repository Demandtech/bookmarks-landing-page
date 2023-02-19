import React from 'react'
import styled from 'styled-components'
import heroImg from '../assets/images/illustration-hero.svg'
import { motion } from 'framer-motion'
import {Navbar} from '../components'

const Hero = () => {
  return (
    <Wrapper>
      <Navbar />
      <section className='hero'>
        <motion.div className='left'>
          <div className='bg'></div>
          <img src={heroImg} alt='' />
        </motion.div>
        <div className='right'>
          <h1>A Simple Bookmark Manager</h1>
          <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
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
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  .hero {
    padding-top: 150px;
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
      padding: 20px 25px 25px;
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
          transition: 0.5s;
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
          transition: 0.5s;
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
  }

  @media screen and (min-width: 835px) {
    .hero {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      max-width: 1440px;
      margin: 0 auto;
      padding: 50px 0;

      .right {
        padding-left: 100px;
        width: 50%;
        text-align: left;

        .btns {
          justify-content: flex-start;
          gap: 20px;
        }

        h1 {
          font-weight: 700;
          font-size: 45px;
          margin-bottom: 20px;
          color: var(--veryDarkBlue);
        }
      }

      .left {
        width: 50%;

        .bg {
          height: 300px;
        }
      }
    }
  }
`

export default Hero
