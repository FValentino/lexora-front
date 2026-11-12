"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useRouter } from "next/navigation";

export default function LoginForm() {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const router = useRouter();

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const email = formData.get("email");
		const password = formData.get("password");

		setError(null);
		setIsLoading(true);

		try {
			const response = await fetch("/api/v1/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				credentials: "include",
				body: JSON.stringify({ email, password }),
			});

			if (response.ok) {
				router.push("/casos");
				return;
			}

			if (response.status === 401) {
				setError("Email o contraseña incorrectos");
			} else {
				setError("Ocurrió un error. Intenta de nuevo.");
			}
		} catch {
			setError("No se pudo conectar con el servidor");
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<form onSubmit={handleSubmit} className="flex flex-col w-full max-w-sm my-10">
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
			{error && <p role="alert" className="text-red-600 text-sm text-center">{error}</p>}
			<Button type="submit" disabled={isLoading}>
				{isLoading ? "Ingresando..." : "Ingresar"}
			</Button>
		</form>
	);
}