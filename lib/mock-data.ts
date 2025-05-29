// Mock Products Data
export const mockProducts = {
  // New Original Products
  new: [
    {
      id: "n1",
      title: 'Nike Air Jordan 1 Retro High OG "Chicago"',
      price: 180000,
      image: "/placeholder.svg?height=300&width=300",
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
      condition: "Nuevo",
      authenticity: "Verificado",
      seller: {
        name: "SneakerStore_BA",
        rating: 4.8,
        sales: 156,
      },
    },
    {
      id: "n2",
      title: 'Nike Dunk Low "Panda"',
      price: 95000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      category: "new" as const,
      brand: "Nike",
      size: "41",
      description:
        "Las Nike Dunk Low Panda son un clásico moderno con su combinación de colores blanco y negro. Perfectas para cualquier outfit. Nuevas en caja original con etiquetas.",
      condition: "Nuevo",
      authenticity: "Verificado",
      seller: {
        name: "KicksBsAs",
        rating: 4.9,
        sales: 243,
      },
    },
    {
      id: "n3",
      title: "Adidas Forum Low Blue",
      price: 85000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      category: "new" as const,
      brand: "Adidas",
      size: "43",
      description:
        "Las Adidas Forum Low en su colorway azul y blanco. Un clásico retro que volvió con todo. Incluye las correas intercambiables. Nuevas en caja original.",
      condition: "Nuevo",
      authenticity: "Verificado",
      seller: {
        name: "OfficialKicks",
        rating: 4.7,
        sales: 89,
      },
    },
    {
      id: "n4",
      title: "Puma Suede Classic XXI",
      price: 65000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      category: "new" as const,
      brand: "Puma",
      size: "40",
      description:
        "Las Puma Suede Classic XXI en color burgundy. Un modelo atemporal con la mejor calidad de ante. Nuevas en caja original con todas las etiquetas.",
      condition: "Nuevo",
      authenticity: "Verificado",
      seller: {
        name: "PumaArgentina",
        rating: 4.9,
        sales: 312,
      },
    },
    {
      id: "n5",
      title: 'Converse Chuck 70 Hi "Black"',
      price: 55000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      category: "new" as const,
      brand: "Converse",
      size: "42",
      description:
        "Las Chuck 70 son la versión premium de las clásicas Chuck Taylor. Mayor calidad de materiales y comodidad. Color negro clásico. Nuevas en caja.",
      condition: "Nuevo",
      authenticity: "Verificado",
      seller: {
        name: "UrbanKicks",
        rating: 4.6,
        sales: 78,
      },
    },
    {
      id: "n6",
      title: 'New Balance 550 "White Green"',
      price: 110000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      category: "new" as const,
      brand: "New Balance",
      size: "44",
      description:
        "Las New Balance 550 en su colorway blanco y verde. Un modelo retro de basketball que se convirtió en un must del streetwear. Nuevas en caja original.",
      condition: "Nuevo",
      authenticity: "Verificado",
      seller: {
        name: "NBArgentina",
        rating: 4.8,
        sales: 156,
      },
    },
  ],

  // Used Verified Products
  used: [
    {
      id: "u1",
      title: "Adidas Yeezy Boost 350 V2",
      price: 120000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      category: "used" as const,
      brand: "Adidas",
      size: "41",
      description:
        "Yeezy Boost 350 V2 en colorway 'Zebra'. Usadas solo 3 veces, en excelente estado. Incluye caja original y todas las etiquetas. Autenticidad verificada por nuestro equipo.",
      condition: "Usado - Excelente",
      authenticity: "Verificado",
      seller: {
        name: "YeezyCollector",
        rating: 4.7,
        sales: 42,
      },
    },
    {
      id: "u2",
      title: "Nike Air Force 1 '07",
      price: 45000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      category: "used" as const,
      brand: "Nike",
      size: "43",
      description:
        "Air Force 1 blancas clásicas. Usadas pero en muy buen estado. Limpias y desinfectadas. Incluye caja original. Perfectas para uso diario.",
      condition: "Usado - Muy Bueno",
      authenticity: "Verificado",
      seller: {
        name: "SneakerCleanBA",
        rating: 4.5,
        sales: 87,
      },
    },
    {
      id: "u3",
      title: "Jordan 4 Retro University Blue",
      price: 190000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      category: "used" as const,
      brand: "Jordan",
      size: "42",
      description:
        "Jordan 4 Retro University Blue en excelente estado. Usadas solo 2 veces. Incluye caja original y todas las etiquetas. Autenticidad verificada por nuestro equipo.",
      condition: "Usado - Excelente",
      authenticity: "Verificado",
      seller: {
        name: "JordanHeadBA",
        rating: 4.9,
        sales: 31,
      },
    },
    {
      id: "u4",
      title: "Vans Old Skool",
      price: 35000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      category: "used" as const,
      brand: "Vans",
      size: "40",
      description:
        "Vans Old Skool clásicas en negro. Usadas pero en buen estado. Perfectas para el día a día. Incluye caja original.",
      condition: "Usado - Bueno",
      authenticity: "Verificado",
      seller: {
        name: "SkateShopBA",
        rating: 4.6,
        sales: 124,
      },
    },
    {
      id: "u5",
      title: "Adidas Samba OG",
      price: 70000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      category: "used" as const,
      brand: "Adidas",
      size: "42",
      description:
        "Adidas Samba OG en blanco y negro. Usadas pocas veces, en excelente estado. El modelo más buscado del momento. Incluye caja original.",
      condition: "Usado - Excelente",
      authenticity: "Verificado",
      seller: {
        name: "VintageKicksBA",
        rating: 4.8,
        sales: 67,
      },
    },
    {
      id: "u6",
      title: "Nike SB Dunk Low Travis Scott",
      price: 350000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      category: "used" as const,
      brand: "Nike",
      size: "43",
      description:
        "Nike SB Dunk Low Travis Scott, una de las colaboraciones más buscadas. Usadas solo una vez para sesión de fotos. Incluye caja original, cordones extra y certificado de autenticidad.",
      condition: "Usado - Como Nuevo",
      authenticity: "Verificado",
      seller: {
        name: "HypeBeastBA",
        rating: 5.0,
        sales: 18,
      },
    },
  ],

  // Circular Fashion Products
  circular: [
    {
      id: "c1",
      title: "Nike Dunk Low Panda",
      price: 95000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      category: "circular" as const,
      brand: "Nike",
      size: "43",
      description:
        "Nike Dunk Low Panda restauradas por nuestro equipo. Suela reacondicionada, limpieza profunda y desinfección. Parte de nuestro programa de moda circular para reducir el impacto ambiental.",
      condition: "Restaurado",
      authenticity: "Verificado",
      seller: {
        name: "CircularSneakers",
        rating: 4.7,
        sales: 89,
      },
    },
    {
      id: "c2",
      title: "Adidas Stan Smith Vintage",
      price: 60000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      category: "circular" as const,
      brand: "Adidas",
      size: "41",
      description:
        "Adidas Stan Smith vintage restauradas. Modelo clásico reacondicionado con materiales reciclados. Parte de nuestra colección de moda circular y consumo responsable.",
      condition: "Restaurado",
      authenticity: "Verificado",
      seller: {
        name: "EcoSneakers",
        rating: 4.8,
        sales: 112,
      },
    },
    {
      id: "c3",
      title: "Converse Chuck Taylor Upcycled",
      price: 40000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      category: "circular" as const,
      brand: "Converse",
      size: "39",
      description:
        "Converse Chuck Taylor intervenidas artísticamente con materiales reciclados. Pieza única, parte de nuestra colección de upcycling. Suela reacondicionada y estructura reforzada.",
      condition: "Restaurado - Edición Especial",
      authenticity: "Verificado",
      seller: {
        name: "UpcycleStudio",
        rating: 4.9,
        sales: 45,
      },
    },
    {
      id: "c4",
      title: "Vans Era Patchwork",
      price: 38000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      category: "circular" as const,
      brand: "Vans",
      size: "42",
      description:
        "Vans Era intervenidas con técnica de patchwork usando retazos de tela reciclada. Cada par es único e irrepetible. Suela reacondicionada y estructura reforzada.",
      condition: "Restaurado - Edición Especial",
      authenticity: "Verificado",
      seller: {
        name: "CircularFactory",
        rating: 4.6,
        sales: 67,
      },
    },
    {
      id: "c5",
      title: "New Balance 574 Restored",
      price: 75000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      category: "circular" as const,
      brand: "New Balance",
      size: "44",
      description:
        "New Balance 574 restauradas por nuestro equipo especializado. Suela reacondicionada, limpieza profunda y desinfección. Parte de nuestro programa de moda circular.",
      condition: "Restaurado",
      authenticity: "Verificado",
      seller: {
        name: "SustainableKicks",
        rating: 4.7,
        sales: 53,
      },
    },
    {
      id: "c6",
      title: "Nike Air Max 90 Reworked",
      price: 85000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      category: "circular" as const,
      brand: "Nike",
      size: "43",
      description:
        "Nike Air Max 90 reacondicionadas y personalizadas con técnicas de tintado natural. Suela restaurada y cámara de aire verificada. Pieza única de nuestra colección circular.",
      condition: "Restaurado - Edición Especial",
      authenticity: "Verificado",
      seller: {
        name: "ReworkedSneakers",
        rating: 4.8,
        sales: 37,
      },
    },
  ],

  // Premium Replica Products
  replica: [
    {
      id: "r1",
      title: "Jordan 4 Travis Scott",
      price: 45000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      category: "replica" as const,
      brand: "Jordan",
      size: "42",
      description:
        "Réplica premium de las Jordan 4 Travis Scott. Calidad AAA+ con materiales de primera y atención a los detalles. Incluye caja y accesorios.",
      condition: "Nuevo",
      authenticity: "Réplica Premium",
      seller: {
        name: "ReplicaHub",
        rating: 4.8,
        sales: 215,
      },
    },
    {
      id: "r2",
      title: "Nike Air Jordan 1 Off-White Chicago",
      price: 40000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      category: "replica" as const,
      brand: "Nike",
      size: "43",
      description:
        "Réplica premium de las Air Jordan 1 x Off-White Chicago. Versión 1:1 con todos los detalles, incluyendo las etiquetas y accesorios característicos de la colaboración.",
      condition: "Nuevo",
      authenticity: "Réplica Premium",
      seller: {
        name: "PremiumReps",
        rating: 4.9,
        sales: 178,
      },
    },
    {
      id: "r3",
      title: "Adidas Yeezy Slide Pure",
      price: 15000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      category: "replica" as const,
      brand: "Adidas",
      size: "41",
      description:
        "Réplica premium de las Yeezy Slide en colorway Pure. Material similar al original, con la misma comodidad y durabilidad. Incluye caja.",
      condition: "Nuevo",
      authenticity: "Réplica Premium",
      seller: {
        name: "YeezyReplicas",
        rating: 4.7,
        sales: 312,
      },
    },
    {
      id: "r4",
      title: "Nike SB Dunk Low Strangelove",
      price: 35000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      category: "replica" as const,
      brand: "Nike",
      size: "42",
      description:
        "Réplica premium de las Nike SB Dunk Low Strangelove. Versión de alta calidad con terciopelo rosa y detalles bordados. Incluye caja especial y accesorios.",
      condition: "Nuevo",
      authenticity: "Réplica Premium",
      seller: {
        name: "DunkHeaven",
        rating: 4.8,
        sales: 94,
      },
    },
    {
      id: "r5",
      title: "Balenciaga Triple S",
      price: 55000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      category: "replica" as const,
      brand: "Balenciaga",
      size: "44",
      description:
        "Réplica premium de las Balenciaga Triple S. Versión de alta calidad con materiales duraderos y construcción sólida. Incluye caja y bolsa antipolvo.",
      condition: "Nuevo",
      authenticity: "Réplica Premium",
      seller: {
        name: "LuxuryReps",
        rating: 4.9,
        sales: 67,
      },
    },
    {
      id: "r6",
      title: "Nike Air Force 1 Louis Vuitton",
      price: 60000,
      image: "/placeholder.svg?height=300&width=300",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      category: "replica" as const,
      brand: "Nike x Louis Vuitton",
      size: "43",
      description:
        "Réplica premium de la colaboración Nike Air Force 1 x Louis Vuitton. Versión de alta calidad con materiales premium y atención a los detalles. Incluye caja especial y accesorios.",
      condition: "Nuevo",
      authenticity: "Réplica Premium",
      seller: {
        name: "HighEndReps",
        rating: 4.9,
        sales: 42,
      },
    },
  ],
}

// Helper function to get all products in a flat array
export const getAllProducts = () => {
  return [...mockProducts.new, ...mockProducts.used, ...mockProducts.circular, ...mockProducts.replica]
}

// Helper function to get product by ID
export const getProductById = (id: string) => {
  return getAllProducts().find((product) => product.id === id)
}

// Helper function to get similar products
export const getSimilarProducts = (id: string, limit = 4) => {
  const product = getProductById(id)
  if (!product) return []

  return getAllProducts()
    .filter((p) => p.id !== id && (p.brand === product.brand || p.category === product.category))
    .slice(0, limit)
}
