import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <Link href="/" className="text-2xl font-bold text-blue-900">
          PetMove
        </Link>

        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-900"
          >
            Início
          </Link>

          <Link
            href="/servicos"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-900"
          >
            Serviços
          </Link>

          <Link
            href="/como-funciona"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-900"
          >
            Como funciona
          </Link>

          <Link
            href="/contacto"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-900"
          >
            Contacto
          </Link>

          <Link
            href="/login"
            className="rounded-xl bg-blue-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-800"
          >
            Entrar
          </Link>
        </div>
      </div>
    </nav>
  );
}