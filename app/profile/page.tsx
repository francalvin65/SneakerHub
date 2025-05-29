"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductCard } from "@/components/product-card"
import { Edit, Plus, Settings, LogOut } from "lucide-react"

// Mock user data
const mockUser = {
  id: "1",
  name: "Juan Pérez",
  email: "juan.perez@email.com",
  avatar: "/placeholder.svg?height=100&width=100",
  joinDate: "2023-01-15",
  rating: 4.8,
  totalSales: 23,
  totalPurchases: 45,
}

// Mock user products
const mockUserProducts = [
  {
    id: "1",
    title: "Nike Air Jordan 1 Retro High OG",
    price: 180000,
    image: "/placeholder.svg?height=300&width=300",
    category: "new" as const,
    brand: "Nike",
    size: "42",
  },
  {
    id: "2",
    title: "Adidas Yeezy Boost 350 V2",
    price: 120000,
    image: "/placeholder.svg?height=300&width=300",
    category: "used" as const,
    brand: "Adidas",
    size: "41",
  },
]

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("products")

  const handleLogout = () => {
    // Handle logout logic here
    console.log("Logging out...")
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Profile Header */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="relative">
              <Image
                src={mockUser.avatar || "/placeholder.svg"}
                alt={mockUser.name}
                width={100}
                height={100}
                className="rounded-full"
              />
              <Button size="icon" variant="outline" className="absolute bottom-0 right-0 h-8 w-8 rounded-full">
                <Edit className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{mockUser.name}</h1>
              <p className="text-gray-600 mb-4">{mockUser.email}</p>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <span>⭐ {mockUser.rating} rating</span>
                <span>📦 {mockUser.totalSales} ventas</span>
                <span>🛒 {mockUser.totalPurchases} compras</span>
                <span>📅 Miembro desde {new Date(mockUser.joinDate).toLocaleDateString("es-AR")}</span>
              </div>
            </div>

            <div className="flex space-x-2">
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Configuración
              </Button>
              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Cerrar Sesión
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Profile Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="products">Mis Productos</TabsTrigger>
          <TabsTrigger value="purchases">Mis Compras</TabsTrigger>
          <TabsTrigger value="favorites">Favoritos</TabsTrigger>
          <TabsTrigger value="reviews">Reseñas</TabsTrigger>
        </TabsList>

        <TabsContent value="products" className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Mis Productos ({mockUserProducts.length})</h2>
            <Link href="/publish">
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Publicar Producto
              </Button>
            </Link>
          </div>

          {mockUserProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {mockUserProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-12 text-center">
                <h3 className="text-lg font-semibold mb-2">No tenés productos publicados</h3>
                <p className="text-gray-600 mb-6">Empezá a vender tus sneakers y productos de moda urbana</p>
                <Link href="/publish">
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Publicar tu Primer Producto
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="purchases" className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Mis Compras</h2>
          <Card>
            <CardContent className="p-12 text-center">
              <h3 className="text-lg font-semibold mb-2">No tenés compras registradas</h3>
              <p className="text-gray-600 mb-6">Explorá nuestro catálogo y encontrá tus sneakers favoritos</p>
              <Link href="/">
                <Button>Explorar Productos</Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="favorites" className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Productos Favoritos</h2>
          <Card>
            <CardContent className="p-12 text-center">
              <h3 className="text-lg font-semibold mb-2">No tenés productos favoritos</h3>
              <p className="text-gray-600 mb-6">Guardá productos que te interesen para encontrarlos fácilmente</p>
              <Link href="/">
                <Button>Explorar Productos</Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews" className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Reseñas Recibidas</h2>
          <Card>
            <CardContent className="p-12 text-center">
              <h3 className="text-lg font-semibold mb-2">No tenés reseñas aún</h3>
              <p className="text-gray-600 mb-6">Las reseñas de tus compradores aparecerán aquí</p>
              <Link href="/publish">
                <Button>Publicar Producto</Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
