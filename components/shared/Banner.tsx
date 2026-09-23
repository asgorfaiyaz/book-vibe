import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export function Banner() {
  return (
    <section className="bg-black/40">
      <div className="page-container">
        <div className="flex min-h-125 flex-col items-center justify-between gap-10 py-12 md:flex-row md:py-16 lg:min-h-140">
          {/* Content */}
          <div className="max-w-xl space-y-6 text-center md:text-left">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl ">
              Books to freshen up your bookshelf
            </h1>

            <p className="max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
              Discover your next favorite read from a collection of books worth
              adding to your bookshelf.
            </p>

            <Link
              href="/listed-books"
              className={buttonVariants({
                size: "lg",
                variant: "outline",
              })}
            >
              View the List
            </Link>
          </div>

          {/* Banner Image */}
          <div className="relative w-full max-w-md md:max-w-lg">
            <Image
              src="/assets/hero_img.jpg"
              alt="Books collection"
              width={600}
              height={500}
              priority
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
