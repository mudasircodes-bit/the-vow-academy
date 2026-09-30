function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-[#DDE7EA] shadow-sm">
     <div className="w-full px-24">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">

            <div className="w-11 h-11 rounded-xl bg-[#12355B] flex items-center justify-center shadow-sm group-hover:bg-[#00A6A6] transition duration-300">
              <span className="text-white font-bold text-lg tracking-wide">
                VW
              </span>
            </div>

            <div>
              <h1 className="text-[15px] font-bold text-[#12355B] leading-tight">
                The Voice of Wisdom
              </h1>

              <p className="text-xs text-[#64748B] mt-1">
                English Language Academy
              </p>
            </div>

          </a>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-9">

            <a
  href="#home"
  className="relative text-sm font-medium text-[#64748B] py-2
hover:text-[#12355B] hover:font-bold transition duration-300
after:absolute after:left-0 after:bottom-0 after:h-[2px]
after:w-0 after:bg-[#00A6A6]
hover:after:w-full after:transition-all after:duration-300"
>
  Home
</a>
            <a
              href="#about"
              className="relative text-sm font-medium text-[#64748B] py-2
hover:text-[#12355B] hover:font-bold transition duration-300
after:absolute after:left-0 after:bottom-0 after:h-[2px]
after:w-0 after:bg-[#00A6A6]
hover:after:w-full after:transition-all after:duration-300"
            >
              About
            </a>

            <a
              href="#courses"
              className="relative text-sm font-medium text-[#64748B] py-2
hover:text-[#12355B] hover:font-bold transition duration-300
after:absolute after:left-0 after:bottom-0 after:h-[2px]
after:w-0 after:bg-[#00A6A6]
hover:after:w-full after:transition-all after:duration-300"
            >
              Courses
            </a>

            <a
              href="#teachers"
             className="relative text-sm font-medium text-[#64748B] py-2
hover:text-[#12355B] hover:font-bold transition duration-300
after:absolute after:left-0 after:bottom-0 after:h-[2px]
after:w-0 after:bg-[#00A6A6]
hover:after:w-full after:transition-all after:duration-300"
            >
              Teachers
            </a>

            <a
              href="#contact"
              className="relative text-sm font-medium text-[#64748B] py-2
hover:text-[#12355B] hover:font-bold transition duration-300
after:absolute after:left-0 after:bottom-0 after:h-[2px]
after:w-0 after:bg-[#00A6A6]
hover:after:w-full after:transition-all after:duration-300"
            >
              Contact
            </a>

          </div>

          {/* Apply Button */}
          <a
            href="#admission"
            className="relative text-sm font-medium text-[#64748B] py-5
hover:text-[#12355B] hover:font-bold transition duration-300
after:absolute after:left-0 after:bottom-0 after:h-[2px]
after:w-0 after:bg-[#00A6A6]
hover:after:w-full after:transition-all after:duration-300 mr-6"
          >
            Apply Now
          </a>

        </div>
      </div>
    </nav>
  )
}

export default Navbar