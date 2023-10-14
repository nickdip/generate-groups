
import React, { useState } from 'react';

//TODO: Work out why we need to index 0 on currentNames




function AddNames(  { currentNames, updateNamesList, setErrorMessage }) {
    const [ newName, setNewName ] = useState('')

    const addNewNames = (e) => {

        let duplicates = []
        let added = []

        let names
        e.preventDefault()

        if (/^ +$/g.test(newName)) return false
        if (newName.includes(',')) {
            names = newName.split(',')
        }

        else names = [newName]

        names.forEach( (name) => {
 
            name = name.trim()
            if (currentNames.includes(name) || added.includes(name)) {
                duplicates.push(name)
            }
            else if (name !== '') {
                added.push(name)
            }
            
        })

        if (duplicates.length === 1) setErrorMessage(`Duplicate entry was not added: ${duplicates[0]} is already in the list`)
        if (duplicates.length === 2) setErrorMessage(`Duplicate entries were not added: ${duplicates[0]} and ${duplicates[1]} are already in the list`)
        else if (duplicates.length > 2) setErrorMessage(`Duplicate entries were not added: ${duplicates.slice(0,-1).join(', ')} and ${duplicates.at(-1)} are already in the list`)
        added.forEach( (name) => updateNamesList(name) )

        setNewName('')
    }

    const enterPress = (e) => {
        if (e.key === 'Enter') {
            addNewNames(e)
        }

    }

    return (
        <form>
        <input 
            className = "add-name-input"
            type="text" 
            placeholder="e.g Darth Vader" 
            value={newName} 
            onChange={ e => setNewName(e.target.value)}
            onKeyDown={e => enterPress(e)}/>
        <button type="button" className="add-name-btn" onClick={addNewNames}>Add Name(s)</button>
        </form>
    )


}

export default AddNames