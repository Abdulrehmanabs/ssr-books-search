// Lazy load the BookList component
import React, { Suspense } from "react";
import Pagination from "./components/Pagination";
import SearchFilter from "./components/SearchFilter";
const BookList = React.lazy(() => import("./components/BookList"));

export default async function Home({ searchParams }) {
  const {
    search = "",
    genre = "",
    author = "",
    page = 1,
    limit = 5,
  } = searchParams;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/books?search=${search}&genre=${genre}&author=${author}&page=${page}&limit=${limit}`
  ).then((res) => res.json());

  const { books = [], total = 0, totalPages = 1 } = res;

  return (
    <div className="container">
      <div>
        <h1 className="header">Search Books</h1>
        <SearchFilter />
      </div>
      <div>
        <Suspense fallback={<div>Loading books...</div>}>
          <BookList books={books} total={total} />
        </Suspense>
        {totalPages > 1 && (
          <Pagination currentPage={Number(page)} totalPages={totalPages} />
        )}
      </div>
    </div>
  );
}