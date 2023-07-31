import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from './About'
import Services from './Services'
import Courses from './Courses'
import Contact from './Contact'
function App() {
  return (
    <>
        <BrowserRouter>
      <div className="container">
        <div className='row bg-body-tertiary'>
          <div className='col-md-12'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <Link to='/' className="navbar-brand">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link to='/services' className="nav-link active" aria-current="page" >Services</Link>
                    </li>
                    <li className="nav-item">
                    <Link to='/courses' className="nav-link" >Courses</Link>
                    </li>
                    <li className="nav-item">
                    <Link to='/contact' className="nav-link" >Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>

 
        </div>
      <Routes>
          <Route path='/' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>



    </>
  )
}
export default App

