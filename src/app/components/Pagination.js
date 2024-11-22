"use client";

import { useRouter } from "next/navigation";

export default function Pagination({ currentPage, totalPages }) {
  const router = useRouter();

  const goToPage = (page) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", page);
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="pagination">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        Next
      </button>
    </div>
  );
}
