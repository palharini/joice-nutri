import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f5ef]">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Nutrição • Saúde • Bem-estar
          </p>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-zinc-900 md:text-7xl">
            Uma relação mais leve e consciente com a alimentação.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 md:text-xl">
            Informação de qualidade para ajudar você a fazer escolhas mais
            conscientes e construir uma alimentação que faça sentido para a
            sua rotina.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/sobre"
              className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-900 px-7 text-sm font-medium text-white transition hover:bg-zinc-700"
            >
              Conheça meu trabalho
            </Link>

            <Link
              href="/blog"
              className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 bg-white px-7 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50"
            >
              Ler artigos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}