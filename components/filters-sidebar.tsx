"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FiltersSidebarProps {
  onFiltersChange: (filters: any) => void
}

export function FiltersSidebar({ onFiltersChange }: FiltersSidebarProps) {
  const [priceRange, setPriceRange] = useState([0, 500000])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])

  const brands = ["Nike", "Adidas", "Jordan", "Puma", "Vans", "Converse"]
  const categories = ["Nuevo", "Usado", "Circular", "Réplica"]
  const sizes = ["38", "39", "40", "41", "42", "43", "44", "45"]

  const handleBrandChange = (brand: string, checked: boolean) => {
    setSelectedBrands((prev) => (checked ? [...prev, brand] : prev.filter((b) => b !== brand)))
  }

  const handleCategoryChange = (category: string, checked: boolean) => {
    setSelectedCategories((prev) => (checked ? [...prev, category] : prev.filter((c) => c !== category)))
  }

  const handleSizeChange = (size: string, checked: boolean) => {
    setSelectedSizes((prev) => (checked ? [...prev, size] : prev.filter((s) => s !== size)))
  }

  const clearFilters = () => {
    setPriceRange([0, 500000])
    setSelectedBrands([])
    setSelectedCategories([])
    setSelectedSizes([])
  }

  return (
    <div className="w-64 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Filtros</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Price Range */}
          <div>
            <Label className="text-sm font-medium mb-3 block">
              Precio: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
            </Label>
            <Slider value={priceRange} onValueChange={setPriceRange} max={500000} step={5000} className="w-full" />
          </div>

          {/* Categories */}
          <div>
            <Label className="text-sm font-medium mb-3 block">Categoría</Label>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={category}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                  />
                  <Label htmlFor={category} className="text-sm">
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Brands */}
          <div>
            <Label className="text-sm font-medium mb-3 block">Marca</Label>
            <div className="space-y-2">
              {brands.map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox
                    id={brand}
                    checked={selectedBrands.includes(brand)}
                    onCheckedChange={(checked) => handleBrandChange(brand, checked as boolean)}
                  />
                  <Label htmlFor={brand} className="text-sm">
                    {brand}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div>
            <Label className="text-sm font-medium mb-3 block">Talle</Label>
            <div className="grid grid-cols-4 gap-2">
              {sizes.map((size) => (
                <div key={size} className="flex items-center space-x-1">
                  <Checkbox
                    id={size}
                    checked={selectedSizes.includes(size)}
                    onCheckedChange={(checked) => handleSizeChange(size, checked as boolean)}
                  />
                  <Label htmlFor={size} className="text-xs">
                    {size}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <Button variant="outline" onClick={clearFilters} className="w-full">
            Limpiar Filtros
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
