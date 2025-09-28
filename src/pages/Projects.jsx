import React from 'react';
import studentLogo from '../assets/student-manager.svg';
import linuxLogo from '../assets/linux-scripts.svg';
import bikestoreLogo from '../assets/bikestore-sql.svg';

const projects = [
  {
    title: 'Student Manager (C# WinForms)',
    role: 'Developer',
    img: studentLogo,
    desc: 'CRUD app with JSON storage, validation, and a clean UI.'
  },
  {
    title: 'Linux Scripts Pack (Bash)',
    role: 'Author',
    img: linuxLogo,
    desc: 'Automated backups, file processing, and user management tasks.'
  },
  {
    title: 'BikeStore SQL Reports',
    role: 'Analyst',
    img: bikestoreLogo,
    desc: 'Joins, subqueries, and views to answer business questions.'
  }
];

export default function Projects(){
  return (
    <section>
      <h2>Projects</h2>
      <div className="grid">
        {projects.map(p => (
          <article className="card" key={p.title}>
            <img src={p.img} alt="Project logo" className="project-logo"/>
            <div className="p">
              <h3>{p.title}</h3>
              <p><em>Role:</em> {p.role}</p>
              <p>{p.desc}</p>
            </div>
          </article>
        ))}
      </div>
      <p style={{marginTop:'1rem'}}>Each project has a short description of my role and the outcome.</p>
    </section>
  )
}
