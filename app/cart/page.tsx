"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Minus, Plus, Trash2 } from "lucide-react"
import { mockProducts } from "@/lib/mock-data"

interface CartItem {
  id: string
  title: string
  price: number
  image: string
  category: "new" | "used" | "circular" | "replica"
  brand: string
  size: string
  quantity: number
}

// Create mock cart items from our product data
const initialCartItems: CartItem[] = [
  { ...mockProducts.new[0], quantity: 1 },
  { ...mockProducts.used[0], quantity: 1 },
  { ...mockProducts.circular[0], quantity: 2 },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems)

  const categoryConfig = {
    new: { label: "Nuevo", color: "bg-green-500" },
    used: { label: "Usado", color: "bg-blue-500" },
    circular: { label: "Circular", color: "bg-purple-500" },
    replica: { label: "Réplica", color: "bg-orange-500" },
  }

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id)
      return
    }
    setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 5000 // Fixed shipping cost
  const total = subtotal + shipping

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Tu carrito está vacío</h1>
          <p className="text-gray-600 mb-8">Agregá algunos productos increíbles a tu carrito</p>
          <Link href="/">
            <Button size="lg">Seguir Comprando</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Carrito de Compras</h1>
        <p className="text-gray-600">
          {cartItems.length} {cartItems.length === 1 ? "producto" : "productos"} en tu carrito
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => {
            const categoryInfo = categoryConfig[item.category]

            return (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={120}
                        height={120}
                        className="rounded-lg object-cover"
                      />
                      <Badge className={`absolute top-2 left-2 text-white text-xs ${categoryInfo.color}`}>
                        {categoryInfo.label}
                      </Badge>
                    </div>

                    <div className="flex-1">
                      <Link href={`/product/${item.id}`} className="hover:text-blue-600">
                        <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      </Link>
                      <p className="text-gray-600 mb-2">
                        {item.brand} • Talle {item.size}
                      </p>
                      <p className="text-xl font-bold text-gray-900">${item.price.toLocaleString("es-AR")}</p>
                    </div>

                    <div className="flex flex-col items-end space-y-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Remove Button */}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Eliminar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-6">Resumen del Pedido</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toLocaleString("es-AR")}</span>
                </div>
                <div className="flex justify-between">
                  <span>Envío</span>
                  <span>${shipping.toLocaleString("es-AR")}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>${total.toLocaleString("es-AR")}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button size="lg" className="w-full">
                  Finalizar Compra
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  <Link href="/" className="w-full">
                    Seguir Comprando
                  </Link>
                </Button>
              </div>

              <div className="mt-6 text-sm text-gray-600">
                <p>• Envío gratis en compras superiores a $100.000</p>
                <p>• Garantía de autenticidad</p>
                <p>• Devolución gratuita en 30 días</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
