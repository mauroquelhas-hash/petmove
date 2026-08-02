import type { Dispatch, SetStateAction } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Step3PickupProps = {
  pickupAddress: string;
  setPickupAddress: Dispatch<SetStateAction<string>>;

  pickupPostalCode: string;
  setPickupPostalCode: Dispatch<SetStateAction<string>>;

  pickupCity: string;
  setPickupCity: Dispatch<SetStateAction<string>>;

  pickupLocationType: string;
  setPickupLocationType: Dispatch<SetStateAction<string>>;

  pickupContactName: string;
  setPickupContactName: Dispatch<SetStateAction<string>>;

  pickupContactPhone: string;
  setPickupContactPhone: Dispatch<SetStateAction<string>>;

  pickupNotes: string;
  setPickupNotes: Dispatch<SetStateAction<string>>;

  pickupStepComplete: boolean;
  setCurrentStep: Dispatch<SetStateAction<number>>;
};

export default function Step3Pickup({
  pickupAddress,
  setPickupAddress,
  pickupPostalCode,
  setPickupPostalCode,
  pickupCity,
  setPickupCity,
  pickupLocationType,
  setPickupLocationType,
  pickupContactName,
  setPickupContactName,
  pickupContactPhone,
  setPickupContactPhone,
  pickupNotes,
  setPickupNotes,
  pickupStepComplete,
  setCurrentStep,
}: Step3PickupProps) {
  const locationTypes = [
    "Casa",
    "Apartamento",
    "Trabalho",
    "Clínica",
    "Hotel",
    "Outro",
  ];

  return (
    <>
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-green-600">
          Passo 3 de 6
        </p>

        <h2 className="mt-2 text-3xl font-bold text-blue-950">
          Onde devemos recolher o seu animal?
        </h2>

        <p className="mt-3 text-gray-600">
          Indique a morada e o contacto da pessoa responsável pela entrega do
          animal.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <label className="block md:col-span-2">
          <span className="font-semibold text-blue-950">
            Morada de recolha *
          </span>

          <input
            type="text"
            value={pickupAddress}
            onChange={(event) => setPickupAddress(event.target.value)}
            placeholder="Ex.: Rua Cônego Agostinho, 433"
            className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-950"
          />
        </label>

        <label className="block">
          <span className="font-semibold text-blue-950">
            Código postal *
          </span>

          <input
            type="text"
            value={pickupPostalCode}
            onChange={(event) => setPickupPostalCode(event.target.value)}
            placeholder="Ex.: 4415-643"
            className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-950"
          />
        </label>

        <label className="block">
          <span className="font-semibold text-blue-950">Localidade *</span>

          <input
            type="text"
            value={pickupCity}
            onChange={(event) => setPickupCity(event.target.value)}
            placeholder="Ex.: Lever"
            className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-950"
          />
        </label>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-bold text-blue-950">
          Qual é o tipo de local? *
        </h3>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {locationTypes.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setPickupLocationType(option)}
              className={`rounded-2xl border px-5 py-4 text-left font-medium transition ${
                pickupLocationType === option
                  ? "border-blue-950 bg-blue-50 text-blue-950"
                  : "border-gray-200 text-gray-700 hover:border-blue-300"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-bold text-blue-950">
          Quem estará presente para entregar o animal?
        </h3>

        <p className="mt-2 text-sm text-gray-600">
          Em situações de maior risco, deverá estar presente uma pessoa que
          conheça e consiga controlar o animal.
        </p>

        <div className="mt-5 grid gap-6 md:grid-cols-2">
          <label className="block">
            <span className="font-semibold text-blue-950">
              Nome do contacto *
            </span>

            <input
              type="text"
              value={pickupContactName}
              onChange={(event) => setPickupContactName(event.target.value)}
              placeholder="Ex.: Mauro Quelhas"
              className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-950"
            />
          </label>

          <label className="block">
            <span className="font-semibold text-blue-950">Telefone *</span>

            <input
              type="tel"
              value={pickupContactPhone}
              onChange={(event) => setPickupContactPhone(event.target.value)}
              placeholder="Ex.: 912 345 678"
              className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-950"
            />
          </label>
        </div>
      </div>

      <label className="mt-10 block">
        <span className="font-semibold text-blue-950">
          Instruções adicionais para a recolha
        </span>

        <textarea
          value={pickupNotes}
          onChange={(event) => setPickupNotes(event.target.value)}
          placeholder="Ex.: Ligar quando chegar. O portão de entrada é cinzento."
          rows={4}
          className="mt-2 w-full resize-none rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-950"
        />
      </label>

      <div className="mt-10 flex items-center justify-between">
        <button
          type="button"
          onClick={() => {
            setCurrentStep(2);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="inline-flex items-center gap-2 rounded-2xl border border-gray-300 px-6 py-4 font-semibold text-blue-950 transition hover:bg-gray-50"
        >
          <ChevronLeft className="h-5 w-5" />
          Voltar
        </button>

        <button
            type="button"
            disabled={!pickupStepComplete}
            onClick={() => {
                setCurrentStep(4);
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