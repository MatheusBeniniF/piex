import React from "react"
import { Link, useLocation } from "react-router-dom"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "./ui/navigation-menu"
import LogoNova from "../img/LogoNova.jpeg"

const Navbar = () => {
  const location = useLocation()
  
  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Sobre e Serviços', href: '/sobre-e-servicos' },
    { name: 'Esportes e Parceiros', href: '/esportes-e-parceiros' },
    { name: 'Eventos', href: '/eventos' },
    { name: 'Galeria dos Apoiadores', href: '/galeria-dos-apoiadores' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center space-x-2">
            <img src={LogoNova} alt="Logo" className="h-10 w-10" />
            <span className="font-bold">Projeto Life</span>
          </Link>
        </div>
        <NavigationMenu className="ml-auto">
          <NavigationMenuList>
            {navigation.map((item) => (
              <NavigationMenuItem key={item.name}>
                <Link
                  to={item.href}
                  className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                    location.pathname === item.href
                      ? "bg-accent text-accent-foreground"
                      : "text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}

export { Navbar }