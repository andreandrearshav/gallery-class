import { getFotoByAngkatan } from "@/lib/cloudinary";
import Image from "next/image";
import Link from "next/link";

export default async function GalleryPage({ params }) {
  const resolveParams = await params;
  const angkatan = resolveParams.angkatan;
  const fotos = await getFotoByAngkatan(angkatan);
  console.log("Fotos:", fotos);
  return (
    <main className="min-h-screen bg-[#FFFBF5] p-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/">
          <div className="border-4 text-gray-400 rounded border-black px-4 py-2 bg-white shadow-[4px_4px_0px_black] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150 font-black">
            ← Back
          </div>
        </Link>
        <div className="border-4 text-gray-600 border-black px-6 py-2 bg-[#FFDC58] shadow-[4px_4px_0px_black] font-black text-2xl uppercase">
          Angkatan {angkatan}
        </div>
      </div>

      {/* Grid Foto */}
      {fotos.length === 0 ? (
        <div className="border-4 text-gray-700  border-black p-8 text-center font-black text-xl bg-white shadow-[6px_6px_0px_black]">
          Belum ada foto 📭
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {fotos.map((foto) => (
            <div
              key={foto.public_id}
              className="border-4 border-black rounded shadow-[6px_6px_0px_black] overflow-hidden bg-white hover:shadow-none hover:translate-x-[1.5] hover:translate-y-[1.5] transition-all duration-150">
              <Image
                src={foto.secure_url}
                alt={foto.public_id}
                width={400}
                height={300}
                className="w-full h-56 object-cover"
              />
              <div className="p-3 border-t-4 border-black">
                <p className="text-xs font-bold uppercase truncate text-gray-500">
                  {foto.public_id.split("/").pop()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
