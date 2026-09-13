import { useState } from 'react'
import { useProducts } from '../context/ProductsContext'

function Admin() {
   const { products, addProduct, updateProduct, deleteProduct, seedDefaultProducts } = useProducts()
  const [form, setForm] = useState({
    name: '',
    price: '',
    category: '',
    image: '',
    description: '',
  })
  const [editingId, setEditingId] = useState(null)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function resetForm() {
    setForm({ name: '', price: '', category: '', image: '', description: '' })
    setEditingId(null)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const productData = {
      ...form,
      price: parseFloat(form.price),
    }

    if (editingId) {
      updateProduct(editingId, productData)
    } else {
      addProduct(productData)
    }
    resetForm()
  }

  function startEdit(product) {
    setEditingId(product.id)
    setForm({
      name: product.name,
      price: product.price,
      category: product.category,
      image: typeof product.image === 'string' ? product.image : '',
      description: product.description,
    })
  }

  return (
    <div className="max-w-5xl mx-auto p-8">
            <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Admin Panel</h2>
        {products.length === 0 && (
          <button
            onClick={seedDefaultProducts}
            className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-purple-700"
          >
            Load Default Products
          </button>
        )}
      </div>

      {/* Add/Edit form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-md p-6 mb-8 space-y-4"
      >
        <h3 className="text-lg font-semibold text-gray-800">
          {editingId ? 'Edit Product' : 'Add New Product'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={form.name}
            onChange={handleChange}
            required
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="number"
            name="price"
            placeholder="Price (Rs)"
            value={form.price}
            onChange={handleChange}
            required
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
            required
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL (e.g. from Unsplash)"
            value={form.image}
            onChange={handleChange}
            required
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <div className="flex gap-3">
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-purple-700"
          >
            {editingId ? 'Save Changes' : 'Add Product'}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="bg-gray-200 text-gray-700 px-6 py-2 rounded-md font-semibold hover:bg-gray-300"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Product list */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-sm font-semibold text-gray-600">Name</th>
              <th className="p-3 text-sm font-semibold text-gray-600">Category</th>
              <th className="p-3 text-sm font-semibold text-gray-600">Price</th>
              <th className="p-3 text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t border-gray-200">
                <td className="p-3 text-gray-800">{product.name}</td>
                <td className="p-3 text-gray-600">{product.category}</td>
                <td className="p-3 text-gray-800 font-medium">
                  Rs {product.price.toFixed(0)}
                </td>
                <td className="p-3 space-x-3">
                  <button
                    onClick={() => startEdit(product)}
                    className="text-purple-600 hover:underline text-sm font-medium"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="text-red-500 hover:underline text-sm font-medium"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Admin