"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const links = [
	{ href: "/casos", label: "Casos" },
	{ href: "/documentos", label: "Documentos" },
	{ href: "/biblioteca", label: "Biblioteca" }
]

export default function Navbar() {
	const pathname = usePathname();

	return (
		<nav className="max-w-5xl mx-auto flex flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between md:px-8">
			<span className="flex items-center gap-2 text-lg font-bold text-primary">
				<Image src="/logo/balanza-navy.svg" alt="" width={28} height={28} />
				Lexora
			</span>

			<div className="flex gap-2">
				{links.map((link) => {
					const isActive = pathname.startsWith(link.href);

					return (
						<Link
							key={link.href}
							href={link.href}
							aria-current={isActive ? "page" : undefined}
							className={`rounded-full px-4 py-1.5 text-sm transition-colors ${isActive ? "bg-primary-light text-primary font-semibold" : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"}`}>
							{link.label}
						</Link>
					);
				})}
			</div>
		</nav>
	);
}