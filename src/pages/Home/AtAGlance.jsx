const AtAGlance = () => {
  return (
    <div className="mt-20">
      <h2 className="text-7xl font-bold text-center mb-3 uppercase">
        At a glance
      </h2>
      <p className="text-3xl text-center text-gray-500 mb-10">
        From Takeoff to Landing: A closer look at our operations
      </p>
      <div className="bg-[#0B1E44] py-10 px-8 flex justify-around">
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold text-white">21</span>
          <p className="text-white">Fleet Family</p>
        </div>
        <div className="text-center">
          <span className="text-4xl font-bold text-white">23</span>
          <p className="text-white">International Destinations</p>
        </div>
        <div className="text-center">
          <span className="text-4xl font-bold text-white">7</span>
          <p className="text-white">Domestic Destinations</p>
        </div>
        <div className="text-center">
          <span className="text-4xl font-bold text-white">Above 80 %</span>
          <p className="text-white">On Time Performance</p>
        </div>
      </div>
    </div>
  );
};

export default AtAGlance;
