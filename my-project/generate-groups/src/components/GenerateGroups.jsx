import React, { useState } from 'react';
import { groupNames } from '../utils'


function generateGroups( { names, updateNames, updateGroupedTable }) {
    const [ groupNumber, setGroupNumber ] = useState(0)
    return (
        <form>
        <label>Split everyone into</label>
        <input type="text" placeholder="1" value={groupNumber} onChange={ event => setGroupNumber(event.target.value)}/>
        <label> groups </label>
        <button type="button" onClick={() => {
        setGroupNumber(groupNumber)
        let groupedNames = groupNames(names, groupNumber)
        updateNames(groupedNames)
        updateGroupedTable(true)
        }}>Randomise group!</button>
        </form>
    )
}

export default generateGroups;