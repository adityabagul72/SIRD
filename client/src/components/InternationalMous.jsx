import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import Footer from './Footer';

// Pagination Component
const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const visiblePageNumbers = 5;
  const startPage = Math.max(1, currentPage - Math.floor(visiblePageNumbers / 2));
  const endPage = Math.min(totalPages, startPage + visiblePageNumbers - 1);

  const pageNumbers = [...Array(endPage - startPage + 1).keys()].map(n => startPage + n);

  return (
    <div className="flex items-center justify-center space-x-4">
      {/* Previous button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`text-blue-500 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        Previous
      </button>

      {/* Page number buttons */}
      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`text-blue-500 ${currentPage === number ? 'font-bold' : ''}`}
        >
          {number}
        </button>
      ))}

      {/* Next button */}
      {totalPages > visiblePageNumbers && currentPage < totalPages && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`text-blue-500 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Next
        </button>
      )}
    </div>
  );
};

function InternationalMous() {
  const [moUs, setMoUs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    // Fetch MoU data from your API
    axios.get('http://localhost:3000/api/all-mous')
      .then(response => {
        setMoUs(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching MoUs:', error);
        setLoading(false);
      });
  }, []);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = moUs.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(moUs.length / itemsPerPage);

  const changePage = (page) => {
    setCurrentPage(page);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-24 h-24 border-4 border-t-4 border-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-8 py-8 mt-16 font-poppins">
        <h1 className="text-3xl font-bold mb-10 text-center text-blue-500">International MoUs</h1>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th className='text-black text-[16px] font-bold'>Sr.no</th>
                <th className='text-black text-[16px] font-bold'>University Name</th>
                <th className='text-black text-[16px] font-bold'>Country</th>
                <th className='text-black text-[16px] font-bold'>MoU Year</th>
                <th className='text-black text-[16px] font-bold'>Valid Till Year</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((mou, index) => (
                <tr key={mou._id}>
                  <th className=''>{index + 1 + indexOfFirstItem}</th>
                  <td className=''>{mou.universityName}</td>
                  <td>{mou.country}</td>
                  <td>{mou.moUYear}</td>
                  <td>{mou.validTillYear}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={changePage}
          />
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default InternationalMous;
