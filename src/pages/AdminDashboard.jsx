import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [flights, setFlights] = useState([]);
  const [bookings, setBookings] = useState([]);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allFlights = await axios.get(`${API_BASE_URL}/api/flights`);
        const allBookings = await axios.get(`${API_BASE_URL}/api/bookings`);
        setFlights(allFlights.data);
        setBookings(allBookings.data);
      } catch (error) {
        console.error("Error fetching admin data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-base-200 p-10">
      <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>
      <h3 className="text-2xl font-bold mb-4">Manage Flights</h3>
      <div className="grid gap-4 mb-10">
        {flights.map((flight) => (
          <div key={flight._id} className="card bg-base-100 shadow-xl p-4">
            <p>{flight.airline}</p>
            <p>{`${flight.origin} to ${flight.destination}`}</p>
            <p>{`${flight.date}, ${flight.time}`}</p>
          </div>
        ))}
      </div>
      <h3 className="text-2xl font-bold mb-4">View Bookings</h3>
      <div className="grid gap-4">
        {bookings.map((booking) => (
          <div key={booking._id} className="card bg-base-100 shadow-xl p-4">
            <p>User: {booking.userId}</p>
            <p>Flight: {booking.flightId}</p>
            <p>Seats: {booking.seats}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
