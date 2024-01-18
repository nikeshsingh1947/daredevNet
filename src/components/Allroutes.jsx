import { Routes ,Route} from "react-router-dom"
import EventCalendar from "./Eventcalendar"
import { Home } from "./Pages/Home"
import { About } from "./Pages/About"
import Login from "./Pages/login"
import Signup from "./Pages/Signup"


export const Allroutes=()=>{

    return(
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/eventcalender" element={<EventCalendar/>}></Route>
            <Route path="/about" element={<About/>} ></Route>
            <Route path="/login" element={<Login/>} ></Route>
            <Route path="/signup" element={<Signup/>} ></Route>
        </Routes>
    )
}