import { Link } from "react-router-dom";
import { navLinks } from "../constants/navLinks";
import type { NavLink } from "../constants/navLinks";

export default function NavLinks() {
    return (
        <div className="flex justify-end gap-4 text-black font-medium whitespace-nowrap">
        {navLinks.map((link: NavLink) => (
            <Link key={link.id} to={link.path}>
            {link.name}
            </Link>
        ))}
        </div>
    );
}