import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchResultsPage from "./pages/SearchResultsPage.jsx";
import FlightDetailsPage from "./pages/FlightDetailsPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import BookingPage from "./pages/BookingPage.jsx";
import UserProfilePage from "./pages/UserProfilePage.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import HomePage from "./pages/Home/HomePage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="/flights/:id" element={<FlightDetailsPage />} />
        <Route path="/booking/:id" element={<BookingPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
