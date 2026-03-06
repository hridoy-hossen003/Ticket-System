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
        className={`bg-white  rounded-sm p-4  cursor-pointer m-4 md:m-auto `}
      >
        <div className="flex md:justify-between md:flex-row flex-col-reverse md:items-center">
          <h2 className="text-xl font-semibold md:mt-auto mt-4">{title}</h2>
          <a
            href=""
            className={`btn ${status == "Open" ? "bg-green-400" : "bg-yellow-400"} rounded-3xl w-fit`}
          >
            {" "}
            <i
              className={`fa-solid ${status == "Open" ? "text-green-500" : "text-yellow-600"} fa-circle text-green-700`}
            ></i>
            {status}
          </a>
        </div>
        <div className="mt-1 md:mt-auto">
          <p className="text-gray-700 py-2">{description}</p>
        </div>
        <div className="flex md:justify-between md:flex-row flex-col gap-4 md:items-center items-start mt-4 md:mt-auto" >
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
