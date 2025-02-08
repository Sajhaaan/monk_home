import Link from "next/link"

export default function CTA() {
  return (
    <div className="bg-blue-700">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Boost your productivity today.</span>
          <span className="block">Start using StreamLine for free.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-blue-200">
          Join thousands of teams already using StreamLine to simplify their workflow and increase productivity.
        </p>
        <Link
          href="#"
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 sm:w-auto"
        >
          Sign up for free
        </Link>
      </div>
    </div>
  )
}

