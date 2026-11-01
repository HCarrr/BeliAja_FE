import { useState } from 'react';
import HeaderToko from './components/HeaderToko.jsx';
import Hero from './components/Hero.jsx';
import RingkasanStok from './components/RingkasanStok.jsx';
import FormTambahProduk from './components/FormTambahProduk.jsx';
import DaftarProduk from './components/DaftarProduk.jsx';

const dataAwalProduk = [
  {
    id: 1,
    nama: 'Laptop ASUS ROG',
    harga: 25000000,
    kategori: 'Elektronik',
    stok: 5,
  },
  {
    id: 2,
    nama: 'Meja Kerja Minimalis',
    harga: 1200000,
    kategori: 'Furnitur',
    stok: 12,
  },
  {
    id: 3,
    nama: 'Kursi Ergonomis',
    harga: 850000,
    kategori: 'Furnitur',
    stok: 0,
  },
];

function App() {
  const [produk, setProduk] = useState(dataAwalProduk);

  const tambahProduk = (produkBaru) => {
    setProduk([...produk, { id: Date.now(), ...produkBaru }]);
  };

  const totalJenisProduk = produk.length;
  const totalBarang = produk.reduce((total, item) => total + item.stok, 0);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col">
      <HeaderToko namaToko="beli-aja" />

      <div className="max-w-5xl w-full mx-auto px-4 py-8 flex-1">
        <main>
          <Hero />

          <section id="ringkasan">
            <RingkasanStok
              totalJenisProduk={totalJenisProduk}
              totalBarang={totalBarang}
            />
          </section>

          <section id="form-tambah">
            <FormTambahProduk onTambah={tambahProduk} />
          </section>

          <section id="daftar-produk" className="mt-8">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Daftar Produk</h2>
            {produk.length === 0 ? (
              <div className="bg-red-50 text-red-600 p-6 rounded-lg text-center font-medium border border-red-200">
                Belum ada data Produk
              </div>
            ) : (
              <DaftarProduk daftar={produk} />
            )}
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
