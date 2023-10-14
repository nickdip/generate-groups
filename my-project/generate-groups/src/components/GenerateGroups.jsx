import React, { useState } from 'react';
import { groupNames } from '../utils'


//TO DO: bug

function generateGroups( { namesList, setTabledNames, updateGroupedTable }) {

    const [ groupNumber, setGroupNumber ] = useState(0)
    const [ displayedGroupNumber, setDisplayedGroupNumber ] = useState(0)
    const [ reverseGroupNumber, setReverseGroupNumber ] = useState(false)

    return (
        <form className="group-form">
        <label>Give Me </label>
        <input 
            className="group-number-input"
            type="text" 
            placeholder="1" 
            value={displayedGroupNumber} 
            onChange={ e => {
                setDisplayedGroupNumber(e.target.value)
                setGroupNumber(e.target.value)
            }}/>
            <label> Groups, Sorted By: </label>
            <div className="group-number">
            <button type="button" className="group-button" onClick={() => {
                if (reverseGroupNumber) {
                    setReverseGroupNumber(false)
                }
                setGroupNumber(groupNumber)
                let groupedNames = groupNames(namesList, groupNumber)
                setTabledNames(groupedNames)
                updateGroupedTable(true) //sets grouped to true

            }}>Number of Groups</button>

            <button type="button" className="group-button" onClick={() => {
                let newGroupNumber
                if (!reverseGroupNumber) {
                    newGroupNumber = Math.ceil(namesList.length / groupNumber)
                    setReverseGroupNumber(true)
                }
                else {
                    newGroupNumber = groupNumber
                }
                setGroupNumber(newGroupNumber)
                let groupedNames = groupNames(namesList, newGroupNumber)
                setTabledNames(groupedNames)
                updateGroupedTable(true) //sets grouped to true
            }}>Max Group Size</button>
            </div>
        </form>
    )
}

export default generateGroups;