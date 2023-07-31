import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import About from './About'
import Services from './Services'
import Courses from './Courses'
import Contact from './Contact'
function App(){
  return(
    <>
    <h1>Example of Routing</h1>
    <BrowserRouter>
    {/* <a href='/'>Home</a>
    <a href='/services'>Services</a>
    <a href='/courses'>Courses</a>
    <a href='/contact'>Contact</a> */}
    <Link to='/'>Home</Link>
    <Link to='/services'>Services</Link>
    <Link to='/courses'>Courses</Link>
    <Link to='/contact'>Contact</Link>
    <Routes>
      <Route path='/' element={<About/>}/>  
      <Route path='/services' element={<Services/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/contact' element={<Contact/>}/>      
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App

