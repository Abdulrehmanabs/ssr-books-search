import dbConnect from "../lib/conn";
import Book from "../lib/models/Books";

export const seedBooks = async () => {
  await dbConnect();

  const books = [
    {
      title: "Book One",
      author: "Author A", 
      genre: "Fiction",
      publishedYear: 2001,
    },
    {
      title: "Book Two",
      author: "Author B",
      genre: "Non-Fiction", 
      publishedYear: 2002,
    },
    {
      title: "Book Three",
      author: "Author A",
      genre: "Fiction",
      publishedYear: 2003,
    },
    {
      title: "Book Four", 
      author: "Author C",
      genre: "Drama",
      publishedYear: 2004,
    },
    {
      title: "Book Five",
      author: "Author D",
      genre: "Horror",
      publishedYear: 2005,
    },
    {
      title: "Book Six",
      author: "Author B",
      genre: "Mystery",
      publishedYear: 2006,
    },
    {
      title: "Book Seven",
      author: "Author E",
      genre: "Romance",
      publishedYear: 2007,
    },
    {
      title: "Book Eight",
      author: "Author C",
      genre: "Science Fiction",
      publishedYear: 2008,
    },
    {
      title: "Book Nine",
      author: "Author D",
      genre: "Thriller",
      publishedYear: 2009,
    },
    {
      title: "Book Ten",
      author: "Author A",
      genre: "Fantasy",
      publishedYear: 2010,
    },
    {
      title: "Book Eleven",
      author: "Author E",
      genre: "Historical Fiction",
      publishedYear: 2011,
    },
    {
      title: "Book Twelve",
      author: "Author B",
      genre: "Biography",
      publishedYear: 2012,
    },
    {
      title: "Book Thirteen",
      author: "Author C",
      genre: "Poetry",
      publishedYear: 2013,
    },
    {
      title: "Book Fourteen",
      author: "Author D",
      genre: "Adventure",
      publishedYear: 2014,
    },
    {
      title: "Book Fifteen",
      author: "Author E",
      genre: "Comedy",
      publishedYear: 2015,
    },
  ];

  await Book.deleteMany({});
  await Book.insertMany(books);

  console.log("Database seeded!");
};
