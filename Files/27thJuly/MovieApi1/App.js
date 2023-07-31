import { useState } from 'react'
function App() {
  const [data, setData] = useState([])
  fetch(`https://www.omdbapi.com/?s={kushi}&apikey=58e71804`).then(
    response => response.json()
  ).then(value => setData(value.Search))
  return (
    <>
      <div>
        <h3>Movie Data</h3>
        {data.map(movies => <li>{movies.Title}, {movies.Year} ,
        <img src={movies.Poster} alt=""/></li>)}
      </div>
    </>
  )
}
export default App





//https://www.omdbapi.com/?s={search}&apikey=58e71804
//search game of thrones or star wars etc
//use your own api key





//https://www.omdbapi.com/?s={search}&apikey=58e71804
//search game of thrones or star wars etc
//use your own api key