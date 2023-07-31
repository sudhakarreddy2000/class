import { useContext } from 'react'
import {data} from './App'
function CompC(){
    const firstname=useContext(data)
    return(
          <>
    <h2>My name is {firstname}</h2>
      </>
    )
    }
    export default CompC