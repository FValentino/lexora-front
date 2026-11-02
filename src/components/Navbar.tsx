import Link from "next/link";

export default function Navbar(){
    return(
        <nav>
            <Link href="/casos">Casos</Link>
            <Link href="/documentos">Documentos</Link>
            <Link href="/biblioteca">Biblioteca</Link>
        </nav>
    );
}