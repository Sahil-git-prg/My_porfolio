import React from 'react'
import headshot from '../assets/headshot.svg'

export default function About(){
  return (
    <article className="grid">
      <div className="card">
        <img src={headshot} alt="Headshot of Sahil Ahlawat" />
      </div>
      <div className="card p">
        <h2>About Me</h2>
        <p><strong>Legal Name:</strong> Sahil</p>
        <p>
          I'm a Software Engineering student who enjoys React, C#, and SQL. I like building small, useful tools and learning by doing.
        </p>
        <p><a className="btn" href="/resume.pdf" target="_blank" rel="noreferrer">Open my Resume (PDF)</a></p>
      </div>
    </article>
  )
}
