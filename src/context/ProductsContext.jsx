import { createContext, useContext, useState, useEffect } from 'react'
import { db } from '../firebase'
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore'
import defaultProducts from '../data/products.js'

const ProductsContext = createContext()

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadProducts()
  }, [])

  async function loadProducts() {
    setLoading(true)
    const snapshot = await getDocs(collection(db, 'products'))
    const list = snapshot.docs.map((docSnap) => ({
      id: docSnap.id,
      ...docSnap.data(),
    }))
    setProducts(list)
    setLoading(false)
  }

  async function seedDefaultProducts() {
    for (const product of defaultProducts) {
      const { id, ...rest } = product
      await addDoc(collection(db, 'products'), rest)
    }
    await loadProducts()
  }

  async function addProduct(product) {
    const docRef = await addDoc(collection(db, 'products'), product)
    setProducts((prev) => [...prev, { id: docRef.id, ...product }])
  }

  async function updateProduct(id, updatedFields) {
    await updateDoc(doc(db, 'products', id), updatedFields)
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updatedFields } : p))
    )
  }

  async function deleteProduct(id) {
    await deleteDoc(doc(db, 'products', id))
    setProducts((prev) => prev.filter((p) => p.id !== id))
  }

  return (
    <ProductsContext.Provider
      value={{
        products,
        loading,
        addProduct,
        updateProduct,
        deleteProduct,
        seedDefaultProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export function useProducts() {
  return useContext(ProductsContext)
}