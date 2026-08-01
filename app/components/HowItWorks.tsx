 import { Calendar, Truck, ShieldCheck } from "lucide-react";
export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-4xl font-bold text-blue-950">
          Como funciona
        </h2>

        <p className="text-lg text-gray-600">
          Simples, rápido e sem preocupações.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl">
            <Calendar className="h-7 w-7 text-green-600" />
          </div>

          <h3 className="mb-4 text-2xl font-semibold text-blue-950">
            Faz a marcação
          </h3>

          <p className="text-gray-600">
            Escolhe data, hora e serviço diretamente na plataforma.
          </p>
        </div>

        <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
            <Truck className="h-7 w-7 text-blue-600" />
          </div>

          <h3 className="mb-4 text-2xl font-semibold text-blue-950">
            Recolhemos o animal
          </h3>

          <p className="text-gray-600">
            A nossa equipa recolhe o seu pet com conforto e segurança.
          </p>
        </div>

        <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl">
            <ShieldCheck className="h-7 w-7 text-green-600" />
          </div>

          <h3 className="mb-4 text-2xl font-semibold text-blue-950">
            Transporte seguro
          </h3>

          <p className="text-gray-600">
            Levamos e entregamos o seu animal com acompanhamento profissional.
          </p>
        </div>
      </div>
    </section>
  );
}