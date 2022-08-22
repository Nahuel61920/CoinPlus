import React from "react";

export default function Paginate({
  crypsPerPage,
  cryptos,
  paginate,
  }) {
  const pageNumbers = [];

  for (let i = 0; i <= Math.ceil(cryptos / crypsPerPage) - 1; i++) {
    pageNumbers.push(i + 1);
  }

  return (
    <ul >
      {pageNumbers &&
        pageNumbers.map(
          (
            number //map para recorrer el array
          ) => (
            <button
              key={number}
              onClick={() => paginate(number)}
            >
              {" "}
              {/* si el numero de pagina es igual al currentPage, le pongo la clase active /}{/ muestro el numero de pagina */}
              <p>{number}</p>
            </button>
          )
        )}
    </ul>
  );
}




