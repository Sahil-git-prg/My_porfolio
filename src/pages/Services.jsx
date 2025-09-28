import React from 'react'

const services = [
  { name: 'Web Development', desc: 'React SPAs, responsive HTML/CSS, simple Node backends.' },
  { name: 'Programming Help', desc: 'C#, Java, and SQL practice tutoring and debugging.' },
  { name: 'Automation', desc: 'Bash scripts to speed up daily tasks.' }
]

export default function Services(){
  return (
    <section>
      <h2>Services</h2>
      <div className="grid">
        {services.map(s => (
          <article className="card p" key={s.name}>
            <h3>{s.name}</h3>
            <p>{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
