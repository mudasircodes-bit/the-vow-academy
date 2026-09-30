function AboutSection() {
  return (
    <section
      id="about"
      className="bg-white py-24"
    >
      <div className="max-w-7xl mx-auto px-12">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <p className="text-sm font-bold tracking-[0.15em] text-[#00A6A6] uppercase mb-4">
              About Our Academy
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#12355B] leading-tight mb-6">
              Learning English with
              <br />
              <span className="text-[#00A6A6]">
                Purpose & Confidence
              </span>
            </h2>

            <p className="text-[#64748B] text-lg leading-8 mb-6">
              The Voice of Wisdom is an English language and learning academy
              focused on helping students improve their English skills in a
              practical and confident way.
            </p>

            <p className="text-[#64748B] leading-7">
              Our learning approach focuses on communication, grammar,
              vocabulary, pronunciation, writing, and everyday English.
              We aim to create a learning environment where students can
              develop their abilities step by step.
            </p>
          </div>

          {/* Right Content */}
          <div className="grid sm:grid-cols-2 gap-5">

            <div className="bg-[#F5FAFA] border border-[#DDE7EA] rounded-2xl p-7">
              <div className="w-12 h-12 rounded-xl bg-[#12355B] flex items-center justify-center mb-5">
                <span className="text-white text-xl font-bold">
                  01
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#12355B] mb-3">
                Practical Learning
              </h3>

              <p className="text-[#64748B] leading-6">
                Learn English through practical activities and real
                communication.
              </p>
            </div>

            <div className="bg-[#F5FAFA] border border-[#DDE7EA] rounded-2xl p-7">
              <div className="w-12 h-12 rounded-xl bg-[#00A6A6] flex items-center justify-center mb-5">
                <span className="text-white text-xl font-bold">
                  02
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#12355B] mb-3">
                Communication
              </h3>

              <p className="text-[#64748B] leading-6">
                Build confidence in speaking, listening, and everyday
                communication.
              </p>
            </div>

            <div className="bg-[#F5FAFA] border border-[#DDE7EA] rounded-2xl p-7">
              <div className="w-12 h-12 rounded-xl bg-[#00A6A6] flex items-center justify-center mb-5">
                <span className="text-white text-xl font-bold">
                  03
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#12355B] mb-3">
                Strong Foundation
              </h3>

              <p className="text-[#64748B] leading-6">
                Strengthen grammar, vocabulary, writing, and pronunciation.
              </p>
            </div>

            <div className="bg-[#F5FAFA] border border-[#DDE7EA] rounded-2xl p-7">
              <div className="w-12 h-12 rounded-xl bg-[#12355B] flex items-center justify-center mb-5">
                <span className="text-white text-xl font-bold">
                  04
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#12355B] mb-3">
                Student Growth
              </h3>

              <p className="text-[#64748B] leading-6">
                Develop the skills and confidence needed for future goals.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default AboutSection