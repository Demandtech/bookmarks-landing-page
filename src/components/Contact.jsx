import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import ErrorIcon from '../assets/images/icon-error.svg'

const Contact = () => {
  const [isError, setIsError] = useState({show:false, msg:''})
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
    if(!input){
      setIsError({ show: true, msg: "input can not be empty" })
    }else if(!emailRegex.test(input)){
      setIsError({show:true, msg: 'whoop make sure it\'s an email'})
    }else{
      setIsError({ show: false, msg: '' });
      setInput('')
    }
  }

  useEffect(()=>{
    setTimeout(()=>{
      setIsError({show:false, msg: ''})
    }, 10000)
  }, [isError])
  return (
    <Wrapper id='contact'>
      <div className='container'>
        <div className='header'>
          <p>35,000+ already joined</p>
          <h2>Stay up-to-date with what we’re doing</h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className={`${isError.show ? 'input-error' : null}`}
        >
          <div className='input-control'>
            <div className='input'>
              <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                type='text'
                placeholder='Enter your email address'
              />
              {isError.show && <div className="error-img">
                  <img src={ErrorIcon} alt="error-icon" />
                </div>}
            </div>

            {isError.show && <i className='error'>{isError.msg}</i>}
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
      margin-bottom: 20px;
    }

    h2 {
      margin-bottom: 40px;
      font-weight: 300;
    }
    form {
      width: 100%;

      .input-control {
        width: 100%;
        margin-bottom: 20px;

        .input {
          position: relative;
          height: 40px;

          input {
            width: 100%;
            height: 100%;
            padding: 10px 15px;
            border-radius: 5px;
            border: none;

            &::placeholder {
              font-size: 16px;
              color: var(--grayishBlue);
            }
          }
          .error-img {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 15px;
            
          }
        }

        .error {
          background: var(--softRed);
          display: block;
          text-align: left;
          padding: 5px;
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
        }
      }

      .btn {
        width: 100%;
        height: 40px;

        button {
          height: 100%;
          width: 100%;
        }
      }
    }
    .input-error {
      .input-control {
        border: 2px solid var(--softRed);
        border-radius: 5px;
        background: var(--softRed);
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
        .input-control {
          width: 70%;
          input {
            width: 100%;
            font-size: 16px;
          }
        }
        .btn {
          width: 30%;

          button {
            width: 100%;
          }
        }
      }
    }
  }
`
export default Contact
