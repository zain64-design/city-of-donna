import React from 'react'
import { Card, Table } from 'react-bootstrap';
import '../../assets/scss/components/UI/Table.scss'

const CustomTable = ({tbHeader=[],data=[],isLoading=false,error=false,renderRow}) => {
  return (
    <>
<div className='table-box table-responsive'>
      <Table className='ct-table table-borderless align-middle'>
        <thead>
          <tr>
            {tbHeader.map((header, index) => (
              <th key={index}>{header}</th>
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