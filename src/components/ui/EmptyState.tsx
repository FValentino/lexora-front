type EmptyStateProps = {
    title: string;
    description?: string;
};

export default function EmptyState({ title, description }: EmptyStateProps) {
    return (
        <div className="flex flex-col items-center gap-1 rounded-2x1 border border-dashed border-neutral-300 bg-white px-6 py-12 text-center">
            <p className="font-medium text-neutral-900">{title}</p>
            {description && <p className="text-sm text-neutral-500">{description}</p>}
        </div>
    );
}