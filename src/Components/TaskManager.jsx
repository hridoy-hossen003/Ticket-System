import React from "react";
import AssignTask from "./AssignTask";
import ResolvedTask from "./ResolvedTask";

const TaskManager = ({ task: tasks, handleComplete, resolvedTask }) => {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">Task Status</h2>
      {tasks.length === 0 && <p>Select a ticket to add to Task Status</p>}
      <div className="mb-4">
        {tasks.map((task) => (
          <AssignTask
            handleComplete={handleComplete}
            key={task.id}
            task={task}
          ></AssignTask>
        ))}
      </div>
      <div>
        <div>
          <h2 className="text-3xl font-semibold mb-4">Resolved Task</h2>
          {resolvedTask.length === 0 && <p>No resolved tasks yet.</p>}
        </div>
        {resolvedTask.map((resolved) => (
          <ResolvedTask resolved={resolved} key={resolved.id}></ResolvedTask>
        ))}
      </div>
    </div>
  );
};

export default TaskManager;
