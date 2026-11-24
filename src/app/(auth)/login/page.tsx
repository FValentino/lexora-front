import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen grid lg:grid-cols-2">
      <section className="flex flex-col justify-between gap-8 bg-linear-to-br from-primary to-primary-dark px-6 py-10 text-white md:px-12 lg:p-16">
        <span className="text-xl font-bold">Lexora</span>

        <div className="max-w-md">
          <p className="mb-4 text-3xl font-bold leading-tight lg:text-5xl">
            Tu estudio, organizado en un solo lugar.
          </p>
          <p className="text-primary-light/80 lg:text-lg">
            Casos, documentos y modelos jurídicos al alcance de todo el equipo.
          </p>
        </div>

        <p className="hidden text-sm text-primary-light/70 lg:block">
          Plataforma de asistencia jurídica
        </p>
      </section>

      <section className="flex flex-col items-center justify-center px-4 py-12">
        <h1 className="text-3xl md:text-5xl text-center">Iniciar sesión</h1>
        <LoginForm />
      </section>
    </main>
  );
}
