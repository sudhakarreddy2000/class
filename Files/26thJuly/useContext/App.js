import CompC from './CompC'
import { createContext } from 'react'
const data = createContext()
const fname="Sudhakar"
function App() {

  return (
    <>
      <data.Provider value={fname}>
        <CompC />
      </data.Provider>
    </>
  )
}
export default App
export {data}
