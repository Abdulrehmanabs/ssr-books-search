"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const BookList = dynamic(() => import("./BookList"), {
  ssr: false,
  loading: () => <div>Loading books...</div>,
});

export default function BookListWrapper({ books, total }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <BookList books={books} total={total} />;
}
