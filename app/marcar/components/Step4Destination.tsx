import type { Dispatch, SetStateAction } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Step4DestinationProps = {
  setCurrentStep: Dispatch<SetStateAction<number>>;
};

export default function Step4Destination({
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

      <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center text-gray-600">
        Passo 4 em desenvolvimento
      </div>

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
          onClick={() => {
            setCurrentStep(5);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="inline-flex items-center gap-2 rounded-2xl bg-blue-950 px-8 py-4 font-semibold text-white transition hover:bg-blue-900"
        >
          Continuar
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </>
  );
}