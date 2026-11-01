export default function HeaderToko({ namaToko = 'beli-aja' }) {
  return (
    <header className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800 shadow-md text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <div>
              <span className="text-base sm:text-lg font-bold tracking-tight block leading-tight text-white">
                {namaToko}
              </span>
              <span className="text-xs text-blue-400 font-medium hidden sm:inline-block">
                Katalog Produk & Inventaris
              </span>
            </div>
          </div>

          <nav className="flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm font-medium">
            <a
              href="#ringkasan"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Ringkasan
            </a>
            <a
              href="#daftar-produk"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Katalog
            </a>
            <a
              href="#form-tambah"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Form Input
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
