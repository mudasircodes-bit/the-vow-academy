function Courses() {
  const courses = [
    {
      title: 'Spoken English',
      description:
        'Improve your speaking, pronunciation, vocabulary, and confidence in everyday English.',
    },
    {
      title: 'Grammar & Writing',
      description:
        'Build a strong foundation in grammar and learn to write clearly and correctly.',
    },
    {
      title: 'Communication Skills',
      description:
        'Develop effective speaking, listening, presentation, and communication skills.',
    },
    {
      title: 'IELTS Preparation',
      description:
        'Prepare for IELTS with focused practice in speaking, listening, reading, and writing.',
    },
  ]

  return (
    <section
      id="courses"
      className="bg-[#F5FAFA] py-24"
    >
      <div className="max-w-7xl mx-auto px-12">

        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-bold tracking-[0.15em] text-[#00A6A6] uppercase mb-4">
            Our Courses
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#12355B] mb-5">
            Learn. Improve. <span className="text-[#00A6A6]">Grow.</span>
          </h2>

          <p className="text-[#64748B] text-lg leading-8">
            Choose the course that matches your learning goals and take
            the next step in your English journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div
              key={course.title}
              className="bg-white border border-[#DDE7EA] rounded-2xl p-7 hover:-translate-y-1 hover:shadow-lg transition duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-[#12355B] text-white flex items-center justify-center font-bold mb-6">
                0{index + 1}
              </div>

              <h3 className="text-xl font-bold text-[#12355B] mb-4">
                {course.title}
              </h3>

              <p className="text-[#64748B] leading-7 text-sm">
                {course.description}
              </p>

              <a
                href="#contact"
                className="inline-block mt-6 text-sm font-bold text-[#00A6A6] hover:text-[#12355B] transition"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Courses