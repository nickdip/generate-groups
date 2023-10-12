


export function NamesList({ names, rows }) {
    return (<table className ="namesTable">
    <tbody>
    {
      rows.map( (row, index) => { 
                                  return (<tr key={row+index} className={"group"+(index % 4)}>
                                    {names[row].map( (name, index) => ( <td key={name+index} className="name">{name}</td>) )}
                                  </tr>)
                                 })
    }
    </tbody>
  </table>)

}