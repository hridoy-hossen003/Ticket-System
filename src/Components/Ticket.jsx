import React from "react";

const Ticket = ({ ticket, handleProgress}) => {
  //    createdAt: "1/16/2024";
  //    customer: "David Miller";
  //    description: "The main analytics dashboard returns a 500 error for this specific user account.";
  //    id: "#1005";
  //    priority: "HIGH PRIORITY";
  //    status: "Open";
  //    title: "Dashboard Not Loading";
  const { createdAt, customer, description, id, priority, status, title } =
    ticket;
  return (
    <div className="">
      <div
        onClick={() => {
          handleProgress(ticket , id);
        }}
        className={`bg-white  rounded-sm p-4  cursor-pointer `}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">{title}</h2>
          <a
            href=""
            className={`btn ${status == "Open" ? "bg-green-400" : "bg-yellow-400"} rounded-3xl`}
          >
            {" "}
            <i
              className={`fa-solid ${status == "Open" ? "text-green-500" : "text-yellow-600"} fa-circle text-green-700`}
            ></i>
            {status}
          </a>
        </div>
        <div>
          <p className="text-gray-700 py-2">{description}</p>
        </div>
        <div className="flex justify-between gap-4 items-center">
          <div className="gap-4 flex ">
            <span>{id}</span>
            <span
              className={`${status == "Open" ? "text-red-500" : "text-green-500"}`}
            >
              {priority}
            </span>
          </div>
          <div className="gap-4 flex ">
            <span>{customer}</span>
            <span className="text-gray-700">
              <i className="fa-regular fa-calendar"></i> {createdAt}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
