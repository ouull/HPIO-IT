import { prisma } from "@/lib/prisma";

export default async function AssetsPage() {
  const assets = await prisma.asset.findMany({
    include: { location: true }
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Data Aset</h1>
          <p className="text-zinc-400 mt-1">Kelola data peralatan dan sparepart IT HPIO.</p>
        </div>
        <button className="px-4 py-2 bg-blue-primary text-black-main rounded-xl font-semibold hover:bg-blue-400 transition-colors">
          + Tambah Aset
        </button>
      </div>

      <div className="bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/5 text-zinc-400">
            <tr>
              <th className="px-6 py-4 font-medium">Nama Aset</th>
              <th className="px-6 py-4 font-medium">Kategori</th>
              <th className="px-6 py-4 font-medium">Kondisi</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {assets.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-zinc-500">
                  Belum ada data aset.
                </td>
              </tr>
            ) : (
              assets.map(asset => (
                <tr key={asset.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4">{asset.name}</td>
                  <td className="px-6 py-4">{asset.category}</td>
                  <td className="px-6 py-4">{asset.condition}</td>
                  <td className="px-6 py-4">{asset.status}</td>
                  <td className="px-6 py-4 text-right">...</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
