import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const facultyData = [
  { srNo: 1, name: 'Dr. Mahendra Gawali', position: 'Dean', institute: 'SRES' },
  { srNo: 2, name: 'Prof N Y Siddiqui', position: 'SCOE', institute: 'ECE Dept' },
  { srNo: 3, name: 'Ms. Swapnali S. Gawali', position: 'Sanjivani COE', institute: 'Comp Dept' },
  { srNo: 4, name: 'Mr. S. S. Kolapkar', position: 'Sanjivani COE', institute: 'Structure Dept' },
  { srNo: 5, name: 'Mr. N. L. Shelke', position: 'Sanjivani COE', institute: 'IT Dept' },
  { srNo: 6, name: 'Dr. Naveen Kumar', position: 'Sanjivani COE', institute: 'Mechx Dept' },
  { srNo: 7, name: 'Mr. Rushikesh Kolhe', position: 'Sanjivani COE', institute: 'Civil Dept' },
  { srNo: 8, name: 'Mr. Bhushan Kadam', position: 'Sanjivani COE', institute: 'Electrical Dept' },
  { srNo: 9, name: 'Dr. Himanshu Paliwal', position: 'BPharm', institute: '' },
  { srNo: 10, name: 'Mr. R. A. Raotale', position: 'Sanjivani', institute: 'Dpharmacy' },
  { srNo: 11, name: 'Mr. R. B. Shinde', position: 'Sanjivani', institute: 'SKBP Poly' },
  { srNo: 12, name: 'Mr. Vaibhav Suryawansh', position: 'SCOE', institute: 'Mechanical' },
  { srNo: 13, name: 'Dr. Tanaya Patil', position: 'SIMS', institute: '' },
  { srNo: 14, name: 'Ms. Monica Jawharkar', position: 'MBA', institute: '' },
  { srNo: 15, name: 'Mr. Yogesh Gadhave', position: 'Sr. College', institute: '' },
  { srNo: 16, name: 'Ms. Rutika Yeole', position: 'Sr. College', institute: '' },
];

function AboutUs() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaculty = facultyData.filter(faculty =>
    faculty.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="mt-20 mx-4 px-6">
        <h1 className="text-3xl font-bold mb-6 text-blue-500 text-center">Meet Our Faculty</h1>
        
        <input
          type="text"
          placeholder="Search Faculty"
          className="input input-bordered mb-4 w-full max-w-md mx-auto"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100 text-gray-900 text-lg leading-normal">
                <th className="py-3 px-6 text-center">Sr. No.</th>
                <th className="py-3 px-6 text-center">Faculty Name</th>
                <th className="py-3 px-6 text-center">Position</th>
                <th className="py-3 px-6 text-center">Institute</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-md  font-normal">
              {filteredFaculty.length > 0 ? (
                filteredFaculty.map((faculty) => (
                  <tr key={faculty.srNo} className="border-b border-gray-200 hover:bg-gray-100 transition duration-200">
                    <td className="py-3 px-6 text-center">{faculty.srNo}</td>
                    <td className="py-3 px-6 text-center">{faculty.name}</td>
                    <td className="py-3 px-6 text-center">{faculty.position}</td>
                    <td className="py-3 px-6 text-center">{faculty.institute}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="py-3 px-6 text-center">No results found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default AboutUs;
