import { BellRing, HeartHandshake, ShieldCheck } from "lucide-react";

export default function WhyPetMove() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-16 text-center">
        <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
          Confiança em cada etapa
        </span>

        <h2 className="mb-4 text-4xl font-bold text-blue-950">
          Porque escolher a PetMove?
        </h2>

        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Um serviço pensado para reduzir preocupações e garantir que o seu
          animal é acompanhado com segurança, cuidado e transparência.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
            <ShieldCheck className="h-7 w-7 text-green-600" />
          </div>

          <h3 className="mb-4 text-2xl font-semibold text-blue-950">
            Segurança
          </h3>

          <p className="text-gray-600">
            Procedimentos claros e transporte preparado para proteger o seu
            animal durante todo o serviço.
          </p>
        </div>

        <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
            <BellRing className="h-7 w-7 text-blue-600" />
          </div>

          <h3 className="mb-4 text-2xl font-semibold text-blue-950">
            Acompanhamento
          </h3>

          <p className="text-gray-600">
            Recebe atualizações claras sobre o estado do serviço e sabe sempre
            em que fase está o seu animal.
          </p>
        </div>

        <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
            <HeartHandshake className="h-7 w-7 text-green-600" />
          </div>

          <h3 className="mb-4 text-2xl font-semibold text-blue-950">
            Cuidado profissional
          </h3>

          <p className="text-gray-600">
            Uma experiência humana, responsável e adaptada às necessidades de
            cada animal.
          </p>
        </div>
      </div>
    </section>
  );
}