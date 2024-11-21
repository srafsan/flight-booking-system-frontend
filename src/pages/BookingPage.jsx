import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function BookingPage() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [seats, setSeats] = useState(1);
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleBooking = async () => {
    const token = localStorage.getItem("token");

    try {
      await axios.post(
        `${API_BASE_URL}/api/bookings`,
        {
          flightId: id,
          name,
          email,
          seats,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate("/profile");
    } catch (error) {
      console.error("Error making booking:", error);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 p-10">
      <div className="card bg-base-100 shadow-xl p-6">
        <h2 className="text-2xl font-bold">Booking Details</h2>
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="Seats"
          className="input input-bordered w-full mb-4"
          value={seats}
          onChange={(e) => setSeats(e.target.value)}
          min="1"
        />
        <button className="btn btn-primary w-full" onClick={handleBooking}>
          Confirm Booking
        </button>
      </div>
    </div>
  );
}

export default BookingPage;
