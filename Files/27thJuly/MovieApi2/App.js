import {useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
function App(){
  const [search, setSearch]=useState('')
  const [data,setData]=useState([])
  const submitHandler=e=>{
    e.preventDefault()
    fetch(`https://www.omdbapi.com/?s={search}&apikey=58e71804`).then(
      response=>response.json()
    // ).then(data=>console.log(data))
    // ).then(data=>console.log(data.Search))
    ).then(value=>setData(value.Search))
  }
  return(
    <>


          <div>
            
           

            {/* {data.map(movies=><li>{movies.Title}</li>)} */}
            <div className='container'>
              <div className='row'>
                <div className='col-md-12 text-center'>
                <h2 className='text-center text-primary'>Search Movies</h2>
                <form onSubmit={submitHandler}>
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} className="form-control"/> <br/>
            <input type="submit" className='btn btn-success'/>
            </form>
                </div>
              </div>
              <div className='row'>
              {data.map(movies=>
                <div className='col-md-4'>
                
            <div className="card">
  <img src={movies.Poster} className="card-img-top" alt="poster"/>
  <div className="card-body">
    <h5 className="card-title text-center">{movies.Title}</h5>
    <h6 className="card-title text-center">{movies.Year}</h6>
    
  </div>
</div>

                </div>
                )}
              </div>
            </div>
            
          </div>
    </>
  )
}
export default App





//https://www.omdbapi.com/?s={search}&apikey=58e71804
//search game of thrones or star wars etc
//use your own api key