import EmptyState from "@/components/ui/EmptyState";

export default function LibraryPage(){
    return(
        <>
            <h1>Biblioteca</h1>
            <EmptyState
                title="La biblioteca está vacía"
                description="Cuando se carguen recursos, van a aparecer acá"
            />
        </>
    );
}