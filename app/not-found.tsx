import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center bg-[#f7f5ef] px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          Erro 404
        </p>

        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl md:text-6xl">
          Esta página não foi encontrada.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
          O endereço pode ter mudado ou a página pode não estar mais
          disponível. Você pode voltar para a página inicial ou continuar
          explorando os conteúdos do blog.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-7 text-sm font-medium text-white transition hover:bg-zinc-700"
          >
            Voltar para o início
          </Link>

          <Link
            href="/blog"
            className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 bg-white px-7 text-sm font-medium text-zinc-950 transition hover:bg-zinc-50"
          >
            Ver artigos
          </Link>
        </div>
      </div>
    </main>
  );
}