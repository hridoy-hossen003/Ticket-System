import React from 'react';

const AssignTask = ({ task, handleComplete }) => {
  return (
    <div>
      <div className="bg-white p-4 mb-4 rounded-sm space-y-4">
        <h2 className="text-xl font-semibold">{task.title}</h2>
        <button onClick={()=> handleComplete(task)} className="btn btn-lg w-full bg-[#02A53B] text-white">
          Complete
        </button>
      </div>
    </div>
  );
};

export default AssignTask;