
function addNames() {

    return (
        <form>
        <input type="text" placeholder="Darth Vadar" value={groupNumber} onChange={ event => setGroupNumber(event.target.value)}/>
        <label> groups </label>
        <button type="button" onClick={() => {
        }}>Add Name!</button>
        </form>
    )


}