export default function FeatureBoxes() { 

    return (
      <div className="p-2 grid grid-cols-1 sm:grid-cols-3 gap-20 ml-[-10]">
        {/* First Card */}
        <div className="bg-white text-black rounded-lg shadow p-[28px] text-center w-[216px] h-[175px] opacity-100">
          <img
            src="/service/Vector.png"
            alt="Vector Icon"
            className="w-[32px] h-[24px] ml-0 mb-4"
          />
          <h3 className="text-[20px] text-[#0B1215] font-[500] leading-[30px] text-left ">
            123k+
          </h3>
          <p className="text-[16px] text-2xl font-[500] text-[#0B1215] leading-[24px] text-left">
            Happy Customers
          </p>
          <p className="text-[12px] text-2xl text-[#0B1215] font-[400] mt-2 leading-[18px] text-left">
          Trusted by thousands
          </p>
          
        </div>
  
  
        {/* Second Card */}
        <div className="bg-white text-black rounded-lg shadow p-[28px] text-center w-[216px] h-[175px] opacity-100">
          <img
            src="/service/Vector.png"
            alt="Vector Icon"
            className="w-[32px] h-[24px] ml-0 mb-4"
          />
          <h3 className="text-[20px] text-2xl font-[500] text-[#0B1215] leading-[30px] text-left ">
            250+
          </h3>
          <p className="text-[16px] text-2xl font-[500] text-[#0B1215] leading-[24px] text-left">
            Expert Professionals
          </p>
          <p className="text-[12px] text-[#0B1215] font-[400]  mt-2  leading-[18px] text-left">
            Delivering Excellence
          </p>
          
        </div>
  
        {/* Third Card */}
        <div className="bg-white text-black rounded-lg shadow p-[28px] text-center w-[216px] h-[175px] opacity-100">
          <img
            src="/service/Vector.png"
            alt="Vector Icon"
            className="w-[32px] h-[24px] ml-0 mb-4"
          />
          <h3 className="text-[20px] font-[500] text-2xl text-[#0B1215] leading-[30px] text-left">
            500+
          </h3>
          <p className="text-[16px]  text-2xl font-[500] text-[#0B1215] leading-[24px] text-left">
          Projects Completed 
          </p>
          <p className="text-[12px] text-[#0B1215] font-[400]  mt-2  leading-[18px] text-left">
          Transforming Dreams
          </p>
         
        </div>
      </div>
    );
  }
  