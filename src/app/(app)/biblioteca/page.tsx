import EmptyState from "@/components/ui/EmptyState";

export default function LibraryPage(){
    return(
        <>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Biblioteca</h1>
            <EmptyState
                title="La biblioteca está vacía"
                description="Cuando se carguen recursos, van a aparecer acá"
            />
        </>
    );
}