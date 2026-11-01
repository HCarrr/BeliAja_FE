import { useState } from 'react';

export default function FormTambahProduk({ onTambah, isSubmitting = false }) {
  const [nama, setNama] = useState('');
  const [harga, setHarga] = useState('');
  const [kategori, setKategori] = useState('');
  const [stok, setStok] = useState('');
  const [pesanSukses, setPesanSukses] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nama.trim() || harga === '' || !kategori.trim() || stok === '') {
      alert('Harap isi semua kolom form terlebih dahulu!');
      return;
    }

    const parsedHarga = parseInt(harga, 10);
    const parsedStok = parseInt(stok, 10);

    if (isNaN(parsedHarga) || isNaN(parsedStok)) {
      alert('Harga dan stok harus berupa angka valid!');
      return;
    }

    await onTambah({
      nama: nama.trim(),
      harga: parsedHarga,
      kategori: kategori.trim(),
      stok: parsedStok,
    });

    setNama('');
    setHarga('');
    setKategori('');
    setStok('');
    setPesanSukses('Produk berhasil dikirim ke API dan ditambahkan ke daftar!');
    setTimeout(() => {
      setPesanSukses('');
    }, 4000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm mb-6"
    >
      <h2 className="text-lg font-bold text-slate-800 mb-4">Tambah Produk Baru (POST API)</h2>

      {pesanSukses && (
        <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm rounded-lg flex items-center gap-2">
          <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>{pesanSukses}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Nama Produk
          </label>
          <input
            type="text"
            placeholder="Contoh: Monitor Gaming 27 Inch"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            disabled={isSubmitting}
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-slate-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Kategori
          </label>
          <input
            type="text"
            placeholder="Contoh: Elektronik / Furnitur"
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
            disabled={isSubmitting}
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-slate-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Harga (Rp)
          </label>
          <input
            type="number"
            min="0"
            placeholder="Contoh: 3500000"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
            disabled={isSubmitting}
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-slate-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Jumlah Stok
          </label>
          <input
            type="number"
            min="0"
            placeholder="Contoh: 10"
            value={stok}
            onChange={(e) => setStok(e.target.value)}
            disabled={isSubmitting}
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-slate-100"
          />
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-2 px-6 rounded-md shadow transition duration-150 inline-flex items-center gap-2 cursor-pointer disabled:cursor-not-allowed"
        >
          {isSubmitting && (
            <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
            </svg>
          )}
          <span>{isSubmitting ? 'Mengirim ke API...' : 'Tambah Produk'}</span>
        </button>
      </div>
    </form>
  );
}
