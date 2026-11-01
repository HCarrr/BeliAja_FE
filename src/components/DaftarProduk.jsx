import KartuProduk from './KartuProduk.jsx';

export default function DaftarProduk({ daftar }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {daftar.map((produk) => (
        <KartuProduk key={produk.id} produk={produk} />
      ))}
    </div>
  );
}
