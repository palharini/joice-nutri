import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Conteúdo principal */}
        <div className="grid gap-12 py-14 md:grid-cols-3 md:py-16">
          {/* Marca */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="inline-flex flex-col"
              aria-label="Joice Benedett - Página inicial"
            >
              <span className="text-xl font-semibold tracking-tight">
                Joice Benedett
              </span>

              <span className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-zinc-400">
                Nutricionista
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-zinc-400">
              Informação e acompanhamento nutricional para uma alimentação
              mais equilibrada, prática e sustentável.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <p className="text-sm font-semibold text-white">
              Navegação
            </p>

            <nav
              className="mt-5 flex flex-col items-start gap-3"
              aria-label="Navegação do rodapé"
            >
              <Link
                href="/"
                className="text-sm text-zinc-400 transition hover:text-white"
              >
                Início
              </Link>

              <Link
                href="/sobre"
                className="text-sm text-zinc-400 transition hover:text-white"
              >
                Sobre
              </Link>

              <Link
                href="/blog"
                className="text-sm text-zinc-400 transition hover:text-white"
              >
                Blog
              </Link>

              <Link
                href="/contato"
                className="text-sm text-zinc-400 transition hover:text-white"
              >
                Contato
              </Link>
            </nav>
          </div>

          {/* CTA */}
          <div>
            <p className="text-sm font-semibold text-white">
              Atendimento
            </p>

            <p className="mt-5 max-w-sm text-sm leading-6 text-zinc-400">
              Quer cuidar da sua alimentação de forma individualizada?
              Conheça o acompanhamento nutricional.
            </p>

            <Link
              href="/contato"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
            >
              Agende uma consulta
            </Link>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="flex flex-col gap-3 border-t border-zinc-800 py-6 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Joice Benedett. Todos os direitos
            reservados.
          </p>

          <p>
            Conteúdo informativo sobre nutrição e alimentação.
          </p>
        </div>
      </div>
    </footer>
  );
}