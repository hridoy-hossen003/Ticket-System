import React, { use } from 'react';
import Ticket from './Ticket';

const ActiveTickets = ({ticketData}) => {
    const tickets = use(ticketData)


    return (
      <div className="grid grid-cols-2 gap-4 me-4">
        {tickets.map((ticket) => (
          <Ticket key={ticket.id} ticket={ticket}></Ticket>
        ))}
      </div>
    );
};

export default ActiveTickets;