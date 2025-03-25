import sideImg from '../assets/ab.jpg';

const Welcome = () => {
  return (
    <section className="py-12 px-6">
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-center mb-2">
          Welcome To <span className="text-gray-800 uppercase">Abax Academy</span>
        </h2>
        <div className="w-40 h-1 bg-blue-400 mx-auto mb-8"></div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          {/* Text Section */}
          <div className="md:w-1/2 mb-6 md:mb-0 text-center md:text-left">
            <p className="italic mb-4">Interface Friendly Learning At</p>
            <h3 className="text-blue-500 text-2xl font-bold mb-6">ABAX ACADEMY</h3>
            <p className="text-sm text-justify text-gray-600 mb-6">
              ABAX ACADEMY Started in 2009, An ISO 9001:2015 certified company a unit of A.A Academy, is continuously growing in the market. We are manufacturers, supplier and exporter of Abacus and other related products like Kit Tool Box, T-Shirt, Training Books & abacus Study Material. Also we are the leading service provider of Training and Franchise and Montessori Teacher training.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="bg-blue-400 text-white px-4 py-1 rounded hover:bg-blue-500 cursor-pointer transition duration-300">
                Read more
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src={sideImg}
              alt="Student learning"
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;