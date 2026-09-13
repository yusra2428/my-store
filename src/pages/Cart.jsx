import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart()

  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
        <Link
          to="/"
          className="inline-block bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700"
        >
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h2>
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-md"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">{item.name}</h3>
              <p className="text-purple-600 font-bold">Rs {item.price.toFixed(0)}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="bg-gray-200 w-8 h-8 rounded-md font-bold hover:bg-gray-300"
              >
                -
              </button>
              <span className="w-8 text-center">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="bg-gray-200 w-8 h-8 rounded-md font-bold hover:bg-gray-300"
              >
                +
              </button>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:text-red-700 font-medium ml-2"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-md p-6 flex items-center justify-between">
        <span className="text-xl font-bold text-gray-800">
          Total: Rs {cartTotal.toFixed(0)}
        </span>
        <Link
          to="/checkout"
          className="bg-green-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-700"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  )
}

export default Cart