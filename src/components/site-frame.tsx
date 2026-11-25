import type { ReactNode } from "react";
import Link from "next/link";
import { GoldLink } from "@/components/gold-link";

const nav = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#homes", label: "Available Rentals" },
  { href: "#why", label: "Resident Information" },
];

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <div id="top" className="relative min-h-screen bg-[#071522] text-[#f5f7f5]">
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex h-[82px] w-full max-w-[1440px] items-center gap-5 px-5 lg:px-[50px]">
          <Link href="#top" className="shrink-0">
            <img
              src="/images/logo.png"
              alt="Perrins Peak LLC"
              className="h-6 w-auto mix-blend-screen sm:h-7"
            />
          </Link>

          <nav className="ml-auto hidden items-center gap-[26px] lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2 text-[11px] font-semibold uppercase leading-[18.15px] tracking-[0.44px] text-[#f5f7f5] decoration-from-font underline-offset-2 transition-colors hover:text-[#b38a44] hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto hidden lg:ml-5 lg:block">
            <GoldLink href="#contact">Contact Us</GoldLink>
          </div>

          <details className="relative ml-auto lg:hidden">
            <summary className="cursor-pointer list-none text-[11px] font-semibold uppercase tracking-[0.44px] text-[#f5f7f5] [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <nav
              aria-label="Primary"
              className="absolute right-0 top-10 flex w-56 flex-col gap-1 border border-[#345063] bg-[#071522] p-3"
            >
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-2 py-2 text-[11px] font-semibold uppercase tracking-[0.44px] text-[#f5f7f5] decoration-from-font underline-offset-2 hover:text-[#b38a44] hover:underline"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#contact"
                className="px-2 py-2 text-[11px] font-semibold uppercase tracking-[0.44px] text-[#b38a44] decoration-from-font underline-offset-2 hover:underline"
              >
                Contact Us
              </Link>
            </nav>
          </details>
        </div>
      </header>

      <main>{children}</main>
    </div>
  );
}
