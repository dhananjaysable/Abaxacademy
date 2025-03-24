
import { Check } from 'lucide-react';
import benefitsImage from '../assets/our benefits.jpg'
const Benefits = () => {
  const benefits = [
    "Students develop a great sense towards numbers",
    "This increases their speed",
    "Memory is enhanced remarkably",
    "Activates right brain & trains to face competition",
    "Increases comprehension & imagination",
    "endurance, learning & writing skills",
    "Boosts their memory power",
    "Promotes concentration of children",
    "Enhances mathematical logic"
  ];

  return (
    <section className="py-12 px-6 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h3 className="text-xl font-semibold mb-6">Our Benefits</h3>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <Check className="text-green-500 w-5 h-5 mt-1 mr-2 flex-shrink-0" />
                <span className="text-sm">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src={benefitsImage} 
            alt="Our benefits stats" 
            className="w-full max-w-md h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
