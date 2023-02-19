import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import {motion} from 'framer-motion'

const Extension = ({ img, version, name }) => {
  return (
    <motion.div  whileHover={{scale:1.1}} whileTap={{scale:0.9}}>
      <Wrapper>
        <div className='content'>
          <img src={img} alt={name} />
          <h4>Add to {name}</h4>
          <p>{version}</p>
        </div>
        <div className='btn'>
          <Button label={`Add To ${name}`} />
        </div>
      </Wrapper>
    </motion.div>
  )
}

const Wrapper = styled.article`
  text-align: center;
  box-shadow: 2px 2px 8px var(--softBlue);
  margin-bottom: 25px;
  border-radius: 5px;
  .content {
    border-bottom: 4px dotted var(--grayishBlue);
    padding: 40px 0;

    img {
      margin-bottom: 20px;
    }

    h4 {
      color: var(--veryDarkBlue);
      padding-bottom: 10px;
      font-weight: 300;
      font-size: 22px;
    }
    p {
      color: var(--grayishBlue);
    }
  }
  .btn {
    padding: 20px;
    button {
      background: var(--softBlue);
      width: 100%;
      border: 2px solid var(--softBlue);
      border-radius: 5px;
      color: var(--white);
      padding: 10px 0;
      transition: 0.5s;
      cursor: pointer;

      &:hover {
        background: transparent;
        color: var(--softBlue);
      }
    }
  }

  @media screen and (min-width: 835px) {
    min-width: 300px;
  }
`
export default Extension
