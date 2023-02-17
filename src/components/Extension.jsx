import React from 'react'
import styled from 'styled-components'

const Extension = () => {
  return (
    <Wrapper>
      <div className='header'>
        <h3>Download the extension</h3>
        <p>
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 25px;
  .header {
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
  }
`

export default Extension