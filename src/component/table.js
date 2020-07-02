import React from 'react';
import Posts from './posts';


function Table() {
  return (
    <div >
        <table>
            <tr className='row' >
                <td className='column 'style={{width:"33%",marginTop:'1%'}}>
                    
                </td>
                <td className='column' style={{width:'33%'}}>
                    <Posts />
                </td>
                <td className='column' style={{width:'33%',marginTop:'1%',paddingTop:'0px'}}>
                   
                </td>
            </tr>            
        </table>
    </div>
  );
}

export default Table;