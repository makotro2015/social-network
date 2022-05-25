import React, { useState } from 'react';
import './Paginator.scss';

const Paginator = ({ portionSize = 10, ...props }) => {
  const pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className="paginator">
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          Назад
        </button>
      )}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber,
        )
        .map((p) => (
          <span
            key={p.id}
            className={props.currentPage === p ? 'currentPage' : ''}
            onClick={() => {
              props.changeCurrentPage(p);
            }}
          >
            {p}
          </span>
        ))}
      {portionCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          Вперед
        </button>
      )}
    </div>
  );
};

export default Paginator;
