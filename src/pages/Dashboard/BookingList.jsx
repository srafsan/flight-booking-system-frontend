function BookingList({ bookings }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Bookings Overview</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Passenger</th>
              <th>Flight</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={booking._id}>
                <td>{index + 1}</td>
                <td>{booking.userId}</td>
                <td>{booking.flightId}</td>
                <td>
                  <span
                    className={`badge ${
                      booking.bookingStatus === "Confirmed"
                        ? "badge-success"
                        : "badge-warning"
                    }`}
                  >
                    {booking.bookingStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BookingList;
