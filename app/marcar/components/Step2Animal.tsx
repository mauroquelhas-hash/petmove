import type { Dispatch, SetStateAction } from "react";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";

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

type Step2AnimalProps = {
  animalName: string;
  setAnimalName: Dispatch<SetStateAction<string>>;
  species: string;
  setSpecies: Dispatch<SetStateAction<string>>;
  breed: string;
  setBreed: Dispatch<SetStateAction<string>>;
  weight: string;
  setWeight: Dispatch<SetStateAction<string>>;
  selectedTemperaments: string[];
  setSelectedTemperaments: Dispatch<SetStateAction<string[]>>;
  biteHistory: string;
  setBiteHistory: Dispatch<SetStateAction<string>>;
  animalNotes: string;
  setAnimalNotes: Dispatch<SetStateAction<string>>;
  animalStepComplete: boolean;
  setCurrentStep: Dispatch<SetStateAction<number>>;
};

export default function Step2Animal({
  animalName,
  setAnimalName,
  species,
  setSpecies,
  breed,
  setBreed,
  weight,
  setWeight,
  selectedTemperaments,
  setSelectedTemperaments,
  biteHistory,
  setBiteHistory,
  animalNotes,
  setAnimalNotes,
  animalStepComplete,
  setCurrentStep,
}: Step2AnimalProps) {
  function toggleTemperament(temperament: string) {
    setSelectedTemperaments((current) =>
      current.includes(temperament)
        ? current.filter((item) => item !== temperament)
        : [...current, temperament],
    );
  }

  return (
    <>
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-green-600">
          Passo 2 de 6
        </p>

        <h2 className="mt-2 text-3xl font-bold text-blue-950">
          Fale-nos sobre o seu animal
        </h2>

        <p className="mt-3 text-gray-600">
          Esta informação ajuda-nos a preparar uma recolha segura e adequada.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <label className="block">
          <span className="font-semibold text-blue-950">Nome do animal *</span>

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
            const selected = selectedTemperaments.includes(temperament);

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
                    {selected && <Check className="h-4 w-4 text-white" />}
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
          {["Nunca", "Apenas em situações de medo", "Sim"].map((option) => (
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
  );
}