"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchFilter() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [author, setAuthor] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    const params = new URLSearchParams({ search, genre, author, page: 1 });
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search by title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <input
        type="text"
        placeholder="Filter by genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Filter by author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
