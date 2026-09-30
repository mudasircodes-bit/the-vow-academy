import React from 'react'

function Hero() {
  const highlights = [
    'Spoken English & Fluency',
    'Grammar & Professional Writing',
    'Public Speaking & Confidence',
    'IELTS & Academic Preparation',
  ]

  return (
    <section
      id="home"
      className="relative min-h-[90vh] bg-[#F5FAFA] flex items-center overflow-hidden py-16 lg:py-24"
    >
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[30rem] h-[30rem] bg-[#00A6A6]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-[30rem] h-[30rem] bg-[#12355B]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container with extra horizontal breathing room */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Badge */}
            <div>
              <span className="inline-flex items-center gap-2 bg-[#E6F7F7] text-[#00A6A6] px-4 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase mb-6 shadow-sm border border-[#00A6A6]/20">
                <span className="w-2 h-2 rounded-full bg-[#00A6A6] animate-pulse" />
                English Language & Learning Academy
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#12355B] leading-[1.15] tracking-tight mb-6">
              Build Your English.{' '}
              <span className="text-[#00A6A6] block sm:inline">
                Build Your Future.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl mb-8 font-normal">
              The Voice of Wisdom equips students with natural English communication, 
              unshakable speaking confidence, and the practical mastery needed for outstanding 
              academic and professional career success.
            </p>

            {/* Buttons with Refined Gradient & Elevation */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 mb-12">
  <a
    href="#courses"
    className="inline-flex justify-center items-center bg-white/80 backdrop-blur-sm border-2 border-[#12355B] text-[#12355B] px-10 py-5 rounded-xl font-bold text-base shadow-sm hover:bg-[#12355B] hover:text-white hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 text-center"
  >
    Explore Courses
  </a>

  <a
    href="#admission"
    className="inline-flex justify-center items-center bg-white/80 backdrop-blur-sm border-2 border-[#12355B] text-[#12355B] px-10 py-5 rounded-xl font-bold text-base shadow-sm hover:bg-[#12355B] hover:text-white hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 text-center"
  >
    Apply Now
  </a>
</div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#DDE7EA]">
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-[#12355B]">English</p>
                <p className="text-xs sm:text-sm text-[#64748B] font-medium mt-1">Language Skills</p>
              </div>

              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-[#12355B]">Practical</p>
                <p className="text-xs sm:text-sm text-[#64748B] font-medium mt-1">Learning Approach</p>
              </div>

              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-[#12355B]">Confident</p>
                <p className="text-xs sm:text-sm text-[#64748B] font-medium mt-1">Communication</p>
              </div>
            </div>
          </div>

          {/* Right Feature Card Column (Clean Alignment & Spacing) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-lg bg-white rounded-3xl border border-[#DDE7EA] shadow-xl p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between">
              
              <div>
                {/* Header Icon / Avatar Badge */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#12355B] to-[#1a4a7d] text-[#00A6A6] flex items-center justify-center text-2xl sm:text-3xl font-black shadow-md mb-6">
                  Aa
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12355B] mb-3 tracking-tight">
                  Learn. Speak. Grow.
                </h2>

                <p className="text-sm sm:text-base text-[#64748B] leading-relaxed text-justify mb-8">
                  Build vocabulary, master grammar, sharpen pronunciation, and express yourself with clarity and conviction in any setting.
                </p>
              </div>

              {/* Justified Feature Cards */}
              <div className="space-y-3">
                {highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3.5 p-3 rounded-xl bg-[#F5FAFA] border border-[#E6F7F7] hover:border-[#00A6A6]/40 transition-colors"
                  >
                    <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-[#E6F7F7] text-[#00A6A6] flex items-center justify-center font-bold">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-[#12355B] font-semibold text-sm sm:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero