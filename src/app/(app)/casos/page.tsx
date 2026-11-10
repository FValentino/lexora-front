import EmptyState from "@/components/ui/EmptyState";

export default function CasesPage() {
    return (
        <>
            <h1>Casos</h1>
            <EmptyState
                title="Todavía no hay casos"
                description="Cuando se carguen casos, van a aparecer acá"
            />
        </>
    );
}