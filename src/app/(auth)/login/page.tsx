import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center px-4">
            <h1 className="text-3xl md:text-5xl text-center">Iniciar sesión</h1>
            <LoginForm />
        </main>
    );
}