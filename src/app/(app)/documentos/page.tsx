import EmptyState from "@/components/ui/EmptyState";
import { DocumentIcon } from "@/components/icons";

export default function DocumentsPage() {
    return(
        <>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Documentos</h1>
            <EmptyState
                title="Todavía no hay documentos"
                description="Los documentos que se suban o se generen desde un caso se van a listar acá."
                icon={<DocumentIcon />}
            />
        </>
    );
}