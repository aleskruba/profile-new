"use client"
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import pool from '@/app/utils/db';

// Define the Log type
interface Log {
  id: number;
  ipAddress: string;
  address: string;
  timestamp: string; // Assuming timestamp is stored as a string in ISO format, you can change it to `Date` if needed
}

export default function ShowLogs() {
  const [logs, setLogs] = useState<Log[]>([]); // Use the Log type for the logs state
  const [currentPage, setCurrentPage] = useState(0); // Track current page
  const logsPerPage = 5; // Number of logs per page

  // Fetch logs from the database
  useEffect(() => {
    async function fetchLogs() {
      try {
        const response = await fetch('/api/logs'); // API endpoint to fetch logs
        const data = await response.json();
        setLogs(data.logs);
      } catch (error) {
        console.error('Error fetching logs:', error);
      }
    }

    fetchLogs();
  }, []);

  // Pagination: Calculate the data to display for the current page
  const offset = currentPage * logsPerPage;
  const currentLogs = logs.slice(offset, offset + logsPerPage);

  // Handle page change
  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="text-left px-0 md:px-6 max-w-6xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Portfolio Logs</h2>

      {/* Display logs */}
      <div className="bg-gray-100 p-4 rounded shadow">
        {currentLogs.length > 0 ? (
          currentLogs.map((log) => (
            <div key={log.id} className="mb-4">
              <p>
                <strong>IP Address:</strong> {log.ipAddress}
              </p>
              <p>
                <strong>Address:</strong> {log.address}
              </p>
              <p>
                <strong>Timestamp:</strong> {new Date(log.timestamp).toLocaleString()}
              </p>
              {currentLogs.indexOf(log) < currentLogs.length - 1 && <hr className="my-4" />}
            </div>
          ))
        ) : (
          <p>No logs found.</p>
        )}
      </div>

      {/* Pagination */}
      <ReactPaginate
        previousLabel={'← Previous'}
        nextLabel={'Next →'}
        pageCount={Math.ceil(logs.length / logsPerPage)}
        onPageChange={handlePageChange}
        containerClassName="pagination flex justify-center mt-4 space-x-2"
        pageClassName="px-3 py-1 bg-gray-200 rounded"
        activeClassName="bg-blue-500 text-white"
        previousClassName="px-3 py-1 bg-gray-300 rounded"
        nextClassName="px-3 py-1 bg-gray-300 rounded"
        disabledClassName="opacity-50"
      />
    </div>
  );
}
