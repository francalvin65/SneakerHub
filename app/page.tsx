"use client"

import { useState } from "react"
import { CategoryCarousel } from "@/components/category-carousel"
import { ProductCard } from "@/components/product-card"
import { FiltersSidebar } from "@/components/filters-sidebar"
import { Button } from "@/components/ui/button"
import { Filter } from "lucide-react"
import { mockProducts, getAllProducts } from "@/lib/mock-data"

export default function HomePage() {
  const [showFilters, setShowFilters] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState(getAllProducts())

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-black to-gray-800 text-white rounded-2xl p-8 mb-12">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">El futuro de los sneakers está aquí</h1>
          <p className="text-xl mb-6 text-gray-300">
            Descubrí las mejores ofertas en sneakers originales, usados verificados y moda circular.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100">
            Explorar Productos
          </Button>
        </div>
      </div>

      {/* Category Carousels */}
      <CategoryCarousel title="🔥 Nuevos Originales" products={mockProducts.new} />
      <CategoryCarousel title="✅ Usados Verificados" products={mockProducts.used} />
      <CategoryCarousel title="♻️ Moda Circular" products={mockProducts.circular} />
      <CategoryCarousel title="💎 Réplicas Premium" products={mockProducts.replica} />

      {/* All Products Section */}
      <div className="mt-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Todos los Productos</h2>
          <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="md:hidden">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar - Desktop */}
          <div className="hidden md:block">
            <FiltersSidebar onFiltersChange={setFilteredProducts} />
          </div>

          {/* Filters Sidebar - Mobile */}
          {showFilters && (
            <div className="md:hidden fixed inset-0 bg-white z-50 p-4 overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Filtros</h3>
                <Button variant="ghost" onClick={() => setShowFilters(false)}>
                  ✕
                </Button>
              </div>
              <FiltersSidebar onFiltersChange={setFilteredProducts} />
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
