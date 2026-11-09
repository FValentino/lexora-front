"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function LoginForm() {
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");

        console.log({ email, password });
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
            <Button type="submit">Ingresar</Button>
        </form>
    );
}