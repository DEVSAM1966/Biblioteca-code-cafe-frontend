import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";
import NavLinks from "./components/NavLinks";
import UserIcon from "./components/UserIcon";
import CategoriesButton from "./components/CategoriesButton";

export default function Header() {

  return (
    <header className="bg-gray-100 border-b border-gray-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center px-4 py-3 md:px-8 gap-4">
        <Logo />
        <SearchBar />
        <NavLinks />
        <UserIcon />
      </div>
      <CategoriesButton />
    </header>
  );
}



