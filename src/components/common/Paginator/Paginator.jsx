import React from 'react';
import './Paginator.scss';

function Paginator(props) {
  const pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((p) => (
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
    </div>
  );
}

export default Paginator;
