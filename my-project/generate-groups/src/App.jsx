import { useState } from 'react'
import { generateTable, exampleNames, header, groupNames } from './utils'
import Header from './components/Header'
import { NamesList } from './components/NamesList'
import './App.css'

function App() {


  const names = exampleNames
  const tabledNames = generateTable(names)
  const [ ungroupedNames, setNames ] = useState(tabledNames)
  const [ groupNumber, setGroupNumber ] = useState(1)
  const rows = Object.keys(ungroupedNames)
  return (
    <div className = "App">
      < Header message={header} />
      < NamesList names={ungroupedNames} rows={rows}/>
      <form>
        <label>Split everyone into</label>
        <input type="text" placeholder="1" value={groupNumber} onChange={ event => setGroupNumber(event.target.value)}/>
        <label> groups </label>
        <button type="button" onClick={() => {
          setGroupNumber(groupNumber)
          let groupedNames = groupNames(names, groupNumber)
          setNames(groupedNames)
        }}>Randomise group!</button>
      </form>
        <button onClick={()=>{location.reload()}}>Reset</button>
    </div>
      )
}

export default App

//https://upmostly.com/tutorials/react-onchange-events-with-examples