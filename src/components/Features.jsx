import React, { useState } from 'react'
import styled from 'styled-components'
import { tabs } from '../utils'
import Button from './Button'
import {motion} from 'framer-motion'

const Features = () => {
  const [value, setValue] = useState(0)
  const { title, text, img } = tabs[value]

  return (
    <Wrapper id='features'>
      <div className='container'>
        <div className='features-header'>
          <h2>Features</h2>
          <p>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>

        <section className='tabs'>
          <div className='tabs-btn'>
            {tabs.map((tab, index) => {
              return (
                <div
                  key={tab.id}
                  className={`btn ${index === value && 'active-tab'}`}
                >
                  <button className={``} onClick={() => setValue(index)}>
                    {tab.label}
                  </button>
                </div>
              )
            })}
          </div>
          <article>
            <div className='img-content'>
              <div className='bg'></div>
              <img src={img} alt='' />
            </div>
            <div className='text-content'>
              <h3>{title}</h3>
              <p>{text}</p>
              <Button label={'More Info'} type={'primary'} />
            </div>
          </article>
        </section>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .container {
    padding: 50px 25px;

    .features-header {
      text-align: center;

      h2 {
        color: var(--veryDarkBlue);
        font-weight: 300;
        padding-bottom: 20px;
      }

      p {
        color: var(--grayishBlue);
        line-height: 25px;

        padding-bottom: 20px;
        border-bottom: 2px solid var(--grayishBlue);
      }
    }
    .tabs {
      .tabs-btn {
        margin-bottom: 70px;
        .btn {
          width: 100%;
          border-bottom: 2px solid var(--grayishBlue);
          transition: 0.5s;

          text-align: center;
          button {
            border: none;
            font-size: 18px;
            color: var(--grayishBlue);
            background: transparent;
            padding: 15px 0;
            cursor: pointer;
            width: auto;

            &:hover {
              color: var(--softRed);
            }
          }
        }

        .active-tab {
          button {
            border-bottom: 4px solid var(--softRed);
            color: var(--veryDarkBlue);
          }
        }
      }
      article {
        .img-content {
          width: 100%;
          margin-bottom: 70px;
          position: relative;
          img {
            width: 100%;
          }

          .bg {
            height: 200px;
            width: 80%;
            position: absolute;
            background: var(--softBlue);
            left: -100px;
            bottom: -50px;
            z-index: -1;
            border-bottom-right-radius: 75px;
          }
        }
        .text-content {
          text-align: center;

          h3 {
            color: var(--veryDarkBlue);
            font-weight: 300;
            margin-bottom: 15px;
            font-size: 25px;
          }
          p {
            color: var(--grayishBlue);
            line-height: 1.5;
          }

          button {
            display: none;
          }
        }
      }
    }
  }
  @media screen and (min-width: 835px) {
    height: 100vh;
    display: flex;
    align-items: center;
    .container {
      padding: 50px 100px;
      max-width: 1440px;
      margin: 0 auto;
      .features-header {
        width: 50%;
        margin: 0 auto;

        p {
          border: none;
          line-height: 25px;
          font-size: 18px;
        }
      }
      .tabs {
        .tabs-btn {
          display: flex;
          width: 70%;
          margin: 0 auto 50px auto;

          .btn {
            button {
              text-align: center;
              width: 100%;
            }
          }
        }
        article {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .img-content {
            width: 45%;

            img {
              height: 300px;
              width: 100%;
              object-fit: cober;
            }
          }

          .text-content {
            text-align: left;
            width: 45%;
            padding-right: 30px;
            p {
              padding-bottom: 20px;
              font-size: 18px;
            }

            button {
              display: block;
            }
          }
        }
      }
    }
  }
`

export default Features
