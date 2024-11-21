const SmoothJourneyBanner = () => {
  return (
    <div
      className="mt-10 relative bg-cover bg-center h-[400px] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1514905470979-27fb01f10b49?q=80&w=1953&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative text-center text-white">
        <h1 className="text-5xl font-bold mb-4 uppercase">
          We are committed to making your journey smooth and comfortable,
        </h1>
        <p className="text-2xl uppercase">
          from ticketing to your destination.
        </p>
      </div>
    </div>
  );
};

export default SmoothJourneyBanner;
