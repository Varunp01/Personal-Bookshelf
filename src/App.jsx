import Cards from './Cards';
import { useState } from 'react'
// import './App.css'
import SearchBox from './SearchBox'
import SearchCards from './SearchCards'

function App() {
  const [queries, setQueries] = useState("")

  let change=(tem)=>{
    setQueries(tem);
  }

  
  return (
    <>
    <SearchBox change={change}></SearchBox>
    <SearchCards queries={queries}></SearchCards>
    </>
  )
}

export default App
