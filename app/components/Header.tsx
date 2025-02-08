import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <span className="sr-only">FashionBulk</span>
              <span className="text-2xl font-bold text-indigo-600">FashionBulk</span>
            </Link>
          </div>
          <div className="ml-10 space-x-4">
            <Link
              href="#categories"
              className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
            >
              Our Collections
            </Link>
            <Link
              href="#contact"
              className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

