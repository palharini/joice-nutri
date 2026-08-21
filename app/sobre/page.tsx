import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça Joice Benedett, nutricionista com atuação em Nutrição Clínica, Esportiva e Saúde da Mulher.",
};

export default function SobrePage() {
  return (
    <main>
      {/* Apresentação */}
      <section className="bg-[#f7f5ef] px-6 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Sobre
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl md:text-6xl">
              Prazer, sou Joice Benedett.
            </h1>

            <p className="mt-6 max-w-3xl text-xl leading-9 text-zinc-600">
              Nutricionista dedicada a ajudar pessoas a construírem uma
              alimentação mais equilibrada, consciente e possível dentro da
              própria rotina.
            </p>
          </div>
        </div>
      </section>

      {/* História */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Minha trajetória
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
              Nutrição como caminho para mais saúde e qualidade de vida.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-zinc-600">
            <p>
              Escolhi a Nutrição porque acredito no impacto que a alimentação
              pode ter na saúde, no bem-estar e na qualidade de vida das
              pessoas.
            </p>

            <p>
              Meu propósito é ajudar cada pessoa a compreender melhor suas
              escolhas alimentares e encontrar estratégias que façam sentido
              para sua realidade, seus objetivos e sua rotina.
            </p>

            <p>
              Acredito que cuidar da alimentação não precisa significar viver
              cercado de regras. O acompanhamento nutricional pode ser um
              processo de aprendizado, autonomia e construção de hábitos que
              possam ser mantidos ao longo da vida.
            </p>
          </div>
        </div>
      </section>

      {/* Abordagem */}
      <section className="bg-[#f7f5ef] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Minha abordagem
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
              Um acompanhamento construído para você.
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-600">
              Cada pessoa possui uma história, uma rotina e necessidades
              diferentes. Por isso, o acompanhamento busca compreender o
              indivíduo como um todo e construir estratégias alimentares
              personalizadas, realistas e sustentáveis.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-zinc-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-medium tracking-wide text-zinc-400">
                01
              </p>

              <h3 className="mt-6 text-xl font-semibold tracking-tight text-zinc-950">
                Individualidade
              </h3>

              <p className="mt-4 leading-7 text-zinc-600">
                O acompanhamento considera sua rotina, preferências,
                necessidades e objetivos.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-medium tracking-wide text-zinc-400">
                02
              </p>

              <h3 className="mt-6 text-xl font-semibold tracking-tight text-zinc-950">
                Equilíbrio
              </h3>

              <p className="mt-4 leading-7 text-zinc-600">
                Alimentação saudável pode fazer parte da vida de forma
                equilibrada, prática e consciente.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-medium tracking-wide text-zinc-400">
                03
              </p>

              <h3 className="mt-6 text-xl font-semibold tracking-tight text-zinc-950">
                Autonomia
              </h3>

              <p className="mt-4 leading-7 text-zinc-600">
                Informação e orientação para que você desenvolva escolhas
                alimentares cada vez mais conscientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formação e atuação */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                Formação
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
                Joice Benedett
              </h2>

              <div className="mt-6 border-l-2 border-zinc-200 pl-5">
                <p className="text-lg font-medium text-zinc-800">
                  Bacharel em Nutrição
                </p>

                <p className="mt-2 text-zinc-500">CRN 18605D</p>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                Áreas de atuação
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
                Cuidado nutricional em diferentes momentos.
              </h2>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-zinc-200 bg-[#f7f5ef] px-5 py-2.5 text-sm font-medium text-zinc-700">
                  Nutrição Clínica
                </span>

                <span className="rounded-full border border-zinc-200 bg-[#f7f5ef] px-5 py-2.5 text-sm font-medium text-zinc-700">
                  Nutrição Esportiva
                </span>

                <span className="rounded-full border border-zinc-200 bg-[#f7f5ef] px-5 py-2.5 text-sm font-medium text-zinc-700">
                  Saúde da Mulher
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-950 px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-12 text-center sm:px-10 md:px-16 md:py-16">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
              Acompanhamento nutricional
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-5xl md:leading-[1.1]">
              Vamos construir uma alimentação que faça sentido para você?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Conheça o acompanhamento nutricional e dê o próximo passo em
              direção aos seus objetivos de saúde e bem-estar.
            </p>

            <Link
              href="/contato"
              className="mt-9 inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-medium text-zinc-950 transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-200"
            >
              Agende uma consulta
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}