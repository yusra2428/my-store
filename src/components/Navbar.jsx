import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../context/CartContext'

function Navbar() {
  const { cartCount } = useCart()
  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  function handleSearch(e) {
    e.preventDefault()
    navigate(`/?search=${encodeURIComponent(search)}`)
  }

  return (
        <div className="sticky top-0 z-50 bg-gray-900 shadow-sm">
      <div className="max-w-[1600px] mx-auto px-6 py-3 flex items-center gap-6">
        <Link to="/" className="shrink-0">
                    <h1 className="text-2xl font-bold text-white tracking-tight">
            Vertex<span className="text-purple-400">Store</span>
          </h1>
        </Link>

        <form onSubmit={handleSearch} className="flex-1 flex">
                    <input
            type="text"
            placeholder="Search products, brands and more..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 rounded-l-md focus:outline-none text-gray-800 bg-white placeholder-gray-400"
          />
          <button
            type="submit"
            className="bg-yellow-400 px-4 rounded-r-md hover:bg-yellow-500 transition-colors"
          >
            🔍
          </button>
        </form>

                <Link
          to="/cart"
          className="flex items-center gap-2 text-white font-medium text-sm shrink-0"
        >
          <span className="text-xl">🛒</span>
          <span className="bg-purple-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
            {cartCount}
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Navbar