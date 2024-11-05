import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { motion } from 'framer-motion';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

ChartJS.register(ArcElement, Tooltip, Legend);

function Graph() {
  const [studentsData, setStudentsData] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/students');
        setStudentsData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const internshipCount = studentsData.filter(student => student.internship_or_ms === 'Internship').length;
  const msCount = studentsData.filter(student => student.internship_or_ms === 'MS').length;
  const total = internshipCount + msCount;

  const studentsChartData = {
    labels: ['Internship', 'MS'],
    datasets: [
      {
        label: 'Participation Percentage',
        data: [internshipCount, msCount],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)'
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: true },
      tooltip: {
        callbacks: {
          label: (context) => {
            const percentage = ((context.raw / total) * 100).toFixed(2);
            return `Count: ${context.raw} (${percentage}%)`;
          },
        },
      },
    },
    aspectRatio: 2,
  };

  const handleSegmentClick = (element) => {
    if (element.length > 0) {
      const index = element[0].index;
      const label = studentsChartData.labels[index];
      const count = studentsChartData.datasets[0].data[index];

      // Show modal with details about the clicked segment
      setSelectedData({ label, count });
      setOpen(true);
    }
  };

  return (
    <div className="container  md:mt-0 mt-28 mx-auto p-6 mb-0 font-poppins">
      <div className="flex flex-col lg:flex-row gap-0">
        {/* Left side: Pie chart */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 bg-white p-6 border border-gray-300 flex items-center justify-center" // Removed shadow and rounded corners
        >
          <div className="w-full h-80 cursor-pointer"> {/* Change cursor on hover */}
            <h3 className="text-2xl font-bold mb-8 text-center">Student Participation Graph</h3> {/* Graph title */}
            <Pie
              data={studentsChartData}
              options={{
                ...chartOptions,
                onClick: (event, elements) => handleSegmentClick(elements),
              }}
            />
          </div>
        </motion.div>

        {/* Right side: Overview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 bg-white p-6" 
        >
          <h2 className="text-2xl font-bold mb-4">Overview</h2>

          <div className="grid grid-cols-1 gap-4 mb-4">
            <div className="bg-emerald-100 p-4 border border-emerald-400">
              <h3 className="text-xl font-semibold mb-2">Internship Participation</h3>
              <p className="text-lg">
                Number of students participating in internships: <span className="font-bold">{internshipCount}</span>
              </p>
              <p className="text-lg">
                Percentage: <span className="font-bold">{((internshipCount / total) * 100).toFixed(2)}%</span>
              </p>
            </div>
            <div className="bg-red-100 p-4 border border-red-200">
              <h3 className="text-xl font-semibold mb-2">MS Program Participation</h3>
              <p className="text-lg">
                Number of students pursuing MS programs: <span className="font-bold">{msCount}</span>
              </p>
              <p className="text-lg">
                Percentage: <span className="font-bold">{((msCount / total) * 100).toFixed(2)}%</span>
              </p>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-md">
              We offer comprehensive support through internships and research opportunities, ensuring our students are well-prepared for their future careers.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Modal for segment details */}
      <Modal open={open} onClose={() => setOpen(false)} center>
        <h2 className="text-xl font-bold">{selectedData?.label} Details</h2>
        <p className="mt-4">
          Number of students: <span className="font-bold">{selectedData?.count}</span>
        </p>
        <p className="mt-2">
          Percentage: <span className="font-bold">{((selectedData?.count / total) * 100).toFixed(2)}%</span>
        </p>
      </Modal>
    </div>
  );
}

export default Graph;
