export default function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div>© {year} Sahil Ahlawat. All rights reserved.</div>
        <div style={{marginTop:'.25rem'}}>
          Email: <a href="mailto:ahlawatsahil1324@gmail.com">ahlawatsahil1324@gmail.com</a> · Brampton, ON ·
          {' '}
          <a href="https://github.com/Sahil-git-prg" target="_blank" rel="noreferrer">GitHub</a> ·
          {' '}
          <a href="https://www.linkedin.com/in/sahil-ahlawat-135436387/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}