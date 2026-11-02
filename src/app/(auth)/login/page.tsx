import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function LoginPage() {
    return (
        <main>
            <h1>Iniciar sesión</h1>

            <form>
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
        </main>
    );
}