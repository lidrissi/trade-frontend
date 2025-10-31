import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="bg-background flex items-center justify-center md:hidden">
      <div className="w-full max-w-md">
        <div className="relative flex items-center rounded-full px-4 py-2 md:bg-[#f7f7f7]">
          <Search className="mr-3 h-5 w-5 flex-shrink-0 text-[#000000]" />
          <input
            type="text"
            placeholder="Search for product..."
            className="hidden flex-1 border-none bg-transparent text-sm text-[#000000] outline-none placeholder:text-[#aaaaaa] md:inline-block"
          />
        </div>
      </div>
    </div>
  );
}
