import "./Workouts.css";
import {useState, useEffect} from "react";
import { useUser } from "../../contexts/UserContext";

export default function Workouts(){

    // values needed for the form
    const {user} = useUser();
    const [kg, setKg] = useState(50);
    const [reps, setReps] = useState(5);
    const [selectedExercise, setSelectedExercise] = useState();
    const [date, setDate] = useState();

    // needed for filter
    const [filter, setFilter] = useState();
    const [loadedExercises, setLoadedExercises] = useState(["fake exercise", "second"]);

    const exerciseOptions = loadedExercises.map(ex => <option value={ex}>{ex}</option>)


    return(
        <div className="workouts-page">
            this is the workouts page
            {/* filter will go here */}
            <select 
                className="exercise-dropdown" 
                required 
                onChange={(e) => setSelectedExercise(e.target.value)} 
                value={selectedExercise}>
                {exerciseOptions}
            </select>
            {selectedExercise}
            <input type="date" requried onChange={(e) => setDate(e.target.value)} value={date} />
            {date}
            {/* qty selector for kg */}
            {/* qty selector for reps */}
            <button type="submit" className="primary-btn">ADD</button>
        </div>
    )
}