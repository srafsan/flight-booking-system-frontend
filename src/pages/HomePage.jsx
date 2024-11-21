import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(
      `/search?origin=${origin}&destination=${destination}&date=${date}`
    );
  };

  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-8">Flight Booking System</h1>
      <div className="card w-96 bg-base-100 shadow-xl p-4">
        <input
          type="text"
          placeholder="Origin"
          className="input input-bordered w-full mb-4"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
        <input
          type="text"
          placeholder="Destination"
          className="input input-bordered w-full mb-4"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <input
          type="date"
          className="input input-bordered w-full mb-4"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button className="btn btn-primary w-full" onClick={handleSearch}>
          Search Flights
        </button>
      </div>
    </div>
  );
}

export default HomePage;
