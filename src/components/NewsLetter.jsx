import React from 'react'
import styled from 'styled-components'
import Button  from './Button'

const NewsLetter = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='header'>
          <p>35,000+ already joined</p>
          <h2>Stay up-to-date with what we’re doing</h2>
        </div>
        <form>
          <div>
            <input type='text' placeholder='Enter your email address'/>
          </div>
          <div className='btn'>
            <Button type={'secondary'} label={'contact us'} />
          </div>
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--softBlue);
  color: var(--white);
  padding: 50px 25px;

  .container {
    text-align: center;

    p {
      text-transform: uppercase;
      letter-spacing: 5px;
      margin-bottom: 10px;
    }

    h2 {
      margin-bottom: 10px;
      font-weight: 300;
    }
    form {
      input {
        width: 100%;
        padding: 15px;
        border-radius: 5px;
        border: none;
        margin-bottom: 20px;

        &::placeholder{
          font-size: 16px;
          color: var(--grayishBlue);
        }
      }
      .btn {
        button {
          width: 100%;
        }
      }
    }
  }

  @media screen and (min-width: 835px) {
    .container {
      width: 40%;
      margin: 0 auto;
      form {
        width: 100%;
        gap: 20px;
        display: flex;

        input{
          width: 100%;
          font-size: 16px;
        }
      }
    }
  }
`
export default NewsLetter
