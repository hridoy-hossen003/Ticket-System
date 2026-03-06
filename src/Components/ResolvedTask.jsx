import React from 'react';

const ResolvedTask = ({resolved}) => {
    return (
      <div className="p-6 bg-[#E0E7FF] rounded-sm mb-4">
        <h3 className='font-semibold'>{resolved.title}</h3>
      </div>
    );
};

export default ResolvedTask;