import React from 'react';

const Pagination = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    if (totalPages === 1) return null;

    return (
        <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index}
                    className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
                    onClick={() => onPageChange(index + 1)}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
