import Link from "next/link"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Basic",
    price: 9,
    features: ["Task management", "Time tracking", "Basic reporting", "Up to 5 team members"],
  },
  {
    name: "Pro",
    price: 29,
    features: ["All Basic features", "Advanced reporting", "Team collaboration", "Unlimited team members"],
  },
  {
    name: "Enterprise",
    price: 99,
    features: ["All Pro features", "Custom integrations", "Dedicated support", "Advanced security"],
  },
]

export default function Pricing() {
  return (
    <div className="bg-white py-16 sm:py-24" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Choose the right plan for your team
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Whether you're a small team or a large enterprise, we have a plan that fits your needs.
          </p>
        </div>

        <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">${plan.price}</span>
                  <span className="ml-1 text-xl font-semibold">/month</span>
                </p>
                <ul className="mt-6 space-y-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex">
                      <Check className="flex-shrink-0 w-6 h-6 text-green-500" aria-hidden="true" />
                      <span className="ml-3 text-base text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="#"
                className={`mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium ${
                  plan.name === "Pro"
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-blue-50 text-blue-700 hover:bg-blue-100"
                }`}
              >
                {plan.name === "Enterprise" ? "Contact sales" : "Get started"}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

