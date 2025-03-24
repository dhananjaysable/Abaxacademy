import certificate1 from "../assets/abax academy ico.png";
import certificate2 from "../assets/cert.jpg";
import certificate3 from "../assets/gumsta.png";
import certificate4 from "../assets/Certificate3.jpg";
import certificate5 from "../assets/Certificate4.jpg";
import certificate6 from "../assets/udyam registration.png";

const CertificateSection = () => {
  const certificates = [
    certificate1,
    certificate2,
    certificate3,
    certificate4,
    certificate5,
    certificate6,
  ];
  return (
    <section className="py-12 px-6">
      <div className="container mx-auto">
        <h3 className="text-2xl font-semibold text-center mb-10">
          Abax Academy <span className="font-bold">Certificate</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
          {[1, 2, 3, 4,5,6].map((item) => (
            <div
              key={item}
              className="border border-red-200 rounded p-2 shadow-sm flex justify-center hover:shadow-md transition-shadow"
            >
              <img
                src={certificates[item - 1]}
                alt={`Certificate sample ${item}`}
                className="h-48 w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
