import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

export default function App(){
  const { search } = useLocation()
  const showSuccess = new URLSearchParams(search).get('submitted') === '1'
  return (
    <>
      <NavBar />
      <main className="container" role="main">
        {showSuccess && (
          <div className="success" role="status" aria-live="polite">
            ✅ Thanks! Your message was captured. I will get back to you soon.
          </div>
        )}
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
