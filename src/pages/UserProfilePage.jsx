import { useEffect, useState } from "react";
import {
  User,
  Plane,
  Calendar,
  DollarSign,
  Mail,
  AlertCircle,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

const UserProfilePage = () => {
  const { userId } = useAuth();
  const [profile, setProfile] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const [userProfile, userBookings] = await Promise.all([
          fetch(`${API_BASE_URL}/api/users/${userId}`).then((res) =>
            res.json()
          ),
          fetch(`${API_BASE_URL}/api/bookings/user/${userId}`).then((res) =>
            res.json()
          ),
        ]);
        setProfile(userProfile[0]);
        setBookings(userBookings);
      } catch (error) {
        setError("Failed to load profile data. Please try again later.");
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-base-200 p-8 flex items-center justify-center">
        <div className="space-y-4 text-center">
          <span className="loading loading-spinner loading-lg text-primary"></span>
          <p className="text-base-content/60">Loading your profile...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-base-200 p-8">
        <div className="alert alert-error">
          <AlertCircle className="h-4 w-4" />
          <span>{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Profile Section */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex items-center space-x-4">
                <div className="avatar placeholder">
                  <div className="bg-primary text-primary-content rounded-full w-16">
                    <User className="w-8 h-8" />
                  </div>
                </div>
                <div>
                  <h2 className="card-title text-2xl">{profile?.username}</h2>
                  <div className="flex items-center text-base-content/60 mt-1">
                    <Mail className="h-4 w-4 mr-2" />
                    {profile?.email}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bookings Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-base-content">
              Travel History
            </h2>
            {bookings.length === 0 ? (
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body text-center text-base-content/60">
                  No bookings found. Your travel history will appear here.
                </div>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {bookings.map((booking) => (
                  <div
                    key={booking._id}
                    className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-200"
                  >
                    <div className="card-body">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3 text-primary">
                          <Plane className="h-5 w-5" />
                          <span className="font-semibold">
                            Flight {booking.flightId}
                          </span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-base-content/70">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>
                              {new Date(booking.date).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex items-center text-base-content/70">
                            <User className="h-4 w-4 mr-2" />
                            <span>
                              {booking.seats}{" "}
                              {booking.seats === 1 ? "Seat" : "Seats"}
                            </span>
                          </div>
                          <div className="flex items-center text-success font-semibold">
                            <DollarSign className="h-4 w-4 mr-2" />
                            <span>${booking.total.toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
