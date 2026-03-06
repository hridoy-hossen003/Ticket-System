import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./Components/Navbar";
import TicketOverview from "./Components/TicketOverview";
import TicketQueue from "./Components/TicketQueue";
import Swal from "sweetalert2";
  import { ToastContainer, toast } from "react-toastify";
import Footer from "./Components/Footer";
import Theme from "./Components/Theme";
function App() {
  /* -----------------------------
     State Management
  ----------------------------- */

  // number of tasks currently in progress
  const [progress, setProgress] = useState(0);

  // number of completed tasks
  const [resolved, setResolved] = useState(0);

  // tasks that are currently being worked on
  const [task, setTask] = useState([]);

  // tasks that have been completed
  const [resolvedTask, setResolvedTask] = useState([]);

  // all available tickets (left side cards)
  const [tickets, setTickets] = useState([]);

  /* -----------------------------
     Fetch Tickets (Run once)
  ----------------------------- */

  useEffect(() => {
    const fetchTickets = async () => {
      const res = await fetch("/public/tickets.json");
      const data = await res.json();
      setTickets(data); // store tickets in state
    };

    fetchTickets();
  }, []);

  /* -----------------------------
     Move Ticket → Task Status
     (When user clicks a card)
  ----------------------------- */

  const handleProgress = (data, id) => {
    // increase progress counter
    setProgress(progress + 1);

    // add ticket to task list
    setTask([...task, data]);

    // remove selected ticket from ticket list
    const remainingTickets = tickets.filter((ticket) => ticket.id !== id);
    setTickets(remainingTickets);

    Swal.fire({
      title: `${data.title}`,
      icon: "success",
      draggable: true,
    });
  };

  /* -----------------------------
     Complete Task
     (Move task → Resolved)
  ----------------------------- */

  const handleComplete = (tasks) => {
    // decrease progress counter
    setProgress(progress - 1);

    // increase resolved counter
    setResolved(resolved + 1);

    // add task to resolved list
    setResolvedTask([...resolvedTask, tasks]);

    // remove task from current task list
    const remainingCurrentTask = task.filter(
      (currentTask) => currentTask.id !== tasks.id,
    );

    setTask(remainingCurrentTask);
    toast.success(`${tasks.title}`)
  };

  /* -----------------------------
     Render UI
  ----------------------------- */

  return (
    <div data-theme='' className="bg-gray-100">
      
      {/* Top Navigation */}
      <Navbar />

      {/* Dashboard Overview */}
      <TicketOverview progress={progress} resolved={resolved} />

      {/* Main Ticket + Task Section */}
      <TicketQueue
        tickets={tickets}
        task={task}
        resolvedTask={resolvedTask}
        handleProgress={handleProgress}
        handleComplete={handleComplete}
        setTickets={setTickets}
      />

      {/* footer component */}
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
