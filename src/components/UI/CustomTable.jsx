import React from 'react'
import { Table } from 'react-bootstrap';

const CustomTable = ({tbHeader=[],tbClass='',data=[],isLoading=false,error=false,renderRow}) => {
  return (
    <>
<div className={`table-responsive ${tbClass}`}>
      <Table className='ct-table table-borderless align-middle'>
        <thead>
          <tr>
            {tbHeader?.map((header, index) => (
              <th key={index} colSpan={header.colspan && header.colspan }>{header.text}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {error ? (
            <tr>
              <td colSpan={tbHeader.length} className="text-danger text-center">
                Error: {error}
              </td>
            </tr>
          ) : isLoading ? (
            <tr>
              <td colSpan={tbHeader.length} className="text-center">
                Loading...
              </td>
            </tr>
          ) : (
            data?.map((value) => renderRow(value))
          )}
        </tbody>
      </Table>
    </div>
    </>
  )
}

export default CustomTable