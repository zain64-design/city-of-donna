import React from 'react';
import { Pagination } from 'react-bootstrap';
import { LuChevronRight } from "react-icons/lu";
import '../../assets/scss/components/UI/Paginations.scss'

const Paginations = ({ctClass=""}) => {
  return (
    <>
      <div className={`pagination-wrap ${ctClass}`}>
        <span>page</span>
        <Pagination>
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Item>{4}</Pagination.Item>
          <Pagination.Item>{5}</Pagination.Item>
          <Pagination.Next>
            <LuChevronRight />
          </Pagination.Next>
        </Pagination>
      </div>
    </>
  )
}

export default Paginations;