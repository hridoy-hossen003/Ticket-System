 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css'
import Navbar from './Components/Navbar'
import TicketOverview from './Components/TicketOverview';
import TicketQueue from './Components/TicketQueue';

function App() {
 

  return (
    <div className='bg-gray-100'>
      <Navbar></Navbar>
     <TicketOverview></TicketOverview>
     <TicketQueue></TicketQueue>
    </div>
  );
}

export default App
