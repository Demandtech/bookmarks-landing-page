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
            <input type='text' />
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
`
export default NewsLetter
