export default function RingkasanStok({ totalJenisProduk, totalBarang }) {
  return (
    <div className="bg-slate-100 rounded-lg p-4 sm:p-5 mb-6 flex flex-col sm:flex-row justify-between items-center gap-4 border border-slate-200">
      <div className="text-center sm:text-left">
        <span className="text-slate-600 text-sm font-medium">Total Jenis Produk</span>
        <p className="text-2xl font-bold text-slate-800">{totalJenisProduk} <span className="text-sm font-normal text-slate-500">jenis</span></p>
      </div>
      <div className="text-center sm:text-right">
        <span className="text-slate-600 text-sm font-medium">Total Stok Barang</span>
        <p className="text-2xl font-bold text-slate-800">{totalBarang} <span className="text-sm font-normal text-slate-500">unit</span></p>
      </div>
    </div>
  );
}

