import { useState } from 'react'
import { generateTable, exampleNames, header } from './utils'
import Header from './components/Header'
import { NamesList } from './components/NamesList'
import './App.css'
import GenerateGroups from './components/generateGroups'
import AddNames from './components/addNames'

function App() {

  function updateNames(event) {
    setNames(newName)
  }

  function updateGroupedTable(bool) {
    setGroupedTable(bool)
  }


  const names = []
  const tabledNames = generateTable(names)
  const [ inputNames, setNames ] = useState(tabledNames)

  const [ groupedTable, setGroupedTable ] = useState(false)
  const rows = Object.keys(inputNames)
 
  return (
    <div className = "App">
      < Header message={header} />
      < NamesList names={ inputNames } rows={rows} groupBool = { groupedTable }/>
      < AddNames names={names} updateNames={updateNames} />
      < GenerateGroups names={names} updateNames={updateNames} updateGroupedTable={updateGroupedTable}/>
      <button onClick={()=>{location.reload()}}>Reset</button>
    </div>
      )
}

export default App

//https://upmostly.com/tutorials/react-onchange-events-with-examples