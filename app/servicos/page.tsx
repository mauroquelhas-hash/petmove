import Link from "next/link";
import {
  CalendarDays,
  Check,
  HeartHandshake,
  Zap,
} from "lucide-react";

const services = [
  {
    name: "PetMove Standard",
    subtitle: "Transporte programado",
    description:
      "Para consultas, vacinas, exames e outros serviços previamente marcados.",
    price: "Desde 25 €",
    idealFor: ["Consultas", "Vacinas", "Exames", "Check-ups"],
    icon: CalendarDays,
    iconStyle: "bg-green-100 text-green-600",
  },
  {
    name: "PetMove Care",
    subtitle: "Ida, espera e regresso",
    description:
      "Recolhemos o animal, aguardamos no local e fazemos o regresso seguro a casa.",
    price: "Desde 45 €",
    idealFor: [
      "Consultas demoradas",
      "Tratamentos",
      "Exames complexos",
      "Tutores sem disponibilidade",
    ],
    icon: HeartHandshake,
    iconStyle: "bg-blue-100 text-blue-600",
  },
  {
    name: "PetMove Direct",
    subtitle: "Transporte no próprio dia",
    description:
      "Procuramos a primeira janela disponível para situações que não podem esperar.",
    price: "Preço sob disponibilidade",
    idealFor: [
      "Necessidades urgentes",
      "Deslocações no próprio dia",
      "Consultas inesperadas",
      "Prioridade operacional",
    ],
    icon: Zap,
    iconStyle: "bg-amber-100 text-amber-600",
  },
];

export default function ServicosPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-20">
      <section className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            Serviços PetMove
          </span>

          <h1 className="text-5xl font-bold tracking-tight text-blue-950">
            Escolha o serviço certo para o seu animal
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Três opções simples, transparentes e pensadas para necessidades
            diferentes.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.name}
                className="flex flex-col rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${service.iconStyle}`}
                >
                  <Icon className="h-8 w-8" />
                </div>

                <p className="text-sm font-semibold uppercase tracking-wide text-green-600">
                  {service.subtitle}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-blue-950">
                  {service.name}
                </h2>

                <p className="mt-5 min-h-20 leading-7 text-gray-600">
                  {service.description}
                </p>

                <p className="mt-6 text-2xl font-bold text-blue-950">
                  {service.price}
                </p>

                <div className="mt-8 text-left">
                  <p className="font-semibold text-blue-950">Ideal para:</p>

                  <ul className="mt-4 space-y-3 text-gray-600">
                    {service.idealFor.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100">
                          <Check className="h-4 w-4 text-green-600" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/marcar?servico=${encodeURIComponent(service.name)}`}
  className="service-button"
                >
                  Marcar transporte
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}