import { useNavigate } from 'react-router-dom'
import './index.css'

function Footer () {
  const navigate = useNavigate()

  return (
    <div className='footer-wrapper'>
      <div className='footer-schedule-container'>
       <div className='footer-schedule-content'>Let's Talk</div>
       <div className='footer-schedule-content'>Thinking we may be a good match? Let's meet up for coffee or tea to be sure!</div>
       <div className='footer-button' onClick={() => navigate('/contact')}>Schedule a coffee date</div>
      </div>
      <div className='footer-contact-container'>
        <div className='footer-info-container'>
          <div className='footer-title'>Service Area</div>
          <div>
            Upstate, SC
          </div>
        </div>
        <div className='footer-info-container'>
          <div className='footer-title'>Contact</div>
          <a href={`tel:(864)-770-3227`}>(864)-770-3227</a>
          <a href={'mailto:sadiejuarez.doula@gmail.com'}>sadiejuarez.doula@gmail.com</a>
        </div>
        <div className='footer-info-container'>
          <div className='footer-title'>Follow Me</div>
          <a target='blank' href='adsgasg'>Facebook</a>
          <a target='blank' href='adsgasg'>Instagram</a>
        </div>
      </div>
    </div>
  )
}

export default Footer