import React, { Suspense } from "react";
import ActiveTickets from "./ActiveTickets";
import TaskManager from "./TaskManager";

const TicketQueue = ({
  handleProgress,
  task,
  handleComplete,
  resolvedTask,

  setTickets,
  tickets,
}) => {
  return (
    <div className="md:mt-30">
     
      <div className="grid grid-cols-4 max-w-7xl mx-auto ">
        <div className=" col-span-3 flex items-start justify-center">
          <Suspense
            fallback={
              <span className="loading loading-infinity loading-xl"></span>
            }
          >
            <ActiveTickets
              handleProgress={handleProgress}
              setTickets={setTickets}
              tickets={tickets}
            ></ActiveTickets>
          </Suspense>
        </div>

        <TaskManager
          resolvedTask={resolvedTask}
          handleComplete={handleComplete}
          task={task}
        ></TaskManager>
      </div>
    </div>
  );
};

export default TicketQueue;
