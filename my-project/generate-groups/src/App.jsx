import { useState } from 'react'
import { generateTable, exampleNames, header } from './utils'
import Header from './components/Header'
import { NamesList } from './components/NamesList'
import './App.css'
import GenerateGroups from './components/generateGroups'

function App() {

  function updateNames(newName) {
    setNames(newName)
  }

  function updateGroupedTable(bool) {
    setGroupedTable(bool)
  }


  const names = exampleNames
  const tabledNames = generateTable(names)
  const [ inputNames, setNames ] = useState(tabledNames)
  const [ groupedTable, setGroupedTable ] = useState(false)
  const rows = Object.keys(inputNames)
  console.log(rows)
  return (
    <div className = "App">
      < Header message={header} />
      < NamesList names={ inputNames } rows={rows} groupBool = { groupedTable }/>
      < GenerateGroups names={names} updateNames={updateNames} updateGroupedTable={updateGroupedTable}/>
      <button onClick={()=>{location.reload()}}>Reset</button>
    </div>
      )
}

export default App

//https://upmostly.com/tutorials/react-onchange-events-with-examples