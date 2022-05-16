import React, { useContext } from "react";
import { Pagination } from "react-bootstrap";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
import { observer } from "mobx-react-lite";
import "./pagination.css";
import { Context } from "../../index";

export const PaginationPages = observer(() => {
  const { artwork } = useContext(Context);
  const pageCount = Math.ceil(artwork.totalCount / artwork.limit);
  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  return (
    <div>
      <Pagination className="pagiantion">
        <Pagination.Prev>
          <CgArrowLongLeft size={24} />
        </Pagination.Prev>
        {pages.map((page) => (
          <Pagination.Item
            key={page}
            active={artwork.page === page}
            onClick={() => artwork.setPage(page)}
          >
            {page}
          </Pagination.Item>
        ))}
        {/* <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item active>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item> */}
        <Pagination.Next>
          <CgArrowLongRight size={24} />
        </Pagination.Next>
      </Pagination>
    </div>
  );
});
