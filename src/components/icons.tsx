type IconProps = {
    className?: string;
};

const base = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
};

export function FolderIcon({ className = "size-7" }: IconProps) {
    return (
        <svg {...base} className={className}>
            <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        </svg>
    );
}

export function DocumentIcon({ className = "size-7" }: IconProps) {
    return (
        <svg {...base} className={className}>
            <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
            <path d="M14 3v5h5M9 13h6M9 17h4" />
        </svg>
    );
}

export function BookIcon({ className = "size-7" }: IconProps) {
    return (
        <svg {...base} className={className}>
            <path d="M4 19V5a2 2 0 0 1 2-2h12v14H6a2 2 0 0 0-2 2zm0 0a2 2 0 0 0 2 2h12" />
            <path d="M9 7h5" />
        </svg>
    );
}

export function AlertIcon({ className = "size-5" }: IconProps) {
    return (
        <svg {...base} className={className}>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v4M12 16h.01" />
        </svg>
    );
}