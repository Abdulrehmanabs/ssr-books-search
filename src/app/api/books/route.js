import dbConnect from "@/lib/conn";
import Book from "@/lib/models/Books";

export async function GET(req) {
  await dbConnect();

  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search") || "";
  const genre = searchParams.get("genre") || "";
  const author = searchParams.get("author") || "";
  const page = parseInt(searchParams.get("page") || 1, 10);
  const limit = parseInt(searchParams.get("limit") || 5, 10);

  const filter = {};

  if (search) {
    filter.title = { $regex: search, $options: "i" }; // Case-insensitive search
  }
  if (genre) {
    filter.genre = genre;
  }
  if (author) {
    filter.author = author;
  }

  const totalBooks = await Book.countDocuments(filter);
  const books = await Book.find(filter)
    .skip((page - 1) * limit)
    .limit(limit);

  return new Response(
    JSON.stringify({
      books,
      total: totalBooks,
      page,
      totalPages: Math.ceil(totalBooks / limit),
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}

export async function POST(req) {
  await dbConnect();

  const body = await req.json();
  const { title, author, genre, publishedYear } = body;

  try {
    const newBook = await Book.create({ title, author, genre, publishedYear });
    return new Response(JSON.stringify(newBook), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
    });
  }
}
