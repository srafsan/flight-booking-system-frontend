import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

function BookingModal({ flightId }) {
  const { userId } = useAuth();
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
          userId,
          flightId,
          name,
          email,
          numberOfSeats: seats,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate("/");
    } catch (error) {
      console.error("Error making booking:", error);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4 text-gray-700">
        <div>
          <p className="font-semibold">Name</p>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full mb-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <p className="font-semibold">Email</p>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div>
        <p className="font-semibold">Seats</p>
        <input
          type="number"
          placeholder="Seats"
          className="input input-bordered w-full mb-4"
          value={seats}
          onChange={(e) => setSeats(e.target.value)}
          min="1"
        />
      </div>
      <button className="btn btn-primary w-full" onClick={handleBooking}>
        Confirm Booking
      </button>
    </>
  );
}

export default BookingModal;
