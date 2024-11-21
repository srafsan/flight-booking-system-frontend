const PopularDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Makkah, Saudi Arabia",
      image:
        "https://media.istockphoto.com/id/482206266/photo/kaaba-in-mecca.jpg?s=2048x2048&w=is&k=20&c=S9w5vjjosy0hlkanVvlUm3yxGmqZD2HEjBnpgDFu26U=",
      label: "MAKKAH",
    },
    {
      id: 2,
      name: "Rome, Italy",
      image:
        "https://plus.unsplash.com/premium_photo-1661963265512-73e8d1053b9a?q=80&w=2055&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      label: "ROME",
    },
    {
      id: 3,
      name: "Changi, Singapore",
      image:
        "https://plus.unsplash.com/premium_photo-1727080903183-6541a8a5d4fc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1727080903183-6541a8a5d4fc",
      label: "SINGAPORE",
    },
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-7xl uppercase font-bold">Popular Destinations</h2>
          <p className="text-4xl text-gray-600 mt-2">
            Top picks of our passengers
          </p>
        </div>

        <div className="flex gap-6 justify-center items-center">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="card w-full bg-base-100 shadow-lg rounded-lg overflow-hidden"
            >
              <div className="relative">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="h-[500px] w-full object-cover"
                />
                <span className="absolute top-3 left-3 px-3 py-1 text-sm font-bold text-white bg-green-500 rounded-full">
                  {destination.label}
                </span>
              </div>
              {/* Card Content */}
              <div className="card-body text-center">
                <h3 className="text-lg font-semibold">{destination.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
