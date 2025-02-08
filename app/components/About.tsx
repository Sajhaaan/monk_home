export default function About() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">About Us</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Quality Meets Style
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            At FashionBulk, we're committed to providing high-quality, trendy wholesale clothing that helps your
            business thrive.
          </p>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Ethically Sourced</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                We partner with responsible manufacturers to ensure our products are ethically sourced and produced.
              </dd>
            </div>
            <div className="relative">
              <dt>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Trend-Focused</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Our team of fashion experts curates collections that align with the latest global trends.
              </dd>
            </div>
            <div className="relative">
              <dt>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Quality Assurance</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                We maintain strict quality control measures to ensure every piece meets our high standards.
              </dd>
            </div>
            <div className="relative">
              <dt>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Flexible Ordering</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                From small boutiques to large retailers, we offer flexible minimum order quantities to suit your needs.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}

