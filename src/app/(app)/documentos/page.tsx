import EmptyState from "@/components/ui/EmptyState";

export default function DocumentsPage() {
    return(
        <>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Documentos</h1>
            <EmptyState
                title="Todavía no hay documentos"
                description=""
            />
        </>
    );
}