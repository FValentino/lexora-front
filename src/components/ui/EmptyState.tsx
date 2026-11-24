type EmptyStateProps = {
    title: string;
    description?: string;
    icon?: React.ReactNode;
};

export default function EmptyState({ title, description, icon }: EmptyStateProps) {
    return (
        <div className="flex flex-col items-center gap-1 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
            {icon && (
                <div className="mb-4 flex size-14 items-center justify-center rounded-2xl bg-primary-light text-primary">
                    {icon}
                </div>
            )}
            <p className="font-medium text-slate-900">{title}</p>
            {description && <p className="text-sm text-slate-500">{description}</p>}
        </div>
    );
}