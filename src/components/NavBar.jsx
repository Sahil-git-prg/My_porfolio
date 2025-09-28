import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'

const LinkItem = ({to, children}) => (
  <li><NavLink to={to} end className={({isActive}) => isActive ? 'active' : undefined }>{children}</NavLink></li>
)

export default function NavBar(){
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="brand" href="/">
          <img src={logo} alt="Site logo"/>
          <strong>Sahil</strong>
        </a>
        <nav aria-label="Primary">
          <ul className="menu">
            <LinkItem to="/">Home</LinkItem>
            <LinkItem to="/about">About</LinkItem>
            <LinkItem to="/projects">Projects</LinkItem>
            <LinkItem to="/services">Services</LinkItem>
            <LinkItem to="/contact">Contact</LinkItem>
          </ul>
        </nav>
      </div>
    </header>
  )
}
