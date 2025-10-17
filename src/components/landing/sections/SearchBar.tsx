import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="md:hidden flex items-center justify-center bg-background">
      <div className="w-full max-w-md">
        <div className="relative flex items-center bg-[#f7f7f7] rounded-full px-4 py-2">
          <Search className="w-5 h-5 text-[#000000] mr-3 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search for product..."
            className="flex-1 bg-transparent border-none outline-none text-[#000000] placeholder:text-[#aaaaaa] text-sm"
          />
        </div>
      </div>
    </div>
  );
}
