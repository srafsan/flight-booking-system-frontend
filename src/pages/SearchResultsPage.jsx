import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function SearchResultsPage() {
  const [flights, setFlights] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const origin = queryParams.get("origin");
  const destination = queryParams.get("destination");
  const date = queryParams.get("date");

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/flights/search`, {
          params: { origin, destination, date },
        });
        setFlights(response.data);
      } catch (error) {
        console.error("Error fetching flights:", error);
      }
    };

    fetchFlights();
  }, [origin, destination, date]);

  return (
    <div className="min-h-screen bg-base-200 p-10">
      <h2 className="text-3xl font-bold mb-6">Available Flights</h2>
      <div className="grid gap-4">
        {flights?.map((flight) => (
          <div key={flight._id} className="card bg-base-100 shadow-xl p-4">
            <h3 className="text-xl font-bold">{flight.airline}</h3>
            <p>{`${flight.origin} to ${flight.destination}`}</p>
            <p>{`${flight.date}, ${flight.time}`}</p>
            <p>Price: ${flight.price}</p>
            <Link
              to={`/flights/${flight._id}`}
              className="btn btn-primary mt-4"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResultsPage;
