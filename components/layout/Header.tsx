import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-zinc-900"
        >
          Joice Nutri
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-zinc-700 hover:text-zinc-950"
          >
            Início
          </Link>

          <Link
            href="/blog"
            className="text-sm font-medium text-zinc-700 hover:text-zinc-950"
          >
            Blog
          </Link>

          <Link
            href="/sobre"
            className="text-sm font-medium text-zinc-700 hover:text-zinc-950"
          >
            Sobre
          </Link>

          <Link
            href="/contato"
            className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-700"
          >
            Agende uma consulta
          </Link>
        </nav>

      </div>
    </header>
  );
}