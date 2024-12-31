import React from 'react';
import { FaStar } from 'react-icons/fa';
import test1 from '../public/testimonials/test1.png';
import test2 from '../public/testimonials/test2.png';
import test3 from '../public/testimonials/test3.png';
import Wrapper from './Wrapper';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Housewife',
    content:
      "I’m so happy to share my experience with HouseBanao. When we decided to build our dream home, we were nervous about the whole process. But from the first meeting, the team at HouseBanao understood our vision. They guided us every step of the way, and the final result exceeded our expectations. Our home is now everything we envisioned and more!",
    image: test1,
  },
  {
    name: 'Anil Kapoor',
    role: 'Software Engineer',
    content:
      "Building our dream home was something we’d always wanted to do, but we didn’t know where to start. That’s when we found HouseBanao. They took the time to understand our needs and helped us through every stage of the process. From design to completion, they made it easy, and now our home is everything we imagined—beautiful and functional.",
    image: test2,
  },
  {
    name: 'Rajesh Verma',
    role: 'Business Man - Shop Owner',
    content:
      "I’m excited to share my experience with HouseBanao, we were looking for a reliable partner, and HouseBanao was just what we needed. From day one, their team listened carefully to our ideas and offered great advice. They kept us informed throughout the process, and the quality of their work is exceptional. We couldn’t be happier with our new home!",
    image: test3,
  },
];

const Testimonials = () => {
  return (
    <div className="py-12 ">
      {/* Heading with White Background */}
      <Wrapper>
      <div className=" ">
        <h1 className="text-left text-2xl lg:text-4xl xl:text-6xl font-bold ">TESTIMONIALS</h1>
      </div>

      {/* Testimonials Section */}
      <div className="text-center mb-6 md:mb-10 px-6 md:px-12 bg-[#F8F9FF]">
        <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mt-10 text-black">
          Real Stories from Satisfied Customers
        </h3>
        <p className="text-sm sm:text-base text-[#2D2D2D] max-w-3xl mt-2 mx-auto">
          See how our landing page UI kit is making an impact.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className=" bg-[#F8F9FF] grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6  ">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-3 lg:p-6 flex flex-col items-center"
          >
            <img
              src={testimonial.image.src}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full mb-4 object-cover"
            />
            <p className="text-gray-700 italic text-center mb-4 text-sm sm:text-base">
              "{testimonial.content}"
            </p>
            <div className="flex items-center gap-1 text-yellow-500 mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <h4 className="text-lg font-bold text-gray-800">{testimonial.name}</h4>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        ))}
      </div>
      </Wrapper>
    </div>
  );
};

export default Testimonials;
