export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-24 text-center">
      <span className="mb-6 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
        Transporte veterinário moderno
      </span>

      <h1 className="mb-8 max-w-5xl text-7xl font-bold leading-tight text-blue-950">
        Transporte veterinário simples, seguro e sem preocupações.
      </h1>

      <p className="mb-10 max-w-2xl text-xl text-gray-600">
        Recolhemos, transportamos e entregamos o seu animal com segurança,
        conforto e acompanhamento profissional.
      </p>

      <div className="flex gap-4">
        <button className="rounded-2xl bg-green-500 px-8 py-4 text-lg font-semibold text-white transition hover:bg-green-600">
          Marcar Transporte
        </button>

        <button className="rounded-2xl border border-gray-300 px-8 py-4 text-lg font-semibold transition hover:border-gray-400">
          Saber Mais
        </button>
      </div>
    </section>
  );
}