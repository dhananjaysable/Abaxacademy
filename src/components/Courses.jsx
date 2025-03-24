export default function Courses() {
    const courses = [
      "Alguns",
      "About Al",
      "Voice Math",
      "Hand Writing",
      "Monteesoft",
      "Phonic"
    ];
  
    return (
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Choose Your Course</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {courses.map((course, index) => (
              <button 
                key={index}
                className="p-4 bg-blue-100 hover:bg-blue-200 rounded-lg text-center"
              >
                {course}
              </button>
            ))}
          </div>
        </div>
      </section>
    )
  }