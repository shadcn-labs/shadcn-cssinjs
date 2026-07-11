type PriceCardProps = {
  title: string
  price: string
  featured?: boolean
}

export function PriceCard({ title, price, featured }: PriceCardProps) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="mt-2 text-3xl font-bold text-gray-900">{price}</p>
      <button className="mt-4 w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 focus-visible:bg-blue-800 disabled:bg-gray-300">
        Choose plan
      </button>
    </div>
  )
}
