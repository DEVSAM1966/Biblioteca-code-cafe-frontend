import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-100 border-b border-gray-300">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* Logo + Icono */}
        <div className="flex flex-col items-start">
          <div className="text-xl font-bold text-black">
            <span className="mr-1">LIBRERÍA</span>
            <span className="bg-black text-white px-2 py-1 rounded">CodigoJava</span>
          </div>

          {/* Icono hamburguesa / X */}
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menú" className="mt-2">
            {menuOpen ? (
              <i className="fa-solid fa-xmark text-black text-xl"></i>
            ) : (
              <i className="fa-solid fa-bars text-black text-xl"></i>
            )}
          </button>
        </div>

        {/* Search bar */}
        <div className="flex-1 mx-4 hidden md:flex">
          <input
            type="text"
            placeholder="Busca tu libro favorito..."
            className="w-full p-2 rounded-l border border-gray-300"
          />
          <button className="bg-black text-white px-4 rounded-r">
            <i className="fa-solid fa-search"></i>
          </button>
        </div>

        {/* Icono de usuario */}
        <div>
          <button aria-label="Mi cuenta">
            <i className="fa-solid fa-user text-black text-xl"></i>
          </button>
        </div>
      </div>

      {/* Botón Categorías */}
      <div className="flex justify-end px-4 md:px-8 py-2">
        <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
          Categorías
        </button>
      </div>

      {/* Menú desplegable */}
      {menuOpen && (
        <div className="bg-white border-t border-gray-300 px-4 py-4 md:px-8">
          <ul className="space-y-2 text-black font-medium">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
            </li>
            <li>
              <Link to="/nosotros" onClick={() => setMenuOpen(false)}>Nosotros</Link>
            </li>
            <li>
              <Link to="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link>
            </li>
            <li>
              <Link to="/libros" onClick={() => setMenuOpen(false)}>Todos los libros</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}



