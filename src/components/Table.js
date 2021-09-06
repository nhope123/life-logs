import React from 'react'

const Table = (props) => {

  const col = ['col 1','col 2','col 3']
  const rows = [['cane','dahj','agdaj'],['adja','agaj','dhaj'],['cane','dahj','agdaj'],['adja','agaj','dhaj']]

  return (
    <div>
      <table >
        <thead className={'table-primary'}>
          <tr >
            {
              props.columns.map(header=> <th key={header} scope={'col'} >{header}</th> )
            }
          </tr>
        </thead>
        <tbody >
          {
            props.rows.map((row,index)=>{
              
              return <tr key={`row ${index }`}>
                {
                  row.map((cell,cellCount)=> ( <td key={`cell ${(index + 1) * cellCount}`} >{cell}</td> ))
                }
              </tr>
            })
          }
        </tbody>
      </table>
      
    </div>
  )
}

export default Table
