"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, X } from "lucide-react"

export default function PublishProductPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    brand: "",
    category: "",
    size: "",
    condition: "",
  })
  const [images, setImages] = useState<string[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle product publication logic here
    console.log("Product publication:", { ...formData, images })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      // In a real app, you would upload to storage and get URLs
      const newImages = Array.from(files).map((file) => URL.createObjectURL(file))
      setImages((prev) => [...prev, ...newImages].slice(0, 6)) // Max 6 images
    }
  }

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Publicar Producto</h1>
        <p className="text-gray-600">Completá la información de tu producto para publicarlo en SNEAKERHUB</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Information */}
          <Card>
            <CardHeader>
              <CardTitle>Información del Producto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="title">Título del Producto *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  placeholder="Ej: Nike Air Jordan 1 Retro High OG"
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="description">Descripción *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  placeholder="Describí el estado, características y detalles importantes del producto..."
                  rows={4}
                  required
                  className="mt-1"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="brand">Marca *</Label>
                  <Select onValueChange={(value) => handleInputChange("brand", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Seleccionar marca" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nike">Nike</SelectItem>
                      <SelectItem value="adidas">Adidas</SelectItem>
                      <SelectItem value="jordan">Jordan</SelectItem>
                      <SelectItem value="puma">Puma</SelectItem>
                      <SelectItem value="vans">Vans</SelectItem>
                      <SelectItem value="converse">Converse</SelectItem>
                      <SelectItem value="other">Otra</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="size">Talle *</Label>
                  <Select onValueChange={(value) => handleInputChange("size", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Seleccionar talle" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 15 }, (_, i) => i + 35).map((size) => (
                        <SelectItem key={size} value={size.toString()}>
                          {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="category">Categoría *</Label>
                  <Select onValueChange={(value) => handleInputChange("category", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Seleccionar categoría" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">Nuevo</SelectItem>
                      <SelectItem value="used">Usado</SelectItem>
                      <SelectItem value="circular">Circular</SelectItem>
                      <SelectItem value="replica">Réplica</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="condition">Estado *</Label>
                  <Select onValueChange={(value) => handleInputChange("condition", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Seleccionar estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">Nuevo con caja</SelectItem>
                      <SelectItem value="new-no-box">Nuevo sin caja</SelectItem>
                      <SelectItem value="excellent">Excelente</SelectItem>
                      <SelectItem value="very-good">Muy bueno</SelectItem>
                      <SelectItem value="good">Bueno</SelectItem>
                      <SelectItem value="fair">Regular</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="price">Precio (ARS) *</Label>
                <Input
                  id="price"
                  type="number"
                  value={formData.price}
                  onChange={(e) => handleInputChange("price", e.target.value)}
                  placeholder="50000"
                  required
                  className="mt-1"
                />
              </div>
            </CardContent>
          </Card>

          {/* Images Upload */}
          <Card>
            <CardHeader>
              <CardTitle>Imágenes del Producto</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <div className="text-sm text-gray-600 mb-4">
                    <label htmlFor="images" className="cursor-pointer">
                      <span className="text-blue-600 hover:text-blue-500">Hacé clic para subir imágenes</span>
                      <span> o arrastralas acá</span>
                    </label>
                    <input
                      id="images"
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG hasta 10MB. Máximo 6 imágenes.</p>
                </div>

                {/* Image Preview */}
                {images.length > 0 && (
                  <div className="grid grid-cols-2 gap-4">
                    {images.map((image, index) => (
                      <div key={index} className="relative">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <Button
                          type="button"
                          variant="destructive"
                          size="icon"
                          className="absolute top-2 right-2 h-6 w-6"
                          onClick={() => removeImage(index)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end space-x-4">
          <Button type="button" variant="outline">
            Guardar Borrador
          </Button>
          <Button type="submit" size="lg">
            Publicar Producto
          </Button>
        </div>
      </form>
    </div>
  )
}
