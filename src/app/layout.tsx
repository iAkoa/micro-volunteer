import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MicroVolunteer — Quick Tasks, Big Impact",
  description:
    "Connect with nonprofits for quick 15-30 minute remote volunteer tasks. Earn badges, track impact, make a difference.",
};

const navLinks = [
  { href: "/tasks", label: "Browse Tasks" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/impact", label: "Impact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
            <Link href="/" className="text-xl font-bold tracking-tight">
              Micro<span className="text-primary">Volunteer</span>
            </Link>
            <nav className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <Link
                href="/profile"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Profile
              </Link>
            </div>
          </div>
        </header>

        <main className="min-h-[calc(100vh-8rem)]">{children}</main>

        <footer className="border-t">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
            <p className="text-sm text-muted-foreground">
              MicroVolunteer — Quick tasks, big impact.
            </p>
            <div className="flex gap-6">
              <Link
                href="/tasks"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Tasks
              </Link>
              <Link
                href="/impact"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Impact
              </Link>
              <Link
                href="/profile"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Profile
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
