import { useState } from 'react'
import { Link } from 'react-router'

export const navLinks = [
   {
      id: 1,
      name: 'Inicio',
      path: '#',
   },
   {
      id: 2,
      name: 'Nosotros',
      path: '#',
   },
   {
      id: 3,
      name: 'Contacto',
      path: '#',
   },
   {
      id: 4,
      name: 'Todos',
      path: '#',
   },
]

export default function Header() {
   const [menuOpen, setMenuOpen] = useState(false)

   return (
      <header className="bg-gray-100 border-b border-gray-300">
         {/* Top bar */}
         <div className="flex items-center justify-between gap-10 px-4 py-3 md:px-8">
            {/* Logo + Icono */}
            <div className="text-xl font-bold text-black">
               <span className="mr-1">LIBRERÍA</span>
               <span className="bg-black text-white px-2 py-1 rounded">
                  CodigoJava
               </span>
            </div>

            {/* Search bar */}
            <div className="max-w-xl mx-4 hidden w-full sm:flex ">
               <input
                  type="text"
                  placeholder="Busca tu libro favorito..."
                  className="w-full p-2 rounded-l border border-gray-300"
               />
               <button className="bg-black text-white px-4 rounded-r">
                  <i className="fa-solid fa-search"></i>
               </button>
            </div>

            {/* Navbar Desktop */}
            <nav className="hidden lg:inline-block">
               <ul className="flex gap-10 font-medium">
                  {navLinks.map((link) => (
                     <li key={link.id}>
                        <Link to={link.path}>{link.name}</Link>
                     </li>
                  ))}
               </ul>
            </nav>

            {/* Icono de usuario */}

            <button aria-label="Mi cuenta">
               <i className="fa-solid fa-user text-black text-xl"></i>
            </button>

            <button
               onClick={() => setMenuOpen(!menuOpen)}
               aria-label="Menú"
               className="cursor-pointer lg:hidden"
            >
               {menuOpen ? (
                  <i className="fa-solid fa-xmark text-black text-xl"></i>
               ) : (
                  <i className="fa-solid fa-bars text-black text-xl"></i>
               )}
            </button>
         </div>

         {/* Botón Categorías */}
         <div className="flex justify-end px-4 md:px-8 py-2">
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
               Categorías
            </button>
         </div>

         {/* Menú desplegable mobile */}
         {menuOpen && (
            <div className="bg-white border-t border-gray-300 px-4 py-4 md:px-8 lg:hidden">
               <ul className="space-y-2 text-black font-medium">
                  {navLinks.map((link) => (
                     <li
                        key={link.id}
                        onClick={() => setMenuOpen(false)}
                     >
                        <Link to={link.path}>{link.name}</Link>
                     </li>
                  ))}
               </ul>
            </div>
         )}
      </header>
   )
}
