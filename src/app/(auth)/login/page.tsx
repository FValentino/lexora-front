import LoginForm from "@/components/LoginForm";
import Image from "next/image";

export default function LoginPage() {
  return (
    <main className="min-h-screen grid lg:grid-cols-2">
      <section className="flex flex-col justify-between gap-8 bg-linear-to-br from-primary to-primary-dark px-6 py-10 text-white md:px-12 lg:p-16">
        <span className="flex items-center gap-3 text-xl font-bold">
          <Image src="/logo/balanza-white.svg" alt="" width={36} height={36} />
          Lexora
        </span>

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
        <div className="w-full max-w-md rounded-3xl bg-white px-6 py-10 text-center shadow-xl shadow-slate-900/5 md:px-11 md:py-12">
          <h1 className="mb-2 text-2xl font-bold md:text-3xl">Iniciar sesión</h1>
          <p className="mb-6 text-slate-500">Ingresá con tu cuenta del estudio.</p>

          <LoginForm />

          <p className="mt-6 border-t border-slate-200 pt-5 text-sm text-slate-500">
            ¿No tenés acceso? Pedíselo al administrador de tu estudio.
          </p>
        </div>
      </section>
    </main>
  );
}
