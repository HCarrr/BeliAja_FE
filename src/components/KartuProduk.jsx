export default function KartuProduk({ produk }) {
  const { nama, harga, kategori, stok } = produk;
  const isTersedia = stok > 0;

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-5 hover:shadow-md transition-shadow min-w-[250px] flex-1">
      <div className="flex justify-between items-start gap-2 mb-2">
        <h3 className="font-bold text-slate-800 text-lg">{nama}</h3>
        <span className="inline-block bg-slate-100 text-slate-600 text-xs font-semibold px-2.5 py-1 rounded-full">
          {kategori}
        </span>
      </div>
      <p className="text-blue-600 font-bold text-xl mb-4">
        Rp {harga.toLocaleString('id-ID')}
      </p>
      <div className="border-t border-slate-100 pt-3 flex justify-between items-center text-sm">
        <span className="text-slate-500">Ketersediaan:</span>
        <span className={`font-semibold ${isTersedia ? 'text-emerald-600' : 'text-red-500'}`}>
          {isTersedia ? `Stok: ${stok}` : 'Stok Habis'}
        </span>
      </div>
    </div>
  );
}

