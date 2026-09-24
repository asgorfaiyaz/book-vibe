import type { Book } from "@/types/book";
import { BookCard } from "../BookCard";

async function BookList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/db.json`);

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  const data: Book[] = await res.json();

  return (
    <section className="page-container py-12">
      <h1 className="mb-8 text-3xl font-bold">Books</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
}

export default BookList;
