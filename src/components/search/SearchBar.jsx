import { useState } from "react";

function SearchBar({ onSearch }) {

    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-center w-full max-w-md"
        >
            <input
                type="text"
                placeholder="Search village or area..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="border border-gray-300 px-3 py-1.5 flex-1 rounded-l-md text-sm"
            />

            <button
                type="submit"
                className="bg-green-700 text-white px-3 py-1.5 rounded-r-md text-sm hover:bg-green-800"
            >
                Search
            </button>
        </form>
    );
}

export default SearchBar;