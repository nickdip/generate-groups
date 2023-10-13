import { useState } from 'react'
import { generateTable, exampleNames, header } from './utils'
import Header from './components/Header'
import { NamesList } from './components/NamesList'
import './App.css'
import GenerateGroups from './components/generateGroups'
import AddNames from './components/addNames'
import Error from './components/Error'

function App() {


  function updateGroupedTable(bool) {
    setGroupedTable(bool)
  }

  function updateNamesList(names) {
    setNamesList((currentNames) => {
      const newList = [...currentNames, names]
      setTabledNames(generateTable(newList))
      return newList
    })
  }


  const [ namesList, setNamesList ] = useState([])
  const [ tabledNames, setTabledNames ] = useState({0: []})
  const [ groupedTable, setGroupedTable ] = useState(false)
  const [ errorMessage, setErrorMessage ] = useState("")

  const rows = Object.keys(tabledNames)
 
  return (
    <div className = "App">
      < Header message={header} />
      < NamesList names={ tabledNames } rows={rows} groupBool = { groupedTable }/>
      < AddNames currentNames={namesList} 
                  updateNamesList={updateNamesList}
                  setErrorMessage={setErrorMessage} />
      < GenerateGroups namesList={namesList} 
                        setTabledNames={setTabledNames} 
                        updateGroupedTable={updateGroupedTable}/>
      < Error error={errorMessage}/>
      <button onClick={()=>{location.reload()}}>Reset</button>
    </div>
      )
}

export default App

//https://upmostly.com/tutorials/react-onchange-events-with-examples