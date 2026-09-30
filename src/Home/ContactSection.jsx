function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-white py-24"
    >
      <div className="max-w-7xl mx-auto px-12">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Side */}
          <div>
            <p className="text-sm font-bold tracking-[0.15em] text-[#00A6A6] uppercase mb-4">
              Contact Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#12355B] leading-tight mb-6">
              Let's Start Your
              <br />
              <span className="text-[#00A6A6]">
                English Journey
              </span>
            </h2>

            <p className="text-[#64748B] text-lg leading-8 max-w-lg mb-10">
              Have a question about our courses or admission?
              Get in touch with The Voice of Wisdom.
            </p>

            <div className="space-y-6">

              <div>
                <p className="text-sm font-semibold text-[#64748B] mb-1">
                  Phone
                </p>
                <p className="text-lg font-bold text-[#12355B]">
                  +92 XXX XXXXXXX
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-[#64748B] mb-1">
                  Email
                </p>
                <p className="text-lg font-bold text-[#12355B]">
                  info@thevoiceofwisdom.com
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-[#64748B] mb-1">
                  Location
                </p>
                <p className="text-lg font-bold text-[#12355B]">
                  Your Academy Location
                </p>
              </div>

            </div>
          </div>

          {/* Right Side */}
          <div className="bg-[#F5FAFA] border border-[#DDE7EA] rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-[#12355B] mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-white border border-[#DDE7EA] rounded-lg px-4 py-3.5 outline-none focus:border-[#00A6A6]"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-white border border-[#DDE7EA] rounded-lg px-4 py-3.5 outline-none focus:border-[#00A6A6]"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-white border border-[#DDE7EA] rounded-lg px-4 py-3.5 outline-none focus:border-[#00A6A6]"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full bg-white border border-[#DDE7EA] rounded-lg px-4 py-3.5 outline-none focus:border-[#00A6A6] resize-none"
              />

              <button
                type="submit"
                className="w-full bg-[#12355B] text-white py-3.5 rounded-lg font-semibold hover:bg-[#00A6A6] transition duration-300"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  )
}

export default ContactSection