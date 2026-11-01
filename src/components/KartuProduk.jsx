import { useState } from 'react';

export default function KartuProduk({ produk }) {
  const { nama, harga, kategori, stok, thumbnail } = produk;
  const isTersedia = stok > 0;
  const [imgError, setImgError] = useState(false);

  const showPlaceholder = !thumbnail || imgError;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 hover:shadow-lg transition-all duration-200 flex flex-col justify-between">
      <div>
        <div className="w-full h-44 bg-slate-100 rounded-lg overflow-hidden mb-3.5 flex items-center justify-center border border-slate-200/60">
          {showPlaceholder ? (
            <div className="flex flex-col items-center justify-center text-slate-400 gap-1.5 select-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-slate-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                No Image
              </span>
            </div>
          ) : (
            <img
              src={thumbnail}
              alt={nama}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              onError={() => setImgError(true)}
            />
          )}
        </div>

        <div className="flex justify-between items-start gap-2 mb-2">
          <h3 className="font-bold text-slate-800 text-base sm:text-lg leading-tight line-clamp-2">
            {nama}
          </h3>
          <span className="inline-block bg-slate-100 text-slate-600 text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap capitalize">
            {kategori}
          </span>
        </div>
      </div>

      <div>
        <p className="text-blue-600 font-bold text-xl my-3">
          Rp {harga.toLocaleString('id-ID')}
        </p>
        <div className="border-t border-slate-100 pt-3 flex justify-between items-center text-sm">
          <span className="text-slate-500">Ketersediaan:</span>
          <span className={`font-semibold ${isTersedia ? 'text-emerald-600' : 'text-red-500'}`}>
            {isTersedia ? `Stok: ${stok}` : 'Stok Habis'}
          </span>
        </div>
      </div>
    </div>
  );
}
