import Navbar from "../Shared/Navbar";
import Banner from "./Banner";
import AtAGlance from "./AtAGlance";
import Offers from "./Offers";
import SmoothJourneyBanner from "./SmoothJourneyBanner";
import PopularDestinations from "./PopularDestination";
import Footer from "../Shared/Footer";

function HomePage() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Banner />
      <AtAGlance />
      <Offers />
      <PopularDestinations />
      <SmoothJourneyBanner />
      <Footer />
    </div>
  );
}

export default HomePage;
