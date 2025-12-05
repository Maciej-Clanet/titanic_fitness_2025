import { useEffect, useState } from "react";
import "./CategoryFilter.css";
import axios from "axios";
export default function CategoryFilter({ selected, setFilter }) {
  const [filters, setFilters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  
  const api_endpoint = "https://wger.de/api/v2/exercisecategory/";
  let filterBtns = filters.map(filter => {
            return <button 
                key={filter.id}
                onClick={() => setFilter(filter.id)}
                className={`filter-btn ${selected === filter.id ? "active" : null}`}
                >{filter.name}</button>
        });
 
  useEffect(() => {
    axios.get(api_endpoint)
    .then((res) => {

        const allFilter = {
            "id": 0,
            "name": "All"
        };

        setFilters([allFilter, ...res.data.results]);
        setIsLoading(false)
    })
    .catch((err) => {
        setIsLoading(false);
        setError(err?.response?.data?.detail || "Error Occured")
    });
  }, [])

  if (isLoading) {
    return <div> Filters Loading...</div>;
  }
  if (error) {
    return <div>Filters failed to load: {error}</div>;
  }


  return (
    <div className="category-filter-container">
      <span>Filter:</span>
      <div className="filter-options">
        {filterBtns}
      </div>
    </div>
  );
}
