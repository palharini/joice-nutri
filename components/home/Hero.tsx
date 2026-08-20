import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-[#f7f5ef]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:py-24 lg:py-28">
        {/* Conteúdo */}
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Nutrição • Saúde • Bem-estar
          </p>

          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
            Uma relação mais leve e consciente com a alimentação.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600 md:text-xl">
            Informação e acompanhamento nutricional para ajudar você a fazer
            escolhas mais conscientes e construir uma alimentação possível,
            equilibrada e alinhada à sua rotina.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contato"
              className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-7 text-sm font-medium text-white transition hover:bg-zinc-700"
            >
              Agende uma consulta
            </Link>

            <Link
              href="/blog"
              className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 bg-white/70 px-7 text-sm font-medium text-zinc-900 transition hover:bg-white"
            >
              Ler artigos
            </Link>
          </div>

          <div className="mt-10 border-t border-zinc-300/70 pt-6">
            <p className="text-sm leading-6 text-zinc-500">
              Conteúdo baseado em uma abordagem prática para tornar a
              alimentação parte de uma rotina mais equilibrada e sustentável.
            </p>
          </div>
        </div>

        {/* Imagem provisória */}
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-zinc-200 shadow-sm md:aspect-[4/5] lg:aspect-[4/4.6]">
            <Image
              src="/images/joice-hero.jpg"
              alt="Joice Benedett, nutricionista"
              fill
              priority
              className="object-cover object-[30%_center]"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>

          <div
            className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/70 bg-white/90 px-6 py-4 shadow-sm backdrop-blur md:block"
            aria-hidden="true"
          >
            <p className="text-sm font-semibold text-zinc-900">
              Nutrição com equilíbrio
            </p>

            <p className="mt-1 text-xs text-zinc-500">
              Informação • autonomia • rotina
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}