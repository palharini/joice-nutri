export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-6 py-10">
        
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          
          <div>
            <p className="font-semibold text-zinc-900">
              Joice Nutri
            </p>

            <p className="mt-1 text-sm text-zinc-500">
              Nutrição para uma vida mais equilibrada.
            </p>
          </div>

          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Joice Nutri.
            Todos os direitos reservados.
          </p>

        </div>

      </div>
    </footer>
  );
}