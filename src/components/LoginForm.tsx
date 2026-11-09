"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function LoginForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");

        setError(null);
        setIsLoading(true);

        // SIMULACIÓN: en la parte 3 esto se reemplaza por el pedido a la API
        await new Promise((resolve) => setTimeout(resolve, 1500));

        if (email !== "test@lexora.com" || password !== "1234") {
            setError("Email o contraseña incorrectos");
        }

        setIsLoading(false);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                label="Email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                required
            />
            <Input
                label="Contraseña"
                name="password"
                type="password"
                required
            />
            {error && <p role="alert">{error}</p>}
            <Button type="submit" disabled={isLoading}>{isLoading ? "Ingresando..." : "Ingresar"}
            </Button>
        </form>
    );
}