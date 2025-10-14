import {Routes, Route} from "react-router";
import Home from "./pages/home/Home";
import Workouts from "./pages/Workouts/Workouts";
import Auth from "./pages/Auth/Auth";

export default function Routing(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/workouts" element={<Workouts/>} />
            <Route path="/auth" element={<Auth/>} />
        </Routes>
    )
}