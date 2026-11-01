import { useState, useEffect } from 'react';
import HeaderToko from './components/HeaderToko.jsx';
import Hero from './components/Hero.jsx';
import RingkasanStok from './components/RingkasanStok.jsx';
import FormTambahProduk from './components/FormTambahProduk.jsx';
import DaftarProduk from './components/DaftarProduk.jsx';

const API_URL = 'https://dummyjson.com/products?';

function App() {
  const [produk, setProduk] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchProdukData = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Gagal mengambil data dari server (HTTP ${response.status})`);
    }
    const data = await response.json();
    return data.products.map((item) => ({
      id: item.id,
      nama: item.title,
      harga: Math.round(item.price * 15000),
      kategori: item.category,
      stok: item.stock,
      thumbnail: item.thumbnail,
    }));
  };

  useEffect(() => {
    let aktif = true;

    fetchProdukData()
      .then((hasil) => {
        if (aktif) {
          setProduk(hasil);
          setError(null);
        }
      })
      .catch((err) => {
        if (aktif) {
          setError(err.message || 'Terjadi kesalahan jaringan saat memuat produk.');
        }
      })
      .finally(() => {
        if (aktif) {
          setLoading(false);
        }
      });

    return () => {
      aktif = false;
    };
  }, []);

  const muatUlangData = async () => {
    setLoading(true);
    setError(null);

    try {
      const hasil = await fetchProdukData();
      setProduk(hasil);
    } catch (err) {
      setError(err.message || 'Terjadi kesalahan jaringan saat memuat produk.');
    } finally {
      setLoading(false);
    }
  };

  const tambahProduk = async (produkBaru) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: produkBaru.nama,
          price: Math.round(produkBaru.harga / 15000),
          category: produkBaru.kategori,
          stock: produkBaru.stok,
        }),
      });

      const data = await response.json();

      const itemBaru = {
        id: data.id || Date.now(),
        nama: data.title || produkBaru.nama,
        harga: produkBaru.harga,
        kategori: data.category || produkBaru.kategori,
        stok: Number(data.stock) || produkBaru.stok,
        thumbnail: '',
      };

      setProduk((prevProduk) => [itemBaru, ...prevProduk]);
    } catch {
      const itemBaru = {
        id: Date.now(),
        ...produkBaru,
        thumbnail: '',
      };
      setProduk((prevProduk) => [itemBaru, ...prevProduk]);
    } finally {
      setIsSubmitting(false);
    }
  };

  const totalJenisProduk = produk.length;
  const totalBarang = produk.reduce((total, item) => total + (item.stok || 0), 0);

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
            <FormTambahProduk
              onTambah={tambahProduk}
              isSubmitting={isSubmitting}
            />
          </section>

          <section id="daftar-produk" className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-slate-800">Daftar Produk</h2>
              {!loading && !error && (
                <button
                  onClick={muatUlangData}
                  className="text-xs sm:text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span>Segarkan Data</span>
                </button>
              )}
            </div>

            {loading && (
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-3 p-6 bg-white border border-slate-200 rounded-xl text-blue-600 font-medium shadow-sm">
                  <svg className="animate-spin h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                  </svg>
                  <span>Sedang mengambil data produk dari API...</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {[1, 2, 3, 4, 5, 6].map((key) => (
                    <div
                      key={key}
                      className="bg-white border border-slate-200 rounded-xl p-5 animate-pulse"
                    >
                      <div className="w-full h-44 bg-slate-200 rounded-lg mb-4"></div>
                      <div className="h-5 bg-slate-200 rounded w-3/4 mb-3"></div>
                      <div className="h-6 bg-slate-200 rounded w-1/2 mb-4"></div>
                      <div className="h-4 bg-slate-200 rounded w-2/3"></div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {!loading && error && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center shadow-sm">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-red-800 mb-1">Gagal Memuat Produk</h3>
                <p className="text-sm text-red-600 mb-5 max-w-md mx-auto">{error}</p>
                <button
                  onClick={muatUlangData}
                  className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span>Coba Lagi</span>
                </button>
              </div>
            )}

            {!loading && !error && produk.length === 0 && (
              <div className="bg-amber-50 text-amber-700 p-6 rounded-lg text-center font-medium border border-amber-200">
                Belum ada data produk yang tersedia.
              </div>
            )}

            {!loading && !error && produk.length > 0 && (
              <DaftarProduk daftar={produk} />
            )}
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
