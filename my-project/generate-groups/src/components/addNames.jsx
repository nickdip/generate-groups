
import React, { useState } from 'react';

//TODO: Work out why we need to index 0 on currentNames




function AddNames(  { currentNames, updateNamesList }) {

    const [ newName, setNewName ] = useState('')

    const addNewNames = (e) => {
        let names
        e.preventDefault()
        if (/^ +$/g.test(newName)) return false
        if (newName.includes(',')) {
            names = newName.split(',')
        }
        else names = [newName]
        names.forEach( name => {
            if (name !== '') {
                updateNamesList(name)
            }
        })
        setNewName('')
    }

    const enterPress = (e) => {
        if (e.key === 'Enter') {
            addNewNames(e)
        }

    }

    return (
        <form>
        <label htmlFor={currentNames}> Add Name(s):</label>
        <input 
            type="text" 
            placeholder="Darth Vadar" 
            value={newName} 
            onChange={ e => setNewName(e.target.value)}
            onKeyDown={e => enterPress(e)}/>
        <button type="button" onClick={addNewNames}>Add Name(s)</button>
        </form>
    )


}

export default AddNames