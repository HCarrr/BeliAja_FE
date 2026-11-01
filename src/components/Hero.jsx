export default function Hero() {
  return (
    <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 mb-8 shadow-sm">
      <div className="max-w-2xl">
        <span className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-3 border border-blue-100">
          Selamat Datang di beli-aja
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-3">
          Kelola & Temukan Produk Pilihan dengan Mudah
        </h1>
        <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
          Platform praktis untuk memantau katalog belanja, ketersediaan stok, dan pencatatan produk secara real-time.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#daftar-produk"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg shadow-sm transition-colors text-sm"
          >
            Lihat Produk
          </a>
          <a
            href="#form-tambah"
            className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium px-5 py-2 rounded-lg border border-slate-300 transition-colors text-sm"
          >
            Tambah Produk
          </a>
        </div>
      </div>
    </section>
  );
}

