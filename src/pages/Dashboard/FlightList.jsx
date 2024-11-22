import { Pencil, Plus, Trash2 } from "lucide-react";

function FlightList({ flights }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Flights Management</h2>
        <button className="btn btn-primary flex items-center gap-2">
          <Plus size={20} />
          Add Flight
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Flight No</th>
              <th>Origin</th>
              <th>Destination</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {flights.map((flight) => (
              <tr key={flight._id}>
                <td>{flight.flightNumber}</td>
                <td>{flight.origin}</td>
                <td>{flight.destination}</td>
                <td>{flight.date}</td>
                <td className="flex gap-2">
                  <button className="btn btn-sm btn-ghost">
                    <Pencil size={16} />
                  </button>
                  <button className="btn btn-sm btn-ghost text-error">
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FlightList;
