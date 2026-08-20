"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Marca */}
          <Link
            href="/"
            onClick={closeMenu}
            className="group flex flex-col"
            aria-label="Joice Benedett - Página inicial"
          >
            <span className="text-lg font-semibold tracking-tight text-zinc-950 transition group-hover:text-zinc-600">
              Joice Benedett
            </span>

            <span className="mt-0.5 text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
              Nutricionista
            </span>
          </Link>

          {/* Navegação desktop */}
          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Navegação principal"
          >
            <Link
              href="/"
              className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950"
            >
              Início
            </Link>

            <Link
              href="/sobre"
              className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950"
            >
              Sobre
            </Link>

            <Link
              href="/blog"
              className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950"
            >
              Blog
            </Link>

            <Link
              href="/contato"
              className="rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700"
            >
              Agende uma consulta
            </Link>
          </nav>

          {/* Botão mobile */}
          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-900 transition hover:bg-zinc-50 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Navegação mobile */}
        {menuOpen && (
          <nav
            id="mobile-navigation"
            className="border-t border-zinc-200 py-6 md:hidden"
            aria-label="Navegação mobile"
          >
            <div className="flex flex-col">
              <Link
                href="/"
                onClick={closeMenu}
                className="border-b border-zinc-100 py-4 text-base font-medium text-zinc-700 transition hover:text-zinc-950"
              >
                Início
              </Link>

              <Link
                href="/sobre"
                onClick={closeMenu}
                className="border-b border-zinc-100 py-4 text-base font-medium text-zinc-700 transition hover:text-zinc-950"
              >
                Sobre
              </Link>

              <Link
                href="/blog"
                onClick={closeMenu}
                className="border-b border-zinc-100 py-4 text-base font-medium text-zinc-700 transition hover:text-zinc-950"
              >
                Blog
              </Link>

              <Link
                href="/contato"
                onClick={closeMenu}
                className="mt-6 flex items-center justify-center rounded-full bg-zinc-950 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-zinc-700"
              >
                Agende uma consulta
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}