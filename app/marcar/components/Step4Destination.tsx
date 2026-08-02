import type { Dispatch, SetStateAction } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Step4DestinationProps = {
  destinationName: string;
  setDestinationName: Dispatch<SetStateAction<string>>;
  destinationAddress: string;
  setDestinationAddress: Dispatch<SetStateAction<string>>;
  destinationPostalCode: string;
  setDestinationPostalCode: Dispatch<SetStateAction<string>>;
  destinationCity: string;
  setDestinationCity: Dispatch<SetStateAction<string>>;
  destinationType: string;
  setDestinationType: Dispatch<SetStateAction<string>>;
  destinationContactName: string;
  setDestinationContactName: Dispatch<SetStateAction<string>>;
  destinationContactPhone: string;
  setDestinationContactPhone: Dispatch<SetStateAction<string>>;
  destinationNotes: string;
  setDestinationNotes: Dispatch<SetStateAction<string>>;
  destinationStepComplete: boolean;
  setCurrentStep: Dispatch<SetStateAction<number>>;
};

const destinationTypes = [
  "Clínica veterinária",
  "Hospital veterinário",
  "Domicílio",
  "Hotel",
  "Outro",
];

export default function Step4Destination({
  destinationName,
  setDestinationName,
  destinationAddress,
  setDestinationAddress,
  destinationPostalCode,
  setDestinationPostalCode,
  destinationCity,
  setDestinationCity,
  destinationType,
  setDestinationType,
  destinationContactName,
  setDestinationContactName,
  destinationContactPhone,
  setDestinationContactPhone,
  destinationNotes,
  setDestinationNotes,
  destinationStepComplete,
  setCurrentStep,
}: Step4DestinationProps) {
  return (
    <>
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-green-600">
          Passo 4 de 6
        </p>

        <h2 className="mt-2 text-3xl font-bold text-blue-950">
          Qual é o destino do transporte?
        </h2>

        <p className="mt-3 text-gray-600">
          Indique a clínica veterinária ou outro local para onde devemos levar
          o seu animal.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <label className="block md:col-span-2">
          <span className="font-semibold text-blue-950">
            Nome do destino *
          </span>

          <input
            type="text"
            value={destinationName}
            onChange={(event) => setDestinationName(event.target.value)}
            placeholder="Ex.: Clínica Veterinária Central"
            className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-950"
          />
        </label>

        <label className="block md:col-span-2">
          <span className="font-semibold text-blue-950">Morada *</span>

          <input
            type="text"
            value={destinationAddress}
            onChange={(event) => setDestinationAddress(event.target.value)}
            placeholder="Ex.: Avenida Central, 100"
            className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-950"
          />
        </label>

        <label className="block">
          <span className="font-semibold text-blue-950">
            Código postal *
          </span>

          <input
            type="text"
            value={destinationPostalCode}
            onChange={(event) => setDestinationPostalCode(event.target.value)}
            placeholder="Ex.: 4000-123"
            className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-950"
          />
        </label>

        <label className="block">
          <span className="font-semibold text-blue-950">Localidade *</span>

          <input
            type="text"
            value={destinationCity}
            onChange={(event) => setDestinationCity(event.target.value)}
            placeholder="Ex.: Porto"
            className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-950"
          />
        </label>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-bold text-blue-950">
          Tipo de destino *
        </h3>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {destinationTypes.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setDestinationType(option)}
              className={`rounded-2xl border px-5 py-4 text-left font-medium transition ${
                destinationType === option
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
          Contacto no destino
        </h3>

        <p className="mt-2 text-sm text-gray-600">
          Preencha caso exista uma pessoa específica que irá receber o animal.
        </p>

        <div className="mt-5 grid gap-6 md:grid-cols-2">
          <label className="block">
            <span className="font-semibold text-blue-950">
              Nome do contacto
            </span>

            <input
              type="text"
              value={destinationContactName}
              onChange={(event) =>
                setDestinationContactName(event.target.value)
              }
              placeholder="Ex.: Nome da pessoa responsável"
              className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-950"
            />
          </label>

          <label className="block">
            <span className="font-semibold text-blue-950">Telefone</span>

            <input
              type="tel"
              value={destinationContactPhone}
              onChange={(event) =>
                setDestinationContactPhone(event.target.value)
              }
              placeholder="Ex.: 912 345 678"
              className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-950"
            />
          </label>
        </div>
      </div>

      <label className="mt-10 block">
        <span className="font-semibold text-blue-950">
          Instruções adicionais para o destino
        </span>

        <textarea
          value={destinationNotes}
          onChange={(event) => setDestinationNotes(event.target.value)}
          placeholder="Ex.: A entrada da clínica fica na lateral do edifício."
          rows={4}
          className="mt-2 w-full resize-none rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-950"
        />
      </label>

      <div className="mt-10 flex items-center justify-between">
        <button
          type="button"
          onClick={() => {
            setCurrentStep(3);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="inline-flex items-center gap-2 rounded-2xl border border-gray-300 px-6 py-4 font-semibold text-blue-950 transition hover:bg-gray-50"
        >
          <ChevronLeft className="h-5 w-5" />
          Voltar
        </button>

        <button
          type="button"
          disabled={!destinationStepComplete}
          onClick={() => {
            setCurrentStep(5);
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