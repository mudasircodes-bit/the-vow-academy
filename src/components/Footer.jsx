function Footer() {
  return (
    <footer className="bg-[#12355B] text-white">
      <div className="max-w-7xl mx-auto px-12 py-14">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Academy */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-[#00A6A6] flex items-center justify-center">
                <span className="font-bold text-lg">
                  VW
                </span>
              </div>

              <div>
                <h2 className="font-bold text-lg">
                  The Voice of Wisdom
                </h2>

                <p className="text-sm text-[#B9C9D6]">
                  English Language Academy
                </p>
              </div>
            </div>

            <p className="text-[#B9C9D6] leading-7 max-w-md">
              Helping students improve their English language,
              communication skills, and confidence for a better future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-5">
              Quick Links
            </h3>

            <div className="space-y-3">
              <a
                href="#home"
                className="block text-[#B9C9D6] hover:text-[#00A6A6] transition"
              >
                Home
              </a>

              <a
                href="#about"
                className="block text-[#B9C9D6] hover:text-[#00A6A6] transition"
              >
                About
              </a>

              <a
                href="#courses"
                className="block text-[#B9C9D6] hover:text-[#00A6A6] transition"
              >
                Courses
              </a>

              <a
                href="#contact"
                className="block text-[#B9C9D6] hover:text-[#00A6A6] transition"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-5">
              Contact
            </h3>

            <div className="space-y-3 text-[#B9C9D6]">
              <p>Phone: +92 XXX XXXXXXX</p>
              <p>Email: info@thevoiceofwisdom.com</p>
              <p>Location: Your Academy Location</p>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between gap-3">

          <p className="text-sm text-[#B9C9D6]">
            © 2026 The Voice of Wisdom. All rights reserved.
          </p>

          <p className="text-sm text-[#B9C9D6]">
            English Language & Learning Academy
          </p>

        </div>

      </div>
    </footer>
  )
}

export default Footer