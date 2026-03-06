import Ticket from "./Ticket";

const ActiveTickets = ({  handleProgress,  tickets }) => {



  return (
    <div>
      <div className="flex items-end h-auto max-w-7xl mx-auto mb-4 ">
        <h2 className="text-3xl font-semibold text-start">Customer Tickets</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 me-4">
        {tickets.map((ticket) => (
          <Ticket
            key={ticket.id}
            handleProgress={handleProgress}
            ticket={ticket}
          ></Ticket>
        ))}
      </div>
    </div>
  );
};

export default ActiveTickets;
