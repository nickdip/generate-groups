


export function NamesList({ names, rows, groupBool }) {

    if (!names[0].length) return null
    
    let group = groupBool ? "grouped" : "ungrouped"
    return (<table className ={group + "-namesTable"}>
    <tbody>
    {
      rows.map( (row, index) => { 
                                  return (<tr key={row+index} className={ group + "-row-"+(index % 4)}>
                                    {names[row].map( (name, index) => ( <td key={name+index} className={group +"-name"}>{name}</td>) )}
                                  </tr>)
                                 })
    }
    </tbody>
  </table>)

}