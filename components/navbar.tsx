"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingCart, User, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // Mock auth state
  const cartItemsCount = 3 // Mock cart count

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-black text-white px-3 py-1 rounded-lg font-bold text-xl">SH</div>
            <span className="font-bold text-xl text-gray-900 hidden sm:block">SNEAKERHUB</span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input type="text" placeholder="Buscar sneakers, marcas, modelos..." className="pl-10 pr-4 w-full" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/publish" className="text-gray-700 hover:text-gray-900">
              Vender
            </Link>

            <Link href="/cart" className="relative">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                {cartItemsCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {cartItemsCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {isLoggedIn ? (
              <Link href="/profile">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            ) : (
              <div className="flex space-x-2">
                <Link href="/login">
                  <Button variant="ghost">Ingresar</Button>
                </Link>
                <Link href="/register">
                  <Button>Registrarse</Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Link href="/cart" className="relative">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                {cartItemsCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {cartItemsCount}
                  </Badge>
                )}
              </Button>
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input type="text" placeholder="Buscar sneakers..." className="pl-10 pr-4 w-full" />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/publish" className="text-gray-700 hover:text-gray-900">
                Vender
              </Link>
              {isLoggedIn ? (
                <Link href="/profile" className="text-gray-700 hover:text-gray-900">
                  Mi Perfil
                </Link>
              ) : (
                <div className="flex flex-col space-y-2">
                  <Link href="/login">
                    <Button variant="ghost" className="w-full justify-start">
                      Ingresar
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button className="w-full">Registrarse</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
