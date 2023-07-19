import user from './user1.json'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'
function App() {
  const [search, setSearch] = useState()
  const test = (e) => {
    setSearch(e.target.value)
  }
  return (
    <>

      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h1>JSON Data in React</h1>
            <input type="text" placeholder="search here..." value={search} onChange={test} className='form-control' />
          </div>
        </div>
        <div className='row'>
        {user.filter(x => x.pic.includes(search)).map(val =>
          <div className='col-md-4'>
            <div className="card">
             <img src={val.pic} className="img-fluid" alt="" />
              <div class="card-body">
                  <h5 className="card-title">{val.name}</h5>
                  </div>
            </div>
            
          </div>
          )}
        </div>
      </div>

      <br />
      {/* {user.filter(x => x.pic.includes(search)).map(val => <img src={val.pic} alt="" />)} */}

    </>
  )
}
export default App