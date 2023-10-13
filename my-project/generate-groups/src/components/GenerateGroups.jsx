import React, { useState } from 'react';
import { groupNames } from '../utils'




function generateGroups( { namesList, setTabledNames, updateGroupedTable }) {
    console.log("namesList inside generateGroups", namesList)

    const [ groupNumber, setGroupNumber ] = useState(0)
    const [ displayedGroupNumber, setDisplayedGroupNumber ] = useState(0)

    return (
        <form>
        <label>Give Me </label>
        <input 
            type="text" 
            placeholder="1" 
            value={displayedGroupNumber} 
            onChange={ e => {
                setDisplayedGroupNumber(e.target.value)
                setGroupNumber(e.target.value)
            }}/>
        <label> Groups, Sorted By </label>
        <button type="button" onClick={() => {
            setGroupNumber(groupNumber)
            let groupedNames = groupNames(namesList, groupNumber)
            setTabledNames(groupedNames)
            updateGroupedTable(true) //sets grouped to true
            setDisplayedGroupNumber(groupNumber)
        }}>Number of Groups</button>

        <button type="button" onClick={() => {
            let newGroupNumber = Math.ceil(namesList.length / groupNumber)
            setGroupNumber(newGroupNumber)
            let groupedNames = groupNames(namesList, newGroupNumber)
            setTabledNames(groupedNames)
            updateGroupedTable(true) //sets grouped to true
            setDisplayedGroupNumber(groupNumber)
        }}>Max Group Size</button>

        </form>
    )
}

export default generateGroups;