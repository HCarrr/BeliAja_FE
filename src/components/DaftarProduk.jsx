import KartuProduk from './KartuProduk.jsx';

export default function DaftarProduk({ daftar }) {
  return (
    <div className="flex flex-wrap gap-5">
      {daftar.map((produk) => (
        <KartuProduk key={produk.id} produk={produk} />
      ))}
    </div>
  );
}

