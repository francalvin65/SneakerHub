"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ProductCard } from "@/components/product-card"
import { ChevronLeft, ChevronRight, Heart, Share2 } from "lucide-react"
import { getProductById, getSimilarProducts } from "@/lib/mock-data"

export default function ProductDetailPage() {
  const params = useParams()
  const productId = params.id as string
  const mockProduct = getProductById(productId) || {
    id: "1",
    title: 'Nike Air Jordan 1 Retro High OG "Chicago"',
    price: 180000,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    category: "new" as const,
    brand: "Nike",
    size: "42",
    description:
      "Las icónicas Air Jordan 1 en su colorway más clásico. Estas zapatillas representan la historia del basketball y el streetwear. Condición: Nuevas en caja original.",
    seller: {
      name: "SneakerStore_BA",
      rating: 4.8,
      sales: 156,
    },
    condition: "Nuevo",
    authenticity: "Verificado",
  }

  const similarProducts = getSimilarProducts(productId, 4)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === mockProduct.images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? mockProduct.images.length - 1 : prev - 1))
  }

  const categoryConfig = {
    new: { label: "Nuevo", color: "bg-green-500" },
    used: { label: "Usado", color: "bg-blue-500" },
    circular: { label: "Circular", color: "bg-purple-500" },
    replica: { label: "Réplica", color: "bg-orange-500" },
  }

  const categoryInfo = categoryConfig[mockProduct.category]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div>
          <div className="relative mb-4">
            <Image
              src={mockProduct.images[currentImageIndex] || "/placeholder.svg"}
              alt={mockProduct.title}
              width={600}
              height={600}
              className="w-full h-96 lg:h-[500px] object-cover rounded-lg"
            />
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80"
              onClick={prevImage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-4 gap-2">
            {mockProduct.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative rounded-lg overflow-hidden ${
                  currentImageIndex === index ? "ring-2 ring-black" : ""
                }`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${mockProduct.title} ${index + 1}`}
                  width={150}
                  height={150}
                  className="w-full h-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="flex items-start justify-between mb-4">
            <div>
              <Badge className={`text-white ${categoryInfo.color} mb-2`}>{categoryInfo.label}</Badge>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{mockProduct.title}</h1>
              <p className="text-lg text-gray-600">
                {mockProduct.brand} • Talle {mockProduct.size}
              </p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" onClick={() => setIsFavorite(!isFavorite)}>
                <Heart className={`h-4 w-4 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-4xl font-bold text-gray-900 mb-2">${mockProduct.price.toLocaleString("es-AR")}</p>
            <div className="flex space-x-4 text-sm text-gray-600">
              <span>Estado: {mockProduct.condition}</span>
              <span>Autenticidad: {mockProduct.authenticity}</span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Descripción</h3>
            <p className="text-gray-700">{mockProduct.description}</p>
          </div>

          {/* Seller Info */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Vendedor</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{mockProduct.seller.name}</p>
                  <p className="text-sm text-gray-600">
                    ⭐ {mockProduct.seller.rating} • {mockProduct.seller.sales} ventas
                  </p>
                </div>
                <Button variant="outline">Ver Perfil</Button>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button size="lg" className="w-full">
              Agregar al Carrito
            </Button>
            <Button variant="outline" size="lg" className="w-full">
              Comprar Ahora
            </Button>
          </div>
        </div>
      </div>

      {/* Similar Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Productos Similares</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {similarProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
