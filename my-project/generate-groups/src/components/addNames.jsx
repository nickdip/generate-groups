
function AddNames(  { currentNames, updateNames }) {

    return (
        <form>
        <label htmlFor={currentNames}> Add Name(s):</label>
        <input type="text" placeholder="Darth Vadar" value={currentNames} onChange={ e => updateNames(e.target.value)}/>
        </form>
    )


}

export default AddNames;