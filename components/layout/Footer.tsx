import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Conteúdo principal */}
        <div className="grid gap-12 py-16 md:grid-cols-[1.2fr_0.7fr_1.1fr] md:gap-16 md:py-20">
          {/* Marca */}
          <div>
            <Link
              href="/"
              className="inline-flex flex-col"
              aria-label="Joice Benedett - Página inicial"
            >
              <span className="text-xl font-semibold tracking-tight text-white">
                Joice Benedett
              </span>

              <span className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-zinc-400">
                Nutricionista
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-zinc-400">
              Informação e acompanhamento nutricional para uma alimentação
              mais equilibrada, prática e sustentável.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <p className="text-sm font-semibold text-white">Navegação</p>

            <nav
              className="mt-6 flex flex-col items-start gap-3.5"
              aria-label="Navegação do rodapé"
            >
              <Link
                href="/"
                className="text-sm text-zinc-400 transition duration-200 hover:text-white"
              >
                Início
              </Link>

              <Link
                href="/sobre"
                className="text-sm text-zinc-400 transition duration-200 hover:text-white"
              >
                Sobre
              </Link>

              <Link
                href="/blog"
                className="text-sm text-zinc-400 transition duration-200 hover:text-white"
              >
                Blog
              </Link>

              <Link
                href="/contato"
                className="text-sm text-zinc-400 transition duration-200 hover:text-white"
              >
                Contato
              </Link>
            </nav>
          </div>

          {/* Atendimento */}
          <div>
            <p className="text-sm font-semibold text-white">Atendimento</p>

            <p className="mt-6 max-w-sm text-sm leading-7 text-zinc-400">
              Quer cuidar da sua alimentação de forma individualizada?
              Conheça o acompanhamento nutricional.
            </p>

            <Link
              href="/contato"
              className="mt-7 inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-zinc-950 transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-200"
            >
              Agende uma consulta
            </Link>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs leading-5 text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Joice Benedett. Todos os direitos
            reservados.
          </p>

          <p>Conteúdo informativo sobre nutrição e alimentação.</p>
        </div>
      </div>
    </footer>
  );
}