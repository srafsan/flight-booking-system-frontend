import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import FlightDetailsModal from "./FlightDetailsModal";
import BookingModal from "./BookingModal";

function Flight() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const [searchParams, setSearchParams] = useState({
    origin: queryParams.get("origin") || "",
    destination: queryParams.get("destination") || "",
    date: queryParams.get("date") || "",
  });

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();

    if (searchParams.origin) params.set("origin", searchParams.origin);
    if (searchParams.destination)
      params.set("destination", searchParams.destination);
    if (searchParams.date) params.set("date", searchParams.date);

    navigate(`?${params.toString()}`);
  };

  const handleReset = () => {
    setSearchParams({
      origin: "",
      destination: "",
      date: "",
    });
    navigate("");
  };

  useEffect(() => {
    const fetchFlights = async () => {
      setLoading(true);
      setError(null);
      try {
        let endpoint = `${API_BASE_URL}/api/flights`;

        if (
          searchParams.origin ||
          searchParams.destination ||
          searchParams.date
        ) {
          endpoint = `${API_BASE_URL}/api/flights/search`;
        }

        const response = await axios.get(endpoint, {
          params: {
            ...(searchParams.origin && { origin: searchParams.origin }),
            ...(searchParams.destination && {
              destination: searchParams.destination,
            }),
            ...(searchParams.date && { date: searchParams.date }),
          },
        });

        setFlights(response.data);
      } catch (error) {
        console.error("Error fetching flights:", error);
        setError("Failed to fetch flights. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
  }, [location.search]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=1974&auto=format')`,
          backgroundSize: "cover",
        }}
      ></div>

      <div className="container mx-auto min-h-screen p-10 relative bg-white bg-opacity-90">
        <h2 className="text-7xl text-center uppercase font-bold pb-14">
          {searchParams.origin || searchParams.destination || searchParams.date
            ? "Search Results"
            : "All Flights"}
        </h2>

        {/* Search Form */}
        <div className="mb-8">
          <form
            onSubmit={handleSearch}
            className="flex flex-wrap gap-4 justify-center items-end"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Origin</span>
              </label>
              <input
                type="text"
                placeholder="Enter origin"
                className="input input-bordered w-full max-w-xs"
                value={searchParams.origin}
                onChange={(e) =>
                  setSearchParams((prev) => ({
                    ...prev,
                    origin: e.target.value,
                  }))
                }
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Destination</span>
              </label>
              <input
                type="text"
                placeholder="Enter destination"
                className="input input-bordered w-full max-w-xs"
                value={searchParams.destination}
                onChange={(e) =>
                  setSearchParams((prev) => ({
                    ...prev,
                    destination: e.target.value,
                  }))
                }
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Date</span>
              </label>
              <input
                type="date"
                className="input input-bordered w-full max-w-xs"
                value={searchParams.date}
                onChange={(e) =>
                  setSearchParams((prev) => ({ ...prev, date: e.target.value }))
                }
                required
              />
            </div>

            <div className="flex gap-2">
              <button type="submit" className="btn btn-primary">
                Search
              </button>
              <button type="button" onClick={handleReset} className="btn">
                Reset
              </button>
            </div>
          </form>
        </div>

        {flights.length === 0 ? (
          <div className="text-center py-10">
            <h3 className="text-2xl font-semibold">No flights found</h3>
            <p className="text-gray-600 mt-2">
              Try adjusting your search criteria
            </p>
          </div>
        ) : (
          <>
            <hr />
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th className="text-2xl">#</th>
                    <th className="text-2xl">Airline</th>
                    <th className="text-2xl">Route</th>
                    <th className="text-2xl">Date & Time</th>
                    <th className="text-2xl">Price</th>
                    <th className="text-2xl">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {flights.map((flight, index) => (
                    <tr key={flight._id} className="hover">
                      <th className="text-lg">{index + 1}</th>
                      <td className="text-lg font-bold">{flight.airline}</td>
                      <td className="text-lg">{`${flight.origin} to ${flight.destination}`}</td>
                      <td className="text-lg">{`${flight.date}, ${flight.time}`}</td>
                      <td className="text-lg">${flight.price}</td>
                      <td>
                        <button
                          className="btn"
                          onClick={() =>
                            document
                              .getElementById(`modal_details_${flight._id}`)
                              .showModal()
                          }
                        >
                          Details
                        </button>
                        <dialog
                          id={`modal_details_${flight._id}`}
                          className="modal"
                        >
                          <div className="modal-box">
                            <h3 className="font-bold uppercase text-lg">
                              Flight Details
                            </h3>
                            <p className="py-4">
                              <FlightDetailsModal flightId={flight._id} />
                            </p>
                            <div className="modal-action">
                              <form method="dialog">
                                <button className="btn btn-primary">
                                  Close
                                </button>
                              </form>
                            </div>
                          </div>
                        </dialog>

                        <button
                          className="btn btn-primary ml-4"
                          onClick={() =>
                            document
                              .getElementById(`modal_book_${flight._id}`)
                              .showModal()
                          }
                        >
                          Book Now
                        </button>
                        <dialog
                          id={`modal_book_${flight._id}`}
                          className="modal"
                        >
                          <div className="modal-box">
                            <h3 className="font-bold uppercase text-lg">
                              Book Now
                            </h3>
                            <p className="py-4">
                              <BookingModal flightId={flight._id} />
                            </p>
                            <div className="modal-action">
                              <form method="dialog">
                                <button className="btn btn-primary">
                                  Close
                                </button>
                              </form>
                            </div>
                          </div>
                        </dialog>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Flight;
