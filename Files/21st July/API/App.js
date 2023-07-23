import {useEffect } from "react";
function App() {

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  })
	return (
		<>
<h1>react</h1>
</>
	);
}
export default App;
