import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function FlightDetailsPage() {
  const { id } = useParams();
  const [flight, setFlight] = useState(null);
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchFlight = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/flights/${id}`);
        setFlight(response.data);
      } catch (error) {
        console.error("Error fetching flight details:", error);
      }
    };

    fetchFlight();
  }, [id]);

  if (!flight) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-base-200 p-10">
      <div className="card bg-base-100 shadow-xl p-6">
        <h2 className="text-2xl font-bold">{flight.airline}</h2>
        <p>{`${flight.origin} to ${flight.destination}`}</p>
        <p>{`${flight.date}, ${flight.time}`}</p>
        <p>Duration: {flight.duration}</p>
        <p>Price: ${flight.price}</p>
        <button
          className="btn btn-primary mt-4"
          onClick={() => navigate(`/booking/${id}`)}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default FlightDetailsPage;
