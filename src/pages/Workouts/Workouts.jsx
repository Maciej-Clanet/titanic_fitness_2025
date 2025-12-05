import "./Workouts.css";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Workouts(){

    const [filter, setFilter] = useState(0);
    const [exercises, setExercises] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    
    useEffect(() => {
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

    return(
        <div className="workouts-page">
            <CategoryFilter selected={filter} setFilter={setFilter}/>
            { error ? <h1>{error}</h1> : null}
            { isLoading ? <h1>Loading exercises...</h1> : JSON.stringify(exercises)}
            
        </div>
    )
}