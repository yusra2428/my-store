import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Checkout() {
  const { cart, cartTotal, clearCart } = useCart()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    phone: '',
  })
  const [isProcessing, setIsProcessing] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setIsProcessing(true)

    setTimeout(() => {
      setIsProcessing(false)
      clearCart()
      navigate('/order-success')
    }, 1500)
  }

  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Your cart is empty
        </h2>
        <p className="text-gray-500">Add some products before checking out.</p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Checkout</h2>
      <div className="md:flex gap-8">
        <form onSubmit={handleSubmit} className="md:w-2/3 bg-white rounded-lg shadow-md p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Shipping Details</h3>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            name="address"
            placeholder="Street Address"
            value={form.address}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <div className="flex gap-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
              required
              className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <h3 className="text-lg font-semibold text-gray-800 pt-4">Payment</h3>
          <div className="border border-gray-300 rounded-md p-4 bg-gray-50 text-sm text-gray-600">
            💳 Test mode — use card number <strong>4242 4242 4242 4242</strong>, any future expiry date, any CVC.
          </div>

          <button
            type="submit"
            disabled={isProcessing}
            className="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition-colors disabled:opacity-60"
          >
            {isProcessing ? 'Processing Payment...' : `Pay Rs ${cartTotal.toFixed(0)}`}
          </button>
        </form>

        <div className="md:w-1/3 bg-white rounded-lg shadow-md p-6 h-fit mt-6 md:mt-0">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>
          <div className="space-y-3">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span className="text-gray-600">
                  {item.name} × {item.quantity}
                </span>
                <span className="font-medium text-gray-800">
                  Rs {(item.price * item.quantity).toFixed(0)}
                </span>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-200 mt-4 pt-4 flex justify-between font-bold text-gray-800">
            <span>Total</span>
            <span>Rs {cartTotal.toFixed(0)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout