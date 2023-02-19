import * as React from 'react'
import { styled } from '@mui/material/styles'
import Styled from 'styled-components'
import { questions } from '../utils'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import { ReactComponent as ArrowIcon } from '../assets/images/icon-arrow.svg'
import Button from './Button'

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: 0,
  borderBottom: '2px solid var(--grayishBlue)',
  '&:not(:last-child)': {
    borderBottom: '2px solid red',
  },
  '&:before': {
    display: 'none',
  },
}))

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowIcon className='arrow-icon' sx={{ fontSize: '.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'transparent',
  flexDirection: 'row',
  padding:'10px 0',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(-180deg)',
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded path': {
    stroke: 'var(--softRed)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: 0,
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: '20px 0',
}))

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState(['panel1'])

  const handleChange = (panel) => (event, newExpanded) => {
    console.log(`Panel ${panel} is ${newExpanded ? 'expanded' : 'collapsed'}`)
    console.log(newExpanded)
    setExpanded(newExpanded ? panel : false)
  }
  
  return (
    <Wrapper>
      <div className='container'>
        <div className='header'>
          <h2>Frequently Asked Questions</h2>
          <p>
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
        </div>
        {questions.map((question) => {
          return (
            <div key={question.id}>
              <Accordion
                expanded={expanded === `panel${question.id}`}
                onChange={handleChange(`panel${question.id}`)}
              >
                <AccordionSummary
                  aria-controls='panel1d-content'
                  id='panel1d-header'
                >
                  <Typography>
                    <span className='question'>{question.ques}</span>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <span className='answer'>{question.ans}</span>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          )
        })}
        <div className='btn'>
          <Button type={'primary'} label={'more info'}/>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = Styled.section`
 .container {
  padding: 50px 25px;
  .header{
   text-align: center;
   margin-bottom: 40px;

   h2{
    color: var(--veryDarkBlue);
    padding-bottom: 15px;
    font-weight: 500;
    font-size: 25px;
    line-height: 1.3;
   }
   p{
    color: var(--grayishBlue);
    line-height: 1.5;
   }
  }
  .question{
      font-size: 15px;
      font-weight: 100;
      color: var(--veryDarkBlue);
      transition: .5s;

      &:hover{
        color: var(--softRed);
      }
    }
  .answer{
   color: var(--grayishBlue);
  }
  .btn{
   text-align: center;
   margin-top: 50px;
   
  }
 }
  @media screen and (min-width: 835px) {
    max-width: 1440px;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    align-items: center;
  .container {
    width: 50%;
    margin: 0 auto;
    .question{
     font-size: 18px;
    }

   .answer{
    font-size: 18px;
   }
  }
 }
 
`
// export default Question
