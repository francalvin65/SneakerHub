import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white text-black px-3 py-1 rounded-lg font-bold text-xl">SH</div>
              <span className="font-bold text-xl">SNEAKERHUB</span>
            </div>
            <p className="text-gray-400">El marketplace líder de sneakers y moda urbana en Argentina.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Comprar</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white">
                  Nuevos Originales
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Usados Verificados
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Moda Circular
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Réplicas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Vender</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/publish" className="hover:text-white">
                  Publicar Producto
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Guía de Vendedor
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Verificación
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Soporte</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white">
                  Centro de Ayuda
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 SNEAKERHUB. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
