import React from "react";

export default function Paginate({
  crypsPerPage,
  cryptos,
  paginate,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(cryptos / crypsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className=" my-3 d-flex justify-content-center align-item-center">
      <div className="d-flex justify-content-center align-item-center">
        <button
          className={
            currentPage === 1
              ? "disabled buttonLogin bg-secondary rounded h-75"
              : "enabled buttonLogin rounded h-75"
          }
          disabled={currentPage === 1 ? true : false}
          onClick={() => paginate(currentPage - 1)}
        >
          &laquo;&laquo;
        </button>
        {currentPage - 1 === 0 ? null : (
          <p className="text-title pt-1 mx-3">{currentPage - 1}</p>
        )}
        <p className="text-title pt-1 mx-3 text-primary">{currentPage}</p>
        <p className="text-title pt-1 mx-3">{currentPage + 1}</p>
        <button
          className={
            currentPage === pageNumbers.length
              ? "disabled buttonLogin bg-secondary rounded h-75"
              : "enabled buttonLogin rounded h-75"
          }
          disabled={currentPage === pageNumbers.length ? true : false}
          onClick={() => paginate(currentPage + 1)}
        >
          &raquo;&raquo;
        </button>
      </div>
    </div>
  );
}
