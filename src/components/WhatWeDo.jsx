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
      className="py-12 bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${library})` }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8 sm:mb-12">
            What We Do
          </h3>

          <div className="relative max-w-4xl mx-auto">
        
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {carouselItems.map((item) => (
                  <div
                    key={item.id}
                    className="min-w-full flex-shrink-0 p-4 sm:p-6 flex flex-col items-center justify-center text-center"
                  >
                    <div className="mb-6 sm:mb-8">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="mx-auto rounded-full bg-yellow-100 p-2 mb-4 w-28 h-28 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-cover"
                      />
                    </div>

                    <h4 className="text-lg sm:text-xl mb-2">{item.title}</h4>
                    <p className="text-sm sm:text-base max-w-xs sm:max-w-md mx-auto">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-r-md focus:outline-none"
              onClick={goToPrevious}
            >
              &#10094;
            </button>

            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-l-md focus:outline-none"
              onClick={goToNext}
            >
              &#10095;
            </button>

            <div className="flex justify-center mt-4 space-x-2">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full focus:outline-none ${
                    index === currentIndex ? "bg-white" : "bg-gray-400"
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