import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
    return (
        <main className="w-full h-screen m-0 p-0 flex flex-col items-center justify-center">
            <h1 className="text-center text-5xl w-[50%]">Iniciar sesión</h1>
            <LoginForm />
        </main>
    );
}