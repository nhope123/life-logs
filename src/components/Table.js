import React from 'react'

const Table = (props) => {

 /* const col = ['col 1','col 2','col 3']
  const rows = [['cane','dahj','agdaj'],['adja','agaj','dhaj'],['cane','dahj','agdaj'],['adja','agaj','dhaj']]
*/
  const body = props.rows.map((row,j )=>{

    return (
      <tr key={row.id} >
      {props.columns.map(function(i, b){ 
        return (i === 'action')? (<td key={ row.id + b }><span tabIndex={'0'} onClick={()=>row.action.callback(row.id)} >{row.action.symbol}</span></td>) :
        (<td key={`${row.id + b}`} >{row[i]}</td>)} )}
      </tr >
    )
  });

  return (
    <div>
      <table >
        <thead className={'table-primary'}>
          <tr >
            {
              props.columns.map(header=> <th key={header} scope={'col'} >{(header === 'action')? ' ': header}</th> )
            }
          </tr>
        </thead>
        <tbody >
          {
            body
          }
        </tbody>
      </table>
      
    </div>
  )
}

export default Table
