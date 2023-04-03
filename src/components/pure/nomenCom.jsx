import React, { useState } from "react";

const ListComponent = ({ list }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Calcula el índice del primer y último elemento de la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Filtra la lista para mostrar solo los elementos de la página actual
  const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);

  // Calcula el número total de páginas
  const totalPages = Math.ceil(list.length / itemsPerPage);

  // Función para cambiar a la siguiente página
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Función para cambiar a la página anterior
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <ul>
        {currentItems.map((item) => (
          <li key={item.id_gis}>
            {item.id_gis}
            <button>Edit</button>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={prevPage}>Anterior</button>
        <button onClick={nextPage}>Siguiente</button>
      </div>
    </div>
  );
};

export default ListComponent;