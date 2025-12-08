import "./Workouts.css";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import { useEffect, useState } from "react";
import axios from "axios";
import QtySelector from "../../components/QtySelector/QtySelector";
import { useUser } from "../../contexts/UserContext";
export default function Workouts(){

    const [filter, setFilter] = useState(0);
    const [exercises, setExercises] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [selectedEx, setSelectedEx] = useState();

    const [kg, setKg] = useState(50);
    const [reps, setReps] = useState(5);
    const [date, setDate] = useState();
    const {user} = useUser();

    const [currentWorkout, setCurrentWorkout] = useState([]);

    function addExercise(e){
        e.preventDefault();
        const data = {
            "exercise" : selectedEx,
            "weight" : kg,
            "reps" : reps,
            "date" : date,
            "user_email" : user.email
        }

        const url = "http://127.0.0.1:8001/exercise/add";

        axios.post(url, data)
        .then(res => {
            alert("added")
            refreshWorkout(date)
        })
        .catch(err => {
            alert("broke: ", JSON.stringify(err.detail))
        });

    }

    function refreshWorkout(date){
        if(!date){ return }
        const url = "http://127.0.0.1:8001/exercise/bydate";
        const data = {
            "user_email" : user.email,
            "date" : date
        };

        axios.post(url, data)
        .then(res => {
            alert("got workout: ", JSON.stringify(res.data))
            setCurrentWorkout(res.data.groups)
        })
        .catch(err => {
            alert("failed to get workout");
        })
    }
    
    useEffect(() => {

        refreshWorkout();

        let api_endpoint = "https://wger.de/api/v2/exerciseinfo/?language=2&limit=900"
        
        if(filter > 0){
            api_endpoint += `&category=${filter}`;
        }

        let cached = JSON.parse(localStorage.getItem(api_endpoint));
        if(cached){
            setExercises(cached);
            setIsLoading(false)
            return;
        }

        axios.get(api_endpoint)
        .then(res => {
            setIsLoading(false);
            console.log(res.data.results);

            let foundExercises = res.data.results.map(ex => {
                for (let trans of ex.translations){
                    if (trans.language == 2){
                        return trans.name
                    }
                }
            });

            setExercises(foundExercises);
            localStorage.setItem(api_endpoint, JSON.stringify(foundExercises))
        })
        .catch(err => {
            setError(error?.response?.data?.detail || "error occured")
            setIsLoading(false)
        })


    }, [filter])

    function updateDate(e){
        setDate(e.target.value);
        refreshWorkout(e.target.value);
    }

    let options = exercises.map(ex => <option value={ex}>{ex}</option>)
    options.unshift(<option value="">Select Exercise</option>)

    return(
        <div className="workouts-page">
            <CategoryFilter selected={filter} setFilter={setFilter}/>
            <form onSubmit={addExercise}>
            { error ? <h1>{error}</h1> : null}
            { isLoading ? <h1>Loading exercises...</h1> : <select required value={selectedEx} onChange={(e) => setSelectedEx(e.target.value)}>{options}</select>}
            {selectedEx}
            <QtySelector value={kg} setValue={setKg} unit="KG" step={2.5}/>
             <QtySelector value={reps} setValue={setReps} unit="Reps" step={1}/>
             <input required type="date" value={date} onChange={updateDate}/>
             {user.email}
            <button type="submit">submit</button>
            </form>

            {JSON.stringify(currentWorkout)}
        </div>
    )
}