import Navbar from "../components/Navbar";
import FeatureBoxes from "../components/FeatureBoxes";
import Form from "../components/Form";

export default function Home() {
  return (
    <div className="bg-gray-50 relative">
      <section
        className="h-screen bg-cover bg-center flex items-center text-white relative"
        style={{
          backgroundImage: 'url("/Hero.png")',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 w-full px-8 flex justify-between items-center">
          {/* Left Section */}
          <div className="flex flex-col w-full md:w-1/2 text-left mb-12 px-5 sm:px-10">
            <div className="max-w-lg mb-8">
              <h1 className="text-5xl font-extrabold leading-tight mb-4">
                <span className="text-7xl">Build</span>
                <span className="text-5xl"> Better,</span> <br />
                <span className="text-5xl">Live</span>
                <span className="text-7xl"> Beautifully</span>
              </h1>
              <p className="text-lg leading-relaxed">
                HouseBanao transforms ordinary spaces into extraordinary homes with
                exceptional home construction and personalized cost estimation with
                unmatched expertise.
              </p>
            </div>

            {/* Feature Boxes */}
            <div className="hidden sm:block">
              <FeatureBoxes />
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className="hidden sm:block">
            <Form />
          </div>
        </div>
      </section>
    </div>
  );
}
