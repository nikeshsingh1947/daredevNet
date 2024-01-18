
import './App.css';
import AnimatedCursor from "react-animated-cursor"

// import FlipCard from './components/Flipcard'
// import FloatButton from "./components/FloatButton"
// import RohmbusButton from "./components/TraiButton";
import NavbarComponent from './components/Navbar';

import { Allroutes } from './components/Allroutes';

// import EventCalendar from './components/Eventcalendar';
function App() {
  // const handleButtonClick = () => {
  //   // Handle button click action here
  //   console.log("Button clicked!");
  // };
  // const handleButtonClick1 = () => {
  //   // Handle button click action here
  //   console.log("Button clicked !");
  // };

  return (
    <div className="App">
      <AnimatedCursor innerSize={20}
      outerSize={16} color='255,51,52'/>
      <NavbarComponent/>
      
      <Allroutes/>
     
      {/* <YourComponent/> */}
      {/* <FlipCard/>
      <FloatButton onClick={handleButtonClick} icon="+" />
      <RohmbusButton onClick={handleButtonClick1} text="Click"/>
      <EventCalendar/> */}
      
    </div>
  );
}

export default App;
