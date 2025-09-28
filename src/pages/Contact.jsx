import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact(){
  const nav = useNavigate()
  const [form, setForm] = useState({ firstName:'', lastName:'', contactNumber:'', email:'', message:'' })
  const [errors, setErrors] = useState({})

  function validate(){
    const e = {}
    if(!form.firstName) e.firstName = 'Required'
    if(!form.lastName) e.lastName = 'Required'
    if(!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email'
    if(!form.message) e.message = 'Required'
    return e
  }

  function onSubmit(ev){
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if(Object.keys(e).length === 0){
      // "Capture" info (no backend) — store locally, then redirect home.
      const messages = JSON.parse(localStorage.getItem('messages') || '[]')
      messages.push({...form, createdAt: new Date().toISOString()})
      localStorage.setItem('messages', JSON.stringify(messages))
      nav('/?submitted=1')
    }
  }

  return (
    <section className="grid">
      <div className="panel">
        <h2>Contact</h2>
        <p><strong>Email:</strong> <a href="mailto:ahlawatsahil1324@gmail.com">ahlawatsahil1324@gmail.com</a></p>
        <p><strong>Location:</strong> Brampton, ON</p>
      </div>
      <form className="panel" onSubmit={onSubmit} noValidate aria-label="Contact form">
        <h3>Send a message</h3>
        <div className="row">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" value={form.firstName} onChange={e=>setForm({...form, firstName:e.target.value})} aria-invalid={!!errors.firstName} aria-describedby="firstName-err"/>
            {errors.firstName && <small id="firstName-err" style={{color:'#dc2626'}}>{errors.firstName}</small>}
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" value={form.lastName} onChange={e=>setForm({...form, lastName:e.target.value})} aria-invalid={!!errors.lastName} aria-describedby="lastName-err"/>
            {errors.lastName && <small id="lastName-err" style={{color:'#dc2626'}}>{errors.lastName}</small>}
          </div>
        </div>
        <div className="row">
          <div>
            <label htmlFor="contactNumber">Contact Number</label>
            <input id="contactNumber" value={form.contactNumber} onChange={e=>setForm({...form, contactNumber:e.target.value})}/>
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} aria-invalid={!!errors.email} aria-describedby="email-err"/>
            {errors.email && <small id="email-err" style={{color:'#dc2626'}}>{errors.email}</small>}
          </div>
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} aria-invalid={!!errors.message} aria-describedby="message-err"/>
          {errors.message && <small id="message-err" style={{color:'#dc2626'}}>{errors.message}</small>}
        </div>
        <div className="actions">
          <button className="btn" type="submit">Send</button>
          <button className="btn secondary" type="reset" onClick={()=>{setForm({firstName:'',lastName:'',contactNumber:'',email:'',message:''}); setErrors({})}}>Clear</button>
        </div>
      </form>
    </section>
  )
}
