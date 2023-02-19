import React from 'react'
import styled from 'styled-components'
import Extension from './Extension'
import { exts } from '../utils'


const Extensions = () => {
  return (
    <Wrapper id='pricing'>
      <div className='container'>
        <div className='header'>
          <h2>Download the extension</h2>
          <p>
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>
        </div>
        <div className='extensions-wrapper'>
          {exts.map((ext) => {
            return (
              <div key={ext.id} className={ext.name.toLowerCase()}>
                <Extension {...ext} />
              </div>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .container {
    padding: 25px;
    .header {
      text-align: center;

      h2 {
        color: var(--veryDarkBlue);
        font-weight: 300;
        margin-bottom: 15px;
        font-size: 25px;
      }
      p {
        color: var(--grayishBlue);
        line-height: 1.5;
      }
    }
    .extensions-wrapper {
      padding: 50px 0;
    }
  }
  @media screen and (min-width: 835px) {
    height: 100vh;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-item: center;

    .container {   
      .header {
        width: 50%;
        margin: 0 auto;

        p {
          font-size: 18px;
        }
      }

      .extensions-wrapper {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        width: 100%;

        .firefox {
          transform: translateY(30px);
        }
        .opera {
          transform: translateY(60px);
        }
      }
    }
  }
`

export default Extensions
