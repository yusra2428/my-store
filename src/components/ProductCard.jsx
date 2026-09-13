import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 sm:h-48 object-cover cursor-pointer"
        />
      </Link>
      <div className="p-3 sm:p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-sm sm:text-base font-semibold text-gray-800 hover:text-purple-600 cursor-pointer truncate">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-gray-400 mt-0.5">{product.category}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-base sm:text-lg font-bold text-purple-600">
            Rs {product.price.toFixed(0)}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="bg-purple-600 text-white px-2.5 py-1.5 rounded-md text-xs sm:text-sm hover:bg-purple-700 transition-colors"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard