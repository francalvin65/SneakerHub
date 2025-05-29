import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface Product {
  id: string
  title: string
  price: number
  image: string
  category: "new" | "used" | "circular" | "replica"
  brand: string
  size: string
}

interface ProductCardProps {
  product: Product
}

const categoryConfig = {
  new: { label: "Nuevo", color: "bg-green-500" },
  used: { label: "Usado", color: "bg-blue-500" },
  circular: { label: "Circular", color: "bg-purple-500" },
  replica: { label: "Réplica", color: "bg-orange-500" },
}

export function ProductCard({ product }: ProductCardProps) {
  const categoryInfo = categoryConfig[product.category]

  return (
    <Link href={`/product/${product.id}`}>
      <Card className="group hover:shadow-lg transition-shadow duration-200 cursor-pointer">
        <CardContent className="p-0">
          <div className="relative">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              width={300}
              height={300}
              className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-200"
            />
            <Badge className={`absolute top-2 left-2 text-white ${categoryInfo.color}`}>{categoryInfo.label}</Badge>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">{product.title}</h3>
            <p className="text-sm text-gray-600 mb-2">
              {product.brand} • Talle {product.size}
            </p>
            <p className="text-lg font-bold text-gray-900">${product.price.toLocaleString("es-AR")}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
