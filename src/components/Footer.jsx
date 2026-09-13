function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
            <div className="max-w-[1600px] mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white text-lg font-bold mb-3">Vertex Store</h3>
          <p className="text-sm text-gray-400">
            Quality products, fast delivery, and a shopping experience built
            for you.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/cart" className="hover:text-white">Cart</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <p className="text-sm text-gray-400">support@vertexstore.com</p>
          <p className="text-sm text-gray-400">+92 300 1234567</p>
        </div>
      </div>
      <div className="border-t border-gray-800 text-center text-sm text-gray-500 py-4">
        © {new Date().getFullYear()} Vertex Store. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer