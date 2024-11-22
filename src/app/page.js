// src/app/page.js (Server Component)
import { headers } from "next/headers";
import Pagination from "./components/Pagination";
import SearchFilter from "./components/SearchFilter";
import BookListWrapper from "./components/BookListWrapper"; // Client Component wrapper for BookList

export default async function Home({ searchParams }) {
  const params = await searchParams;
  const { search = "", genre = "", author = "", page = 1, limit = 5 } = params;
  const getBaseUrl = async () => {
    const requestHeaders = await headers();
    const host = requestHeaders.get("host");
    const protocol = host.startsWith("localhost") ? "http" : "https";
    return `${protocol}://${host}`;
  };

  const baseUrl = await getBaseUrl();
  const res = await fetch(
    `${baseUrl}/api/books?search=${search}&genre=${genre}&author=${author}&page=${page}&limit=${limit}`
  ).then((res) => res.json());

  const { books = [], total = 0, totalPages = 1 } = res;

  return (
    <div className="container">
      <div>
        <h1 className="header">Search Books</h1>
        <SearchFilter />
      </div>
      <div>
        <BookListWrapper books={books} total={total} />
        {totalPages > 1 && (
          <Pagination currentPage={Number(page)} totalPages={totalPages} />
        )}
      </div>
    </div>
  );
}
