import EmptyState from "@/components/ui/EmptyState";
import { FolderIcon } from "@/components/icons";

export default function CasesPage() {
    return (
        <>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Casos</h1>
            <EmptyState
                title="Todavía no hay casos"
                description="Cuando se carguen casos, van a aparecer acá"
                icon={<FolderIcon />}
            />
        </>
    );
}