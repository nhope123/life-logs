import React from 'react'

/**
 * 
 * @param {object} props - Component properties
 * @param {array} props.columns - Table header string labels
 * @param {array} props.rows - Table row values in an object form 
 */



const Table = (props) => {

 /* const col = ['col 1','col 2','col 3']
  const rows = [['cane','dahj','agdaj'],['adja','agaj','dhaj'],['cane','dahj','agdaj'],['adja','agaj','dhaj']]
*/
  const body = (!props.rows)? '0':  props.rows.map((row )=>{

    return (
      <tr key={row.id} >
      {props.columns.map(function(i, b){ 
        return (i === 'action')? (<td key={ row.id + b }>
                                    <span tabIndex={'0'} onClick={()=>row.action.callback(row.id)} >
                                      {row.action.symbol}
                                    </span>
                                  </td>) :
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
              (!props.columns)? '':  props.columns.map(header=> <th key={header} scope={'col'} >{(header === 'action')? ' ': header}</th> )
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
