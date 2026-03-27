import React, { useState } from 'react';

// const Pagination = ({ totalPages, currentPage, onPageChange }) => {
//   const [page, setPage] = useState(currentPage);


//   const handleClick = (newPage) => {
//     if (newPage >= 1 && newPage <= totalPages) {
//       setPage(newPage);
//       onPageChange(newPage);
//     }
//   };

//   return (
//     <div className="pagination">
//       {/* Кнопка "Предыдущая" */}
//       <button
//         onClick={() => handleClick(page - 1)}
//         disabled={page === 1}
//       >
//         &laquo;
//       </button>

//       {/* Номера страниц */}
//       {[...Array(totalPages)].map((_, index) => (
//         <button
//           key={index + 1}
//           onClick={() => handleClick(index + 1)}
//           className={page === index + 1 ? 'active' : ''}
//         >
//           {index + 1}
//         </button>
//       ))}

//       {/* Кнопка "Следующая" */}
//       <button
//         onClick={() => handleClick(page + 1)}
//         disabled={page === totalPages}
//       >
//         &raquo;
//       </button>
//     </div>
//   );
// };

// export default Pagination;

const PaginationCompact = ({ totalPages, currentPage, onPageChange }) => {
  const getPagesToShow = () => {
    const pages = [];
    const maxVisible = 5; // Максимум видимых кнопок

    if (totalPages <= maxVisible) {
      return [...Array(totalPages).keys()].map(i => i + 1);
    }

    // Логика отображения: текущая страница + 2 слева и справа
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, currentPage + 2);

    // Если слева мало страниц, сдвигаем вправо
    if (start === 1) end = Math.min(maxVisible, totalPages);
    // Если справа мало страниц, сдвигаем влево
    if (end === totalPages) start = Math.max(totalPages - maxVisible + 1, 1);

    return [...Array(end - start + 1).keys()].map(i => start + i);
  };

  return (
    <div className="pagination">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} style={{color:'orange'}}>
        &laquo;
      </button>

      {getPagesToShow().map((pageNum) => (
        <button
          key={pageNum}
          onClick={() => onPageChange(pageNum)}
          className={currentPage === pageNum ? 'active' : ''}
        >
          {pageNum}
        </button>
      ))}

      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} style={{color:'orange'}}>
        &raquo;
      </button>
    </div>
  );
};

export default PaginationCompact;