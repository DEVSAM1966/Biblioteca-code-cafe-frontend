import {link} from "react-router-dom";
import {navlinks} from "../constants/navlinks";
import type  { NavLink } from "../constants/navlinks";


export default function NavLinks(){
    return(
     <div className="flex-justify-end gap-3 text-black font-medium whitespace-nowrap">
        {NavLinks.apply,ap((link:Navlinks)=>(
            <Link key={link.id} to={link.path}>
                {link.name}
            </Link>
        ) )}

     </div>
    );
}