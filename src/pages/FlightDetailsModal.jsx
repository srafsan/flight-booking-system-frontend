import { useEffect, useState } from "react";
import axios from "axios";

function FlightDetailsModal({ flightId }) {
  const [flight, setFlight] = useState(null);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchFlight = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/flights/${flightId}`
        );
        setFlight(response.data);
      } catch (error) {
        console.error("Error fetching flight details:", error);
      }
    };

    fetchFlight();
  }, [flightId]);

  if (!flight) return <div>Loading...</div>;

  return (
    <>
      <div className="flex items-center justify-center mb-4">
        <img
          src="https://t4.ftcdn.net/jpg/05/28/69/29/240_F_528692947_a24JXuek0FtFN2GVUwf0vNvBHltKbGkC.jpg"
          alt={`${flight.airline} logo`}
          className="w-16 h-16 rounded-full"
        />
      </div>
      <h2 className="text-xl font-bold text-center mb-2">{flight.airline}</h2>
      <div className="grid grid-cols-2 gap-4 text-gray-700">
        <div>
          <p className="font-semibold">Date & Time</p>
          <p>{`${flight.date}, ${flight.time}`}</p>
        </div>
        <div>
          <p className="font-semibold">Available Seats</p>
          <p>{flight.availableSeats}</p>
        </div>
        <div>
          <p className="font-semibold">Flight Number</p>
          <p>{flight.flightNumber}</p>
        </div>
        <div>
          <p className="font-semibold">Price</p>
          <p className="text-green-600 font-bold">${flight.price}</p>
        </div>
      </div>
    </>
  );
}

export default FlightDetailsModal;
