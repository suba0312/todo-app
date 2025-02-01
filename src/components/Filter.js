import React from 'react';
import { FaList, FaCheckCircle, FaClock } from 'react-icons/fa';

const Filter = ({ setFilter }) => {
  return (
    <div>
      <button onClick={() => setFilter('all')}>
        <FaList title="All Tasks" /> All
      </button>
      <button onClick={() => setFilter('completed')}>
        <FaCheckCircle title="Completed Tasks" /> Completed
      </button>
      <button onClick={() => setFilter('pending')}>
        <FaClock title="Pending Tasks" /> Pending
      </button>
    </div>
  );
};

export default Filter
