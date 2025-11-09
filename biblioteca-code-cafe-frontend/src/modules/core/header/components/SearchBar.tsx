export default function SearchBar() {
  return (
    <div className="flex justify-center ">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Busca tu libro favorito..."
          className="w-64 p-2 rounded-l border border-gray-300"
        />
        <button className="bg-black text-white px-4 py-2 rounded-r">
          <i className="fa-solid fa-search"></i>
        </button>
      </div>
    </div>
  );
}
