"use client";
import Reveal from "@/app/hooks/useReveal";
import { Space_Grotesk, Syne } from "next/font/google";
import { useState } from "react";
const syne = Syne({
  subsets: ["latin"],
  weight: "500",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "400",
});

const PER_PAGE = 12;
export default function Gallery({ TahunList, fotoMap }) {
  Reveal();
  const [selected, setSelected] = useState("Semua");
  const [preview, setPreview] = useState(null);
  const [page, setPage] = useState(1);
  const allFoto = Object.values(fotoMap).flat();
  const filtered = selected === "Semua" ? allFoto : (fotoMap[selected] ?? []);

  // pagination
  const handleFilter = (tahun) => {
    setSelected(tahun);
    setPage(1);
  };
  const totalPage = Math.ceil(filtered.length / PER_PAGE);
  const paginate = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  return (
    <main
      id="gallery"
      className=" md:min-h-screen bg-[#ff6b6b] py-20 p-8 scroll-mt-10">
      <div className="reveal mb-10">
        <h1
          className={`${syne.className} reveal-scale text-5xl md:text-7xl font-black uppercase text-white mb-2`}>
          Halaman Gallery
        </h1>
        <p className={`text-gray-100 ${spaceGrotesk.className}`}>
          Koleksi Momen Lengkap Kelas
        </p>
      </div>
      <div className=" flex gap-3 flex-wrap mb-10">
        {["Semua", ...TahunList].map((p) => (
          <button
            key={p}
            onClick={() => setSelected(p)}
            className={` border-2 cursor-pointer border-black px-4 py-1 font-black uppercase text-sm transition-all 
            ${
              selected === p
                ? "bg-black text-white shadow-[3px_3px_0px_#f317a6]"
                : "bg-white text-black hover:shadow-[3px_3px_0px_black] "
            }`}>
            {p === "Semua" ? "Semua" : `Tahun ${p}`}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="flex border-4 text-gray-700 border-black p-8 text-center font-black text-xl bg-white shadow-[6px_6px_0px_black]">
          Belum ada foto untuk tahun ini 📭
        </div>
      ) : (
        <div className="reveal-scale columns-2 md:columns-3 gap-4 space-y-4">
          {filtered.map((photo) => (
            <div
              key={photo.public_id}
              onClick={() => setPreview(photo)}
              className=" break-inside-avoid border-2 border-black bg-white shadow-[4px_4px_0px_black] cursor-pointer hover:shadow-[6px_6px_0px_black] hover:-translate-y-1 transition-all duration-200">
              <img
                src={photo.secure_url}
                alt={photo.public_id}
                className="w-full h-48 object-cover"
              />
              <div className="p-2">
                {/* <p
                  className={`${spaceGrotesk.className} text-sm font-bold text-black`}>
                  {photo.public_id.split("/").pop()}
                </p> */}
                <span className="text-xs text-gray-500">
                  Tahun {photo.asset_folder.split("/").pop()}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
      {preview && (
        <div
          className=" fixed inset-0 z-10 bg-black/70 flex justify-center mt-8 items-center p-4"
          onClick={() => setPreview(null)}>
          <div
            className="bg-[#B8A9FA] border-4 border-black shadow-[8px_8px_0px_#88D498] max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}>
            <img
              src={preview.secure_url}
              alt={preview.public_id}
              className="w-full object-cover max-h-[70vh]"
            />
            <div className="p-4 flex justify-between items-center">
              <div>
                {/* <p className={`${syne.className} font-black text-lg uppercase`}>
                  {preview.public_id.split("/").pop()}
                </p> */}
                <span className="text-sm text-gray-900">
                  Tahun {preview.asset_folder.split("/").pop()}
                </span>
              </div>
              <button
                onClick={() => setPreview(null)}
                className="border-2 cursor-pointer border-black px-3 py-1 font-black transition-all duration-300 
                bg-white text-black hover:bg-black hover:text-white hover:-translate-y-1 
                shadow-[3px_3px_0px_pink] hover:shadow-[4px_4px_0px_pink]">
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
