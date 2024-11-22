import Banner from "./Banner";
import AtAGlance from "./AtAGlance";
import Offers from "./Offers";
import SmoothJourneyBanner from "./SmoothJourneyBanner";
import PopularDestinations from "./PopularDestination";

function HomePage() {
  return (
    <div className="container mx-auto">
      <Banner />
      <AtAGlance />
      <Offers />
      <PopularDestinations />
      <SmoothJourneyBanner />
    </div>
  );
}

export default HomePage;
