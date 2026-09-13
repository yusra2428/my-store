import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useProducts } from '../context/ProductsContext'
import ProductCard from '../components/ProductCard'

function Home() {
  const { products } = useProducts()
  const [searchParams] = useSearchParams()
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  useEffect(() => {
    const urlSearch = searchParams.get('search')
    if (urlSearch) {
      setSearch(urlSearch)
    }
  }, [searchParams])

  const categories = ['All', ...new Set(products.map((p) => p.category))]

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase())
    const matchesCategory = category === 'All' || product.category === category
    return matchesSearch && matchesCategory
  })

  return (
    <div>
      {/* Hero banner */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-900 text-white">
                <div className="max-w-[1600px] mx-auto px-6 py-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Everything You Need, In One Place
          </h2>
                  <p className="text-purple-100 text-sm md:text-base">
            Quality products at honest prices — shop electronics, fashion, home & more.
          </p>
        </div>
      </div>

           <div className="max-w-[1600px] mx-auto px-6 py-10">
                
        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500 mt-12">
            No products match your search.
          </p>
        ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Home