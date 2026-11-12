import Navbar from "@/components/Navbar";

export default function AppLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <header className="bg-white border-b border-neutral-200">
                <Navbar />
            </header>

            <main className="w-full max-w-5xl mx-auto px-4 py-6 md:px-8 md:py-10">{children}</main>
        </>
    );
}