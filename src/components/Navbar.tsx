"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: "/casos", label: "Casos" },
    { href: "/documentos", label: "Documentos" },
    { href: "/biblioteca", label: "Biblioteca" }
]

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav>
            {links.map((link) => (
                <Link key={link.href}
                    href={link.href}
                    className={pathname === link.href ? "font-bold" : ""}>
                    {link.label}
                </Link>
            ))}
        </nav>
    );
}