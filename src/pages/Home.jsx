import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <section className="hero">
      <div className="container">
        <span className="badge">Welcome</span>
        <h1>Hello, I'm <em>Sahil</em>.</h1>
        <p>
          I build clean, accessible web apps. This portfolio showcases my work, the services I offer,
          and how to get in touch.
        </p>
        <p><strong>Mission:</strong> Deliver reliable, user‑friendly software that helps people do their work faster.</p>
        <div style={{marginTop:'1rem'}}>
          <Link className="btn" to="/about">About Me</Link>{' '}
          <Link className="btn secondary" to="/projects">See Projects</Link>
        </div>
      </div>
    </section>
  )
}
