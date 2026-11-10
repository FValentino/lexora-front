import EmptyState from "@/components/ui/EmptyState";

export default function DocumentsPage() {
    return(
        <>
            <h1>Documentos</h1>
            <EmptyState
                title="Todavía no hay documentos"
                description=""
            />
        </>
    );
}