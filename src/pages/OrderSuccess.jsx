import { Link } from 'react-router-dom'

function OrderSuccess() {
  return (
    <div className="max-w-2xl mx-auto p-8 text-center mt-12">
      <div className="text-6xl mb-4">✅</div>
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Order Placed!</h2>
      <p className="text-gray-600 mb-6">
        Thank you for your purchase. This is a demo checkout — no real payment was processed.
      </p>
      <Link
        to="/"
        className="inline-block bg-purple-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-purple-700"
      >
        Continue Shopping
      </Link>
    </div>
  )
}

export default OrderSuccess