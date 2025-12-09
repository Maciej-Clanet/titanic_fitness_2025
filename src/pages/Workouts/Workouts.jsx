import "./Workouts.css";
import { useState, useEffect } from "react";
import { useUser } from "../../contexts/UserContext";
import QtySelector from "../../components/QtySelector/QtySelector";
import Filter from "../../components/Filter/Filter";
export default function Workouts() {

    // values needed for the form
    const { user } = useUser();
    const [kg, setKg] = useState(50);
    const [reps, setReps] = useState(5);
    const [selectedExercise, setSelectedExercise] = useState();
    const [date, setDate] = useState();

    // needed for filter
    const [filter, setFilter] = useState(0);
    const [loadedExercises, setLoadedExercises] = useState(["fake exercise", "second"]);

    const exerciseOptions = loadedExercises.map(ex => <option value={ex}>{ex}</option>)


    return (
        <div className="workouts-page">
            <form>
                <Filter filter={filter} setFilter={setFilter}/>
                selected filter: {filter}
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
                <QtySelector num={kg} setNum={setKg} unit="KG" step={2.5}/>
                <QtySelector num={reps} setNum={setReps} unit={ reps > 1 ? "Reps" : "Rep"} step={1}/>
                <button type="submit" className="primary-btn">ADD</button>
            </form>
        </div>
    )
}