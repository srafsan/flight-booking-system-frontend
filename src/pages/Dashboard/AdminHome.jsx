import { useEffect, useState } from "react";
import { LayoutGrid, Plane, Calendar, Users, Settings } from "lucide-react";
import axios from "axios";
import FlightList from "./FlightList";
import BookingList from "./BookingList";
import UserList from "./UserList";

const AdminHome = () => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [activeTab, setActiveTab] = useState("dashboard");
  const [flights, setFlights] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [users, setUsers] = useState([]);

  // const flights = [
  //   {
  //     id: 1,
  //     flightNo: "FL101",
  //     departure: "New York",
  //     arrival: "London",
  //     date: "2024-11-25",
  //     status: "Scheduled",
  //   },
  //   {
  //     id: 2,
  //     flightNo: "FL102",
  //     departure: "Paris",
  //     arrival: "Tokyo",
  //     date: "2024-11-26",
  //     status: "Delayed",
  //   },
  //   {
  //     id: 3,
  //     flightNo: "FL103",
  //     departure: "Dubai",
  //     arrival: "Singapore",
  //     date: "2024-11-27",
  //     status: "On Time",
  //   },
  // ];

  // const bookings = [
  //   {
  //     id: 1,
  //     passengerName: "John Doe",
  //     flightNo: "FL101",
  //     seatNo: "12A",
  //     status: "Confirmed",
  //   },
  //   {
  //     id: 2,
  //     passengerName: "Jane Smith",
  //     flightNo: "FL102",
  //     seatNo: "15B",
  //     status: "Pending",
  //   },
  //   {
  //     id: 3,
  //     passengerName: "Mike Johnson",
  //     flightNo: "FL103",
  //     seatNo: "8C",
  //     status: "Confirmed",
  //   },
  // ];

  useEffect(() => {
    const fetchFlight = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/flights`);
        setFlights(response.data);
      } catch (error) {
        console.error("Error fetching flights:", error);
      }
    };

    fetchFlight();
  }, []);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/bookings`);
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBooking();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/users`);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchUsers();
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-blue-500 text-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-2">Total Flights</h3>
              <p className="text-3xl font-bold">{flights.length}</p>
            </div>
            <div className="bg-green-500 text-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-2">Active Bookings</h3>
              <p className="text-3xl font-bold">{bookings.length}</p>
            </div>
            <div className="bg-purple-500 text-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-2">Total Revenue</h3>
              <p className="text-3xl font-bold">$524,320</p>
            </div>
          </div>
        );
      case "flights":
        return <FlightList flights={flights} />;
      case "bookings":
        return <BookingList bookings={bookings} />;
      case "users":
        return <UserList users={users} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen bg-white shadow-lg">
          <div className="p-4">
            <h1 className="text-2xl font-bold text-primary">Flight Admin</h1>
          </div>
          <nav className="mt-4">
            <button
              className={`flex items-center gap-3 w-full p-4 hover:bg-gray-100 ${
                activeTab === "dashboard" ? "bg-gray-100 text-primary" : ""
              }`}
              onClick={() => setActiveTab("dashboard")}
            >
              <LayoutGrid size={20} />
              Dashboard
            </button>
            <button
              className={`flex items-center gap-3 w-full p-4 hover:bg-gray-100 ${
                activeTab === "flights" ? "bg-gray-100 text-primary" : ""
              }`}
              onClick={() => setActiveTab("flights")}
            >
              <Plane size={20} />
              Flights
            </button>
            <button
              className={`flex items-center gap-3 w-full p-4 hover:bg-gray-100 ${
                activeTab === "bookings" ? "bg-gray-100 text-primary" : ""
              }`}
              onClick={() => setActiveTab("bookings")}
            >
              <Calendar size={20} />
              Bookings
            </button>
            <button
              className={`flex items-center gap-3 w-full p-4 hover:bg-gray-100 ${
                activeTab === "users" ? "bg-gray-100 text-primary" : ""
              }`}
              onClick={() => setActiveTab("users")}
            >
              <Users size={20} />
              Users
            </button>
            <button
              className={`flex items-center gap-3 w-full p-4 hover:bg-gray-100 ${
                activeTab === "settings" ? "bg-gray-100 text-primary" : ""
              }`}
              onClick={() => setActiveTab("settings")}
            >
              <Settings size={20} />
              Settings
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">{renderContent()}</div>
      </div>
    </div>
  );
};

export default AdminHome;
