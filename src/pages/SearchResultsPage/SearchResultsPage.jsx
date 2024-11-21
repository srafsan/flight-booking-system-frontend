import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import FlightDetailsModal from "../FlightDetailsModal";
import BookingModal from "../BookingModal";

function SearchResultsPage() {
  const [flights, setFlights] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const origin = queryParams.get("origin");
  const destination = queryParams.get("destination");
  const date = queryParams.get("date");

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/flights/search`, {
          params: { origin, destination, date },
        });
        setFlights(response.data);
      } catch (error) {
        console.error("Error fetching flights:", error);
      }
    };

    fetchFlights();
  }, [origin, destination, date]);

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=1974&auto=format')`,
          backgroundSize: "cover",
        }}
      ></div>

      {/* Main Content */}
      <div className="container mx-auto min-h-screen p-10 relative z-10 bg-white bg-opacity-90">
        <h2 className="text-7xl text-center uppercase font-bold pb-14">
          Available Flights
        </h2>
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
              {flights?.map((flight, index) => (
                <tr key={flight._id} className="hover">
                  <th className="text-lg">{index + 1}</th>
                  <td className="text-lg font-bold">{flight.airline}</td>
                  <td className="text-lg">{`${flight.origin} to ${flight.destination}`}</td>
                  <td className="text-lg">{`${flight.date}, ${flight.time}`}</td>
                  <td className="text-lg">${flight.price}</td>
                  <div>
                    <button
                      className="btn"
                      onClick={() =>
                        document.getElementById("my_modal_1").showModal()
                      }
                    >
                      Details
                    </button>
                    <dialog id="my_modal_1" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold uppercase text-lg">
                          Flight Details
                        </h3>
                        <p className="py-4">
                          <FlightDetailsModal flightId={flight._id} />
                        </p>
                        <div className="modal-action">
                          <form method="dialog">
                            <button className="btn btn-primary">Close</button>
                          </form>
                        </div>
                      </div>
                    </dialog>

                    <button
                      className="btn btn-primary ml-4"
                      onClick={() =>
                        document.getElementById("my_modal_book").showModal()
                      }
                    >
                      Book Now
                    </button>
                    <dialog id="my_modal_book" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold uppercase text-lg">
                          Book Now
                        </h3>
                        <p className="py-4">
                          <BookingModal flightId={flight._id} />
                        </p>
                        <div className="modal-action">
                          <form method="dialog">
                            <button className="btn btn-primary">Close</button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </div>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SearchResultsPage;
