import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import type { Book } from "@/types/book";

type BookCardProps = {
  book: Book;
};

export function BookCard({ book }: BookCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col">
      <div className="relative aspect-3/4 w-full">
        <Image
          src={book.image}
          alt={book.bookName}
          loading="eager"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
        />
      </div>

      <CardHeader>
        <div className="flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <h2 className="text-xl font-semibold">{book.bookName}</h2>

        <p className="text-sm text-muted-foreground">by {book.author}</p>
      </CardHeader>

      <CardContent className="space-y-2 flex-1">
        <div className="flex items-center justify-between text-sm">
          <span>Rating</span>
          <span className="font-medium">⭐ {book.rating}</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span>Pages</span>
          <span>{book.totalPages}</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span>Published</span>
          <span>{book.yearOfPublishing}</span>
        </div>
      </CardContent>

      <CardFooter>
        <Link
          className={buttonVariants({ className: "w-full" })}
          href={`/books/${book.bookId}`}
        >
          View Details
        </Link>
      </CardFooter>
    </Card>
  );
}
