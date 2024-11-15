import { FaSearch } from 'react-icons/fa';

export default function SearchBar() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="퀴즈 검색..."
        className="w-full pl-4 pr-10 h-12 rounded-full border-2 border-gray-300 focus:outline-none focus:border-gray-400"
      />
      <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
        <FaSearch />
      </button>
    </div>
  );
}
