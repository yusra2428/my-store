import { useParams, Link } from 'react-router-dom'
import { useProducts } from '../context/ProductsContext'
import { useCart } from '../context/CartContext'

function ProductDetail() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const { products } = useProducts()
    const product = products.find((p) => p.id === id)
  if (!product) {
    return (
      <div className="max-w-3xl mx-auto p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Product not found</h2>
        <Link to="/" className="text-purple-600 hover:underline">
          Back to Store
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <Link to="/" className="text-purple-600 hover:underline mb-4 inline-block">
        ← Back to Store
      </Link>
      <div className="bg-white rounded-lg shadow-md overflow-hidden md:flex">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-80 object-cover"
        />
        <div className="p-6 md:w-1/2 flex flex-col justify-between">
          <div>
            <p className="text-sm text-gray-500">{product.category}</p>
            <h2 className="text-2xl font-bold text-gray-800 mt-1">{product.name}</h2>
            <p className="text-gray-600 mt-4">{product.description}</p>
          </div>
          <div className="mt-6">
            <span className="text-3xl font-bold text-purple-600">
              Rs {product.price.toFixed(0)}
            </span>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 w-full bg-purple-600 text-white py-3 rounded-md font-semibold hover:bg-purple-700 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail