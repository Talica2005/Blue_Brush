import React from "react";
import { Pagination } from "react-bootstrap";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
import "./pagination.css";

export const PaginationPages = () => {
  return (
    <div>
      <Pagination className="pagiantion">
        <Pagination.Prev>
          <CgArrowLongLeft size={24} />
        </Pagination.Prev>
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item active>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
        <Pagination.Next>
          <CgArrowLongRight size={24} />
        </Pagination.Next>
      </Pagination>
    </div>
  );
};
