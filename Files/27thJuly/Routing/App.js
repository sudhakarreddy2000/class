import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App(){
  return(
    <>
    <h1>Example of Routing</h1>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<h3>First Page</h3>}/>  
      <Route path='/one' element={<h3>Page ONE</h3>}/>
      <Route path='/two' element={<h3>Page TWO</h3>}/>
      <Route path='/three' element={<h3>Page THREE</h3>}/>      
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App

