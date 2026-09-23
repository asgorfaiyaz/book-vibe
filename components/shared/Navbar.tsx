"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Listed Books",
    href: "/listed-books",
  },
  {
    label: "Pages to Read",
    href: "/pages-to-read",
  },
];

function NavLinks({ mobile = false }: { mobile?: boolean }) {
  return (
    <div
      className={
        mobile ? "flex flex-col gap-2" : "hidden items-center gap-8 md:flex"
      }
    >
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

function AuthButtons({ mobile = false }: { mobile?: boolean }) {
  return (
    <div
      className={
        mobile ? "flex flex-col gap-3" : "hidden items-center gap-3 md:flex"
      }
    >
      <Link
        href="/sign-in"
        className="inline-flex h-9 items-center justify-center rounded-md border px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        Sign In
      </Link>

      <Link
        href="/sign-up"
        className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Sign Up
      </Link>
    </div>
  );
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <nav className="flex h-16 items-center justify-between page-container">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          Book Vibe
        </Link>

        {/* Desktop Navigation */}
        <NavLinks />

        {/* Desktop Auth Buttons */}
        <AuthButtons />

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            }
          />

          <SheetContent side="right" className="px-4 sm:px-6 lg:px-8">
            <SheetHeader>
              <SheetTitle>Book Vibe</SheetTitle>
            </SheetHeader>

            <div className="mt-8 flex flex-col gap-8">
              <NavLinks mobile />
              <AuthButtons mobile />
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
