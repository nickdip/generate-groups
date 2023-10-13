import React, { useState } from 'react';
import { groupNames } from '../utils'




function generateGroups( { namesList, setTabledNames, updateGroupedTable }) {
    console.log("namesList inside generateGroups", namesList)

    const [ groupNumber, setGroupNumber ] = useState(0)
    return (
        <form>
        <label>Split everyone into</label>
        <input 
            type="text" 
            placeholder="1" 
            value={groupNumber} 
            onChange={ e => setGroupNumber(e.target.value)}/>
        <label> groups </label>
        <button type="button" onClick={() => {
            setGroupNumber(groupNumber)
            let groupedNames = groupNames(namesList, groupNumber)
            setTabledNames(groupedNames)
            updateGroupedTable(true) //sets grouped to true
        }}>Randomise group!</button>
        </form>
    )
}

export default generateGroups;