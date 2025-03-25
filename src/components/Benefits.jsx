import { Check } from "lucide-react";
import benefitsImage from "../assets/bg2.jpg";

const Benefits = () => {
  const benefits = [
    "Students develop a great sense towards numbers",
    "This increases their speed",
    "Memory is enhanced remarkably",
    "Activates right brain & trains to face competition",
    "Increases comprehension & imagination",
    "Endurance, learning & writing skills",
    "Boosts their memory power",
    "Promotes concentration of children",
    "Enhances mathematical logic",
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-center">
  
        <div className="lg:w-1/2 mb-8 lg:mb-0 px-4">
          <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">
            Our Benefits
          </h3>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <Check className="text-green-500 w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                <span className="text-base leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="lg:w-1/2 flex justify-center items-center px-4"
          style={{
            backgroundImage: `url(${benefitsImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "290px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className="flex items-center justify-center gap-8 flex-wrap text-center text-4xl p-4 rounded-lg">
            <div className="flex flex-col items-center justify-center gap-2">
              <h1 className="text-blue-400 font-bold">600+</h1>
              <span className="font-semibold text-lg tracking-widest">
                Teachers
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <h1 className="text-blue-400 font-bold">2Lakh+</h1>
              <span className="font-semibold text-lg tracking-widest">
                Students
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <h1 className="text-blue-400 font-bold">80+</h1>
              <span className="font-semibold text-lg tracking-widest">
                Courses
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;