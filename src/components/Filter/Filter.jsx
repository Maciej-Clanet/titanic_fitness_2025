import "./Filter.css";
import {useState, useEffect} from "react";
import axios from "axios";
export default function Filter({filter, setFilter}){

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    function loadCategories(){
        const url = "https://wger.de/api/v2/exercisecategory/";

        axios.get(url)
        .then(res => {
            setCategories([
                {"id" : 0, "name": "All"},
                ...res.data.results]);
            setLoading(false);
        })
        .catch(err => {
            setError("Error");
            setLoading(false);
        });
    }
    useEffect(loadCategories, []); 

    
    if(loading){
        return <div className="filter">Filters loading...</div>
    }
    if(error){
        return <div className="filter">Error: {error}</div>
    }
    
    let catButtons = categories.map(cat => <button 
        onClick={() => setFilter(cat.id)}
        type="button"
        className={`filter-btn ${filter == cat.id ? "active" : ""} `}
        >{cat.name}</button>)
    


    return(
        <div className="filter">
            Filter:
            <div className="filter-btns">
                {catButtons}
            </div>
        </div>
    )

}