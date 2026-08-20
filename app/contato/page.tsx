import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contato | Joice Benedett Nutricionista",
  description:
    "Entre em contato com Joice Benedett para informações sobre acompanhamento nutricional online.",
};

const whatsappUrl =
  "https://wa.me/5551998962398?text=Olá%20Joice!%20Gostaria%20de%20saber%20mais%20sobre%20o%20acompanhamento%20nutricional.";

export default function ContatoPage() {
  return (
    <main>
      {/* Introdução */}
      <section className="bg-[#f7f5ef] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Contato
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl md:text-6xl">
              Vamos conversar sobre seus objetivos?
            </h1>

            <p className="mt-6 max-w-3xl text-xl leading-9 text-zinc-600">
              Entre em contato para saber mais sobre o acompanhamento
              nutricional e entender como podemos construir uma estratégia
              alinhada à sua rotina e aos seus objetivos.
            </p>
          </div>
        </div>
      </section>

      {/* Contato principal */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <div className="rounded-[2rem] bg-zinc-950 p-8 text-white md:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
              Agendamento
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
              Fale comigo pelo WhatsApp.
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-300">
              Envie uma mensagem para receber informações sobre o
              acompanhamento nutricional e disponibilidade de atendimento.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
            >
              Chamar no WhatsApp
            </a>

            <p className="mt-5 text-sm text-zinc-400">
              +55 51 99896-2398
            </p>
          </div>

          {/* Informações */}
          <div className="flex flex-col justify-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Informações
            </p>

            <div className="mt-6 divide-y divide-zinc-200 border-y border-zinc-200">
              <div className="py-5">
                <p className="text-sm text-zinc-500">
                  Atendimento
                </p>

                <p className="mt-1 font-medium text-zinc-950">
                  Online
                </p>
              </div>

              <div className="py-5">
                <p className="text-sm text-zinc-500">
                  Localização
                </p>

                <p className="mt-1 font-medium text-zinc-950">
                  Taquara, Rio Grande do Sul
                </p>
              </div>

              <div className="py-5">
                <p className="text-sm text-zinc-500">
                  E-mail
                </p>

                <a
                  href="mailto:joicebenedett22@gmail.com"
                  className="mt-1 inline-block font-medium text-zinc-950 transition hover:text-zinc-600"
                >
                  joicebenedett22@gmail.com
                </a>
              </div>

              <div className="py-5">
                <p className="text-sm text-zinc-500">
                  Instagram
                </p>

                <a
                  href="https://www.instagram.com/nutrijoicebenedett/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block font-medium text-zinc-950 transition hover:text-zinc-600"
                >
                  @nutrijoicebenedett
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="bg-[#f7f5ef] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Próximo passo
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
              Começar pode ser mais simples do que parece.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-zinc-200 bg-white p-7">
              <p className="text-sm font-medium text-zinc-500">
                01
              </p>

              <h3 className="mt-4 text-xl font-semibold text-zinc-950">
                Entre em contato
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                Envie uma mensagem pelo WhatsApp para iniciar a conversa.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-7">
              <p className="text-sm font-medium text-zinc-500">
                02
              </p>

              <h3 className="mt-4 text-xl font-semibold text-zinc-950">
                Tire suas dúvidas
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                Receba as informações necessárias sobre o acompanhamento
                nutricional.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-7">
              <p className="text-sm font-medium text-zinc-500">
                03
              </p>

              <h3 className="mt-4 text-xl font-semibold text-zinc-950">
                Agende seu atendimento
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                Escolha o melhor momento para dar início ao seu
                acompanhamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
            Pronta para começar?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
            Entre em contato e saiba mais sobre o acompanhamento nutricional.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-7 text-sm font-medium text-white transition hover:bg-zinc-700"
          >
            Agende pelo WhatsApp
          </a>

          <div className="mt-6">
            <Link
              href="/sobre"
              className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950"
            >
              Conheça mais sobre meu trabalho →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}