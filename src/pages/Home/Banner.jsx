import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Banner() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(
      `/flights?origin=${origin}&destination=${destination}&date=${date}`
    );
  };

  return (
    <div
      className="relative h-[550px] bg-cover bg-center flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1716918266953-fef00041c3ac?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundColor: "rgba(0,0,0,0.2)",
        backgroundBlendMode: "overlay",
      }}
    >
      <h1 className="text-5xl uppercase font-bold text-white mb-8 text-center drop-shadow-lg">
        Welcome to Your Journey
      </h1>
      <div className="card bg-base-100 shadow-xl p-6 w-[650px] flex flex-row items-center space-x-4">
        <input
          type="text"
          placeholder="Origin"
          className="input input-bordered w-48"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
        <input
          type="text"
          placeholder="Destination"
          className="input input-bordered w-48"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <input
          type="date"
          className="input input-bordered w-48"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search Flights
        </button>
      </div>
    </div>
  );
}

export default Banner;
