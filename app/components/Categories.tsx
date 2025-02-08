import Image from "next/image"

const categories = [
  {
    name: "Women's Fashion",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Men's Apparel",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Accessories",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  },
  {
    name: "Activewear",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1041&q=80",
  },
]

export default function Categories() {
  return (
    <div className="bg-gray-100" id="categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Collections</h2>
          <p className="mt-4 text-xl text-gray-500">Explore our diverse range of wholesale clothing categories.</p>

          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-6">
            {categories.map((category) => (
              <div key={category.name} className="group relative">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <Image
                    src={category.imageSrc || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-center object-cover"
                    width={500}
                    height={500}
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={category.href}>
                    <span className="absolute inset-0" />
                    {category.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">Explore collection</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

