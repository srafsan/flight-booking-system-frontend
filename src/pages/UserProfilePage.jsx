import React, { useEffect, useState } from "react";
import axios from "axios";

function UserProfilePage() {
  const [profile, setProfile] = useState({});
  const [bookings, setBookings] = useState([]);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userProfile = await axios.get(`${API_BASE_URL}/api/profile`);
        const userBookings = await axios.get(
          `${API_BASE_URL}/api/bookings/user`
        );
        setProfile(userProfile.data);
        setBookings(userBookings.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-base-200 p-10">
      <h2 className="text-3xl font-bold mb-6">Profile</h2>
      <div className="card bg-base-100 shadow-xl p-6 mb-6">
        <p>Name: {profile.name}</p>
        <p>Email: {profile.email}</p>
      </div>
      <h2 className="text-3xl font-bold mb-6">Booking History</h2>
      {bookings.map((booking) => (
        <div key={booking._id} className="card bg-base-100 shadow-xl p-4 mb-4">
          <p>Flight: {booking.flightId}</p>
          <p>Seats: {booking.seats}</p>
          <p>Total: ${booking.total}</p>
        </div>
      ))}
    </div>
  );
}

export default UserProfilePage;
