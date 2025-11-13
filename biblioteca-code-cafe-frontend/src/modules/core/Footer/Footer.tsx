export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10">
      {/* Sección de tres columnas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {/* LIBRERÍA CodigoJava */}
        <div>
          <h2 className="text-xl font-bold">LIBRERÍA Code Coffe</h2>
          <p className="mt-2 text-sm">
            Descubre libros de distinta temática literaria de primera calidad en Librería CodigoJava. Tu destino único para todas tus necesidades literarias y más.
          </p>

          {/* Redes sociales */}
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram text-white text-xl"></i>
            </a>
            <a href="#" aria-label="YouTube">
              <i className="fab fa-youtube text-white text-xl"></i>
            </a>
            <a href="#" aria-label="TikTok">
              <i className="fab fa-tiktok text-white text-xl"></i>
            </a>
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook text-white text-xl"></i>
            </a>
          </div>
        </div>

        {/* Soporte */}
        <div>
    <h3 className="font-semibold mb-2">Soporte</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#">Mi cuenta</a></li>
            <li><a href="#">Preguntas frecuentes</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Nosotros</a></li>
          </ul>
        </div>

        {/* Libro de reclamaciones */}
        <div>
          <h3 className="font-semibold mb-2">Libro de reclamaciones</h3>
          <p className="text-sm">CODE CAFE</p>
          <p className="text-sm">Desarrollo de proyectos</p>
        </div>
      </div>

      {/* Línea divisoria */}
      <hr className="border-gray-700 mb-10" />

      {/* Newsletter centrado */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h3 className="font-semibold mb-2">Suscríbete al Newsletter</h3>
        <p className="text-sm mb-6">
         Suscríbete a nuestro boletín para conocer nuevos productos, tendencias y ofertas. Al suscribirte aceptas nuestra política de privacidad.
        </p>

        {/* Formulario en 4 columnas */}
        <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Nombre(s)"
            className="w-full p-2 rounded bg-gray-100 text-black"
          />
                      <input
            type="text"
            placeholder="Apellido(s)"
            className="w-full p-2 rounded bg-gray-100 text-black"
          />
          <input
            type="email"
            placeholder="Correo electrónico*"
            className="w-full p-2 rounded bg-gray-100 text-black"
          />
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded"
         >
            Enviar formulario
         </button>
        </form>
      </div>


      {/* Copyright */}
      <div className="text-center text-xs border-t border-gray-700 pt-4">
        © 2025 CODE-CAFE. Todos los derechos reservados.
      </div>
    </footer>
  );
}
