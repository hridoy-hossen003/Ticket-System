import React, { Suspense } from 'react';
import ActiveTickets from './ActiveTickets';

const fetchTickets= async () => {
    const res = await fetch('/public/tickets.json')
    return res.json()
}

const ticketData = fetchTickets();
const TicketQueue = () => {
    
    return (
      <div className="grid grid-cols-4 max-w-7xl mx-auto md:mt-30">
        <div className=" col-span-3 flex items-center justify-center">
          <Suspense
            fallback={
              <span className="loading loading-infinity loading-xl"></span>
            }
          >
            <ActiveTickets  ticketData={ticketData}></ActiveTickets>
          </Suspense>
        </div>
        <div className="bg-blue-500 "></div>
      </div>
    );
};

export default TicketQueue;