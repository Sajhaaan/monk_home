const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Project Manager",
    company: "Tech Innovators",
    quote:
      "StreamLine has revolutionized the way our team works. It's intuitive, powerful, and has significantly improved our productivity.",
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "StartUp Solutions",
    quote:
      "As a startup founder, StreamLine has been a game-changer. It's helped us stay organized and focused on what matters most.",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Creative Minds Agency",
    quote:
      "The collaboration features in StreamLine are unparalleled. It's made our remote work seamless and efficient.",
  },
]

export default function Testimonials() {
  return (
    <div className="bg-gray-100 py-16 sm:py-24" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by teams worldwide
          </p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <p className="text-base text-gray-500 mb-4">"{testimonial.quote}"</p>
                  <div className="mt-4">
                    <div className="text-base font-medium text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

