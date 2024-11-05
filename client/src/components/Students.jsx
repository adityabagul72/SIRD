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

function Students() {
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedYear, setSelectedYear] = useState('All');
  const studentsPerPage = 9;

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/students');
        const data = response.data;

        // Sort data by year descending and then by student name
        const sortedData = data.sort((a, b) => {
          if (a.year === b.year) {
            return a.student_name.localeCompare(b.student_name);
          }
          return b.year.localeCompare(a.year);
        });

        setStudents(sortedData);
      } catch (error) {
        console.error('Error fetching the student data:', error);
      }
    };
    fetchData();
  }, []);

  // Filter students by selected year
  const filteredStudents = selectedYear === 'All'
    ? students
    : students.filter(student => student.year === selectedYear);

  // Pagination logic
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredStudents.slice(indexOfFirstStudent, indexOfLastStudent);

  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-8">
        <h1 className="text-3xl text-center font-bold mt-20 mb-4 text-blue-500">
          International Students Selected For Internships/MS
        </h1>
        <p className="mb-6">
          Below is a list of students who have participated in international programs through
          Sanjivani College. The students are listed in descending order of academic years.
        </p>

        {/* Year Filter */}
        <div className="mb-6">
          <label htmlFor="yearFilter" className="mr-4 font-bold">Filter by Year:</label>
          <select
            id="yearFilter"
            className="border border-gray-300 rounded-lg p-2"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="All">All</option>
            {/* Dynamically populate the year options */}
            {Array.from(new Set(students.map(student => student.year))).map(year => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Display Students */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentStudents.length > 0 ? (
            currentStudents.map(student => (
              <div key={student.sr_no} className="border border-gray-300 rounded-lg p-4 shadow-md">
                <h2 className="text-xl font-bold mb-2">{student.student_name}</h2>
                <p><strong>University:</strong> {student.university_name}</p>
                <p><strong>Department:</strong> {student.department}</p>
                <p><strong>Internship/MS:</strong> {student.internship_or_ms}</p>
                <p><strong>Year:</strong> {student.year}</p>
              </div>
            ))
          ) : (
            <p className="text-red-500 mt-4">No students found.</p>
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mb-8">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={paginate}
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Students;
