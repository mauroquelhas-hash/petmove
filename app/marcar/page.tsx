"use client";

import { useEffect, useState } from "react";
import {
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  HeartHandshake,
  Zap,
} from "lucide-react";

const services = [
  {
    id: "standard",
    name: "PetMove Standard",
    subtitle: "Transporte programado",
    description:
      "Para consultas, vacinas, exames e outros serviços marcados com antecedência.",
    price: "Desde 25 €",
    icon: CalendarDays,
    iconStyle: "bg-green-100 text-green-600",
  },
  {
    id: "care",
    name: "PetMove Care",
    subtitle: "Ida, espera e regresso",
    description:
      "Recolhemos o animal, aguardamos no local e fazemos o regresso seguro a casa.",
    price: "Desde 45 €",
    icon: HeartHandshake,
    iconStyle: "bg-blue-100 text-blue-600",
  },
  {
    id: "direct",
    name: "PetMove Direct",
    subtitle: "Transporte no próprio dia",
    description:
      "Procuramos a primeira janela disponível para situações que não podem esperar.",
    price: "Sob disponibilidade",
    icon: Zap,
    iconStyle: "bg-amber-100 text-amber-600",
  },
];

const temperaments = [
  "Calmo",
  "Sociável",
  "Nervoso ou ansioso",
  "Medroso",
  "Reativo com pessoas",
  "Reativo com outros animais",
  "Muito ativo",
  "Ansiedade de separação",
];

