import Navbar from "../components/Navbar";
import FeatureBoxes from "../components/FeatureBoxes";
import Form from "../components/Form";
import Wrapper from "./Wrapper";

export default function Home() {
  return (
    <div className="bg-gray-50 relative ">
      {/* Hero Section */}
      <section
        className=" bg-cover bg-center  text-white relative"
        style={{
          backgroundImage: 'url("/Hero.png")',
          // paddingTop: "32px"
          // Replace with your image path
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 "></div>

        {/* Content */}
       
        <Wrapper className={"relative z-10 w-full space-y-8 lg:space-y-0 lg:flex justify-between items-center  pt-12 sm:pt-24 md:pt-0 "}>
  {/* Left Section: Hero Heading, Paragraph, and Feature Boxes */}
  <div className="flex flex-col w-full lg:w-1/2 text-left  lg:pt-24  ">
            {/* Hero Heading */}
            <div className="max-w-lg mb-8 ">
              <h1 className="text-5xl font-extrabold leading-tight mb-4">
                <span className="text-xl md:text-2xl lg:text-4xl xl:text-6xl 2xl:text-7xl">Build</span>
                <span className="text-lg lg:text-2xl xl:text-4xl 2xl:text-5xl"> Better,</span> <br className="hidden md:block"/>
                <span className="text-lg lg:text-2xl xl:text-4xl 2xl:text-5xl">Live</span>
                <span className="text-xl md:text-2xl lg:text-4xl xl:text-6xl 2xl:text-7xl"> Beautifully</span>
              </h1>
              <p className="text-sm sm:text-lg leading-relaxed">
                HouseBanao transforms ordinary spaces into extraordinary homes with
                exceptional home construction and personalized cost estimation with
                unmatched expertise.
              </p>
            </div>

            {/* Feature Boxes */}
            <div className=" ">
              <FeatureBoxes />
            </div>
          </div>

          {/* Right Section: Form positioned above the background image */}
          <div className="">
            <Form />
          </div>
        </Wrapper>
      </section>
    </div>
  );
}
