"use client";

import Button from "@/components/ui/Button";

type ErrorPageProps = {
    error: unknown;
    retry: () => void;
};

export default function ErrorPage({ error, retry }: ErrorPageProps) {
    console.error(error);

    return (
        <div role="alert">
            <p>Ocurrió un error al cargar esta sección.</p>
            <Button onClick={retry}>Reintentar</Button>
        </div>
    );
}