import Link from "next/link";

const variants = {
  gold: "bg-[#b38a44] text-[#071522] hover:bg-[#d3b67d]",
  light: "bg-white text-[#071522]",
} as const;

export function GoldLink({
  href,
  children,
  variant = "gold",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-10 items-center justify-center rounded px-3.5 text-center text-xs font-semibold uppercase leading-[19.8px] tracking-[0.3px] transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
