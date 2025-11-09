export interface NavLink {
    id: number;
    name: string;
    path: string;
}

export const navLinks = [
    { id: 1, name: "Inicio", path: "/" },
    { id: 2, name: "Nosotros", path: "/nosotros" },
    { id: 3, name: "Contacto", path: "/contacto" },
    { id: 4, name: "Todos", path: "/libros" },
];