export default function MarcarPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [animalName, setAnimalName] = useState("");
  const [species, setSpecies] = useState("");
  const [breed, setBreed] = useState("");
  const [weight, setWeight] = useState("");
  const [selectedTemperaments, setSelectedTemperaments] = useState<string[]>(
    [],
  );
  const [biteHistory, setBiteHistory] = useState("");
  const [animalNotes, setAnimalNotes] = useState("");

  const [pickupAddress, setPickupAddress] = useState("");
  const [pickupPostalCode, setPickupPostalCode] = useState("");
  const [pickupCity, setPickupCity] = useState("");
  const [pickupLocationType, setPickupLocationType] = useState("");
  const [pickupContactName, setPickupContactName] = useState("");
  const [pickupContactPhone, setPickupContactPhone] = useState("");
  const [pickupNotes, setPickupNotes] = useState("");
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const serviceName = params.get("servico");

    const serviceFromUrl = services.find(
      (service) => service.name === serviceName,
    );

    if (serviceFromUrl) {
      setSelectedService(serviceFromUrl.id);
    }
  }, []);

  function toggleTemperament(temperament: string) {
    setSelectedTemperaments((current) =>
      current.includes(temperament)
        ? current.filter((item) => item !== temperament)
        : [...current, temperament],
    );
  }

  const animalStepComplete =
    animalName.trim() !== "" &&
    species !== "" &&
    weight.trim() !== "" &&
    selectedTemperaments.length > 0 &&
    biteHistory !== "";

  const pickupStepComplete =
  pickupAddress.trim() !== "" &&
  pickupPostalCode.trim() !== "" &&
  pickupCity.trim() !== "" &&
  pickupLocationType !== "" &&
  pickupContactName.trim() !== "" &&
  pickupContactPhone.trim() !== "";

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <section className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            Marcação PetMove
          </span>

          <h1 className="mt-4 text-4xl font-bold text-blue-950 md:text-5xl">
            Marcar transporte
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Vamos tratar da sua marcação em poucos passos.
          </p>
        </div>

        <div className="mb-10 flex items-center justify-center">
          {[1, 2, 3, 4, 5, 6].map((step, index) => (
            <div key={step} className="flex items-center">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full font-semibold ${
                  step <= currentStep
                    ? "bg-blue-950 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {step}
              </div>

              {index < 5 && (
                <div
                  className={`h-px w-5 sm:w-10 ${
                    step < currentStep ? "bg-blue-950" : "bg-gray-300"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
          {currentStep === 1 && (
            <>
              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-wide text-green-600">
                  Passo 1 de 6
                </p>

                <h2 className="mt-2 text-3xl font-bold text-blue-950">
                  Que serviço pretende?
                </h2>

                <p className="mt-3 text-gray-600">
                  Escolha a opção mais adequada. Poderá rever tudo antes de
                  confirmar.
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

                      <p className="mt-5 font-bold text-blue-950">
                        {service.price}
                      </p>
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
          )}

          {currentStep === 2 && (
            <>
              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-wide text-green-600">
                  Passo 2 de 6
                </p>

                <h2 className="mt-2 text-3xl font-bold text-blue-950">
                  Fale-nos sobre o seu animal
                </h2>

                <p className="mt-3 text-gray-600">
                  Esta informação ajuda-nos a preparar uma recolha segura e
                  adequada.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <label className="block">
                  <span className="font-semibold text-blue-950">
                    Nome do animal *
                  </span>
                  <input
                    type="text"
                    value={animalName}
                    onChange={(event) => setAnimalName(event.target.value)}
                    placeholder="Ex.: Mike"
                    className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-950"
                  />
                </label>

                <label className="block">
                  <span className="font-semibold text-blue-950">Espécie *</span>
                  <select
                    value={species}
                    onChange={(event) => setSpecies(event.target.value)}
                    className="mt-2 w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-950"
                  >
                    <option value="">Selecione</option>
                    <option value="cao">Cão</option>
                    <option value="gato">Gato</option>
                    <option value="outro">Outro</option>
                  </select>
                </label>

                <label className="block">
                  <span className="font-semibold text-blue-950">Raça</span>
                  <input
                    type="text"
                    value={breed}
                    onChange={(event) => setBreed(event.target.value)}
                    placeholder="Ex.: Labrador"
                    className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-950"
                  />
                </label>

                <label className="block">
                  <span className="font-semibold text-blue-950">
                    Peso aproximado *
                  </span>
                  <input
                    type="number"
                    min="0"
                    value={weight}
                    onChange={(event) => setWeight(event.target.value)}
                    placeholder="Ex.: 30 kg"
                    className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-950"
                  />
                </label>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-bold text-blue-950">
                  Como descreve o comportamento do seu animal? *
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  Pode escolher mais do que uma opção.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {temperaments.map((temperament) => {
                    const selected =
                      selectedTemperaments.includes(temperament);

                    return (
                      <button
                        key={temperament}
                        type="button"
                        onClick={() => toggleTemperament(temperament)}
                        className={`rounded-2xl border px-4 py-4 text-left text-sm font-medium transition ${
                          selected
                            ? "border-blue-950 bg-blue-50 text-blue-950"
                            : "border-gray-200 bg-white text-gray-700 hover:border-blue-300"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span
                            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                              selected ? "bg-blue-950" : "bg-gray-100"
                            }`}
                          >
                            {selected && (
                              <Check className="h-4 w-4 text-white" />
                            )}
                          </span>

                          {temperament}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-bold text-blue-950">
                  O animal já mordeu ou tentou morder alguém? *
                </h3>

                <div className="mt-5 grid gap-3 md:grid-cols-3">
                  {[
                    "Nunca",
                    "Apenas em situações de medo",
                    "Sim",
                  ].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setBiteHistory(option)}
                      className={`rounded-2xl border px-5 py-4 text-left font-medium transition ${
                        biteHistory === option
                          ? "border-blue-950 bg-blue-50 text-blue-950"
                          : "border-gray-200 text-gray-700 hover:border-blue-300"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <label className="mt-10 block">
                <span className="font-semibold text-blue-950">
                  Cuidados, gatilhos ou informações importantes
                </span>

                <textarea
                  value={animalNotes}
                  onChange={(event) => setAnimalNotes(event.target.value)}
                  placeholder="Ex.: Fica nervoso com pessoas desconhecidas e não gosta que lhe toquem nas patas."
                  rows={4}
                  className="mt-2 w-full resize-none rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-950"
                />
              </label>

              <div className="mt-10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => {
                    setCurrentStep(1);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 rounded-2xl border border-gray-300 px-6 py-4 font-semibold text-blue-950 transition hover:bg-gray-50"
                >
                  <ChevronLeft className="h-5 w-5" />
                  Voltar
                </button>

                <button
                  type="button"
                  disabled={!animalStepComplete}
                  onClick={() => {
                    setCurrentStep(3);
                     window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 rounded-2xl bg-blue-950 px-8 py-4 font-semibold text-white transition hover:bg-blue-900 disabled:cursor-not-allowed disabled:bg-gray-300"
                >
                  Continuar
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </>
          )}

          {/* PASSO 3 */}

          {currentStep === 3 && (
            <>
              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-wide text-green-600">
                  Passo 3 de 6
                </p>

                <h2 className="mt-2 text-3xl font-bold text-blue-950">
                  Onde devemos recolher o seu animal?
                </h2>

                <p className="mt-3 text-gray-600">
                  Indique a morada e o contacto da pessoa que irá entregar o
                  animal.
                </p>
              </div>

              <p className="text-xl font-bold text-blue-950">
                🚧 Passo 3 em desenvolvimento
              </p>

              <div className="mt-10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="rounded-2xl border border-gray-300 px-6 py-4"
                >
                  Voltar
                </button>

                <button
                  type="button"
                  className="rounded-2xl bg-blue-950 px-8 py-4 font-semibold text-white"
                >
                  Continuar
                </button>
              </div>
            </>
          )}

        </div>
      </section>
    </main>
  );
}