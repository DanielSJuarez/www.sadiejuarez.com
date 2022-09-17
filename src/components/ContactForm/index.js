import { useState } from 'react'
import './index.css'

function ContactForm () {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = () => {
    console.log('hi')
  }

  return (
    <div className='contact-form-wrapper'>
      <div className='contact-form-container'>
        <div className='contact-form-title'>Contact Me</div>
        <form onSubmit={onSubmit}>
          <div  className='contact-input-container'>
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" required placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" required placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
          </div>
          <div  className='contact-input-container'>
            <label htmlFor="date">Estimated Due Date</label>
            <input type="date" id="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)}/>
          </div>
          <div  className='contact-input-container'>
            <label htmlFor="email">
              Email
            </label>
            <input type="email" id="email"  placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div  className='contact-input-container'>
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" value={phone} onChange={(e) => setPhone(e.target.value)}/>
          </div>
          <div className='contact-input-container'>
            <label htmlFor="message">Tell me a little about yourself, and what you want out of your birth</label>
            <textarea  id="message" placeholder='Preferences....' value={message} onChange={(e) => setMessage(e.target.value)}/>
          </div>
          <div className='form-button' type="submit">Submit</div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
  