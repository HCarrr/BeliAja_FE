import { useState } from 'react';

export default function FormTambahProduk({ onTambah }) {
  const [nama, setNama] = useState('');
  const [harga, setHarga] = useState('');
  const [kategori, setKategori] = useState('');
  const [stok, setStok] = useState('');

  const handleSubmit = (e) => {
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

    onTambah({
      nama: nama.trim(),
      harga: parsedHarga,
      kategori: kategori.trim(),
      stok: parsedStok,
    });

    setNama('');
    setHarga('');
    setKategori('');
    setStok('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm mb-6"
    >
      <h2 className="text-lg font-bold text-slate-800 mb-4">Tambah Produk Baru</h2>
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
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md shadow transition duration-150"
        >
          Tambah Produk
        </button>
      </div>
    </form>
  );
}
