import Link from "next/link";

export default function NutritionCare() {
  return (
    <section className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 overflow-hidden rounded-[2rem] bg-zinc-950 px-8 py-12 text-white md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:px-14 md:py-16 lg:px-16">
          
          {/* Introdução */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
              Acompanhamento nutricional
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              Alimentação que faça sentido para a sua vida.
            </h2>
          </div>

          {/* Conteúdo */}
          <div className="flex flex-col justify-center">
            <p className="text-lg leading-8 text-zinc-300">
              O acompanhamento nutricional é um espaço para compreender sua
              rotina, seus hábitos e seus objetivos, construindo estratégias
              alimentares possíveis de aplicar no dia a dia.
            </p>

            <p className="mt-5 text-base leading-7 text-zinc-400">
              Mais do que seguir regras prontas, a proposta é desenvolver
              escolhas conscientes e uma relação mais equilibrada com a
              alimentação.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contato"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
              >
                Agende uma consulta
              </Link>

              <Link
                href="/sobre"
                className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-700 px-7 text-sm font-medium text-white transition hover:border-zinc-500 hover:bg-zinc-900"
              >
                Conheça meu trabalho
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}