import { useState, useEffect } from "react";
import library from "../assets/libraryyy.jpg";
import eduactivities from "../assets/edu activities.jpg";
import selfconfidence from "../assets/selfconfidence.jpg";
import creativity from "../assets/creativity.jpg";
import memory from "../assets/memory_carous.jpg";
import visualization from "../assets/visualisation.jpg";
import i2 from "../assets/i2.jpg";
import i3 from "../assets/i3.jpg";
import leftbrain from "../assets/leftbrain.jpg";

const WhatWeDo = () => {
  const carouselItems = [
    {
      id: 1,
      image: eduactivities,
      title: "Welcome to ABAX ACADEMY",
      description: "An Educational Abacus Learning Centre for Growing Children",
    },
    {
      id: 2,
      image: visualization,
      title: "Develop Skills That Last a Lifetime",
      description:
        "Our proven methodology helps children excel in mathematics and beyond",
    },
    {
      id: 3,
      image: i2,
      title: "Join Our Learning Community",
      description: "Experience the joy of learning in a supportive environment",
    },
    {
      id: 4,
      image: creativity,
      title: "Innovative Learning Techniques",
      description:
        "We use creative methods to make learning fun and engaging for children",
    },
    {
      id: 5,
      image: selfconfidence,
      title: "Boost Confidence and Focus",
      description:
        "Our programs are designed to enhance children's confidence and concentration",
    },
    {
      id: 6,
      image: memory,
      title: "Personalized Attention",
      description:
        "We ensure every child gets the attention they need to thrive",
    },
    {
      id: 7,
      image: i3,
      title: "Building a Strong Foundation",
      description:
        "Prepare your child for academic success with our structured programs",
    },
    {
      id: 8,
      image: leftbrain,
      title: "Interactive Learning Environment",
      description:
        "Children learn best in an environment that encourages interaction and curiosity",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselItems.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section 
      className="relative w-full min-h-[500px] bg-cover bg-center text-white flex items-center justify-center"
      style={{ backgroundImage: `url(${library})` }}
    >
      <div className="container mx-auto px-4 w-full">
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-white">
            What We Do
          </h3>

          <div className="relative w-full max-w-4xl mx-auto">
            {/* Carousel Container */}
            <div className="overflow-hidden rounded-lg shadow-lg ">
              <div
                className="flex transition-transform duration-500 ease-in-out items-center justify-center"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {carouselItems.map((item) => (
                  <div
                    key={item.id}
                    className="min-w-full flex-shrink-0 p-4 md:p-8 flex flex-col items-center bg-white text-black justify-center text-center "
                  >
                    <div className="mb-4 md:mb-6">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="mx-auto rounded-full bg-yellow-100 p-2 w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 object-cover shadow-md flex items-center justify-center"
                      />
                    </div>

                    <h4 className="text-lg flex items-center justify-center md:text-2xl mb-2 font-semibold text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm flex items-center justify-center md:text-base max-w-xs md:max-w-md mx-auto text-white">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 
                         bg-black bg-opacity-50 hover:bg-opacity-75 
                         text-white p-2 md:p-4 rounded-r-md 
                         focus:outline-none z-10"
              onClick={goToPrevious}
            >
              <span className="text-xl md:text-3xl">&lt;</span>
            </button>

            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 
                         bg-black bg-opacity-50 hover:bg-opacity-75 
                         text-white p-2 md:p-4 rounded-l-md 
                         focus:outline-none z-10"
              onClick={goToNext}
            >
              <span className="text-xl md:text-3xl">&gt;</span>
            </button>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-4 md:mt-6 space-x-2">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full focus:outline-none transition-colors duration-300 ${
                    index === currentIndex 
                      ? "bg-white scale-125" 
                      : "bg-gray-400 hover:bg-gray-300"
                  }`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;