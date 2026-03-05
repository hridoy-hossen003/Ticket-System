import React, { useState } from 'react';
import img1 from '../assets/vector1.png'
import img2 from '../assets/vector3.png'
const TicketOverview = () => {
    const [progress , setProgress] = useState(0)
    const [resolved , setResolved] = useState(0)
    return (
      <div className="grid  grid-cols-2 max-w-7xl mx-auto gap-10 mt-20">
        <div className="bg-gradient-to-l relative from-purple-500 to-indigo-600 h-60 rounded-lg grid justify-center items-center">
          <img className="absolute left-0" src={img1} alt="" />
          <div className="grid justify-center items-center text-center">
            <h2 className=" text-2xl text-white">In-Progress </h2>
            <h2 className="font-semibold text-7xl text-white">{progress}</h2>
          </div>
          <img className="absolute right-0" src={img2} alt="" />
        </div>
        <div className=" relative bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 h-60 rounded-lg grid justify-center items-center ">
          <img className="absolute left-0" src={img1} alt="" />
          <div className="grid justify-center items-center text-center">
            <h2 className=" text-2xl text-white">Resolved</h2>
            <h2 className="font-semibold text-7xl text-white">{resolved}</h2>
          </div>
          <img className="absolute right-0 " src={img2} alt="" />
        </div>
      </div>
    );
};

export default TicketOverview;