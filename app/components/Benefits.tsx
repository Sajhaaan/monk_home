import { Truck, DollarSign, Sparkles, Users } from "lucide-react"

const benefits = [
  {
    name: "Fast Shipping",
    description: "Quick turnaround times and reliable shipping options.",
    icon: Truck,
  },
  {
    name: "Competitive Pricing",
    description: "Wholesale prices that help maximize your profits.",
    icon: DollarSign,
  },
  {
    name: "Quality Assurance",
    description: "High-quality materials and expert craftsmanship.",
    icon: Sparkles,
  },
  {
    name: "Dedicated Support",
    description: "24/7 customer service for all your needs.",
    icon: Users,
  },
]

export default function Benefits() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Benefits</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose FashionBulk?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We offer more than just clothing. Partner with us for a seamless wholesale experience.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {benefits.map((benefit) => (
              <div key={benefit.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <benefit.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{benefit.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{benefit.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

