import type { Dispatch, SetStateAction } from "react";
import { Check, ChevronRight } from "lucide-react";
import services from "../data/services";

type Step1ServiceProps = {
  services: typeof services;
  selectedService: string;
  setSelectedService: Dispatch<SetStateAction<string>>;
  setCurrentStep: Dispatch<SetStateAction<number>>;
};

export default function Step1Service({
  services,
  selectedService,
  setSelectedService,
  setCurrentStep,
}: Step1ServiceProps) {
  return (
    <>
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-green-600">
          Passo 1 de 6
        </p>

        <h2 className="mt-2 text-3xl font-bold text-blue-950">
          Que serviço pretende?
        </h2>

        <p className="mt-3 text-gray-600">
          Escolha a opção mais adequada. Poderá rever tudo antes de confirmar.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          const isSelected = selectedService === service.id;

          return (
            <button
              key={service.id}
              type="button"
              onClick={() => setSelectedService(service.id)}
              className={`relative rounded-3xl border p-6 text-left transition ${
                isSelected
                  ? "border-blue-950 bg-blue-50 shadow-md"
                  : "border-gray-200 bg-white hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              }`}
            >
              {isSelected && (
                <span className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-blue-950">
                  <Check className="h-4 w-4 text-white" />
                </span>
              )}

              <div
                className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${service.iconStyle}`}
              >
                <Icon className="h-6 w-6" />
              </div>

              <p className="text-xs font-semibold uppercase tracking-wide text-green-600">
                {service.subtitle}
              </p>

              <h3 className="mt-2 text-xl font-bold text-blue-950">
                {service.name}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {service.description}
              </p>

              <p className="mt-5 font-bold text-blue-950">{service.price}</p>
            </button>
          );
        })}
      </div>

      <div className="mt-10 flex justify-end">
        <button
          type="button"
          disabled={!selectedService}
          onClick={() => {
            setCurrentStep(2);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="inline-flex items-center gap-2 rounded-2xl bg-blue-950 px-8 py-4 font-semibold text-white transition hover:bg-blue-900 disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          Continuar
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </>
  );
}