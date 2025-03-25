import abacusfirst from "../assets/abcusfirst.jpg";
import abacussecond from "../assets/abacus_at_school.jpg";
import vedicCourse from "../assets/vedic_course.jpg";
import handwriting from "../assets/handwriting_course.jpg";
import montessori from "../assets/Montessori_course.jpg";
import phonic from "../assets/phonic_course.jpg";

const CourseSection = () => {
  const courses = [
    { name: "Abacus", icon: "➡️" },
    { name: "Abacus At School", icon: "➡️" },
    { name: "Vedic Math", icon: "➡️" },
    { name: "Hand Writing", icon: "➡️" },
    { name: "Montessori", icon: "➡️" },
    { name: "Phonic", icon: "➡️" },
  ];

  const courseImages = [
    abacusfirst,
    abacussecond,
    vedicCourse,
    handwriting,
    montessori,
    phonic,
  ];

  return (
    <section className="py-12 px-6 bg-gray-100">
      <div className="container mx-auto">
        <h3 className="text-2xl font-semibold text-center mb-6">
          Choose Your <span className="font-bold">Course</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mt-10">
          {courses.map((course, index) => (
            <div
              key={index}
              className="text-center cursor-pointer bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300"
            >
              <div className="mb-4">
                <img
                  src={courseImages[index]}
                  alt={course.name}
                  className="w-full h-32 object-cover rounded-md"
                />
              </div>
              <p className="text-sm font-medium">{course.name}</p>
              <span className="text-sm text-gray-500">{course.icon}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;