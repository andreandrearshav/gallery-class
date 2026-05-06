import { getAllAngkatan, getFotoByAngkatan } from "@/lib/cloudinary";
import Link from "next/link";
import { inter, syne } from "@/app/layout";
import Home from "@/Compenents/Home";
import Gallery from "@/Compenents/Gallery";
import Struktur from "@/app/struktur/AnggotaKelas";
export default async function Page() {
  const folders = await getAllAngkatan();
  const tahunList = folders.map((f) => f.name);

  const fotoEntries = await Promise.all(
    tahunList.map(async (a) => {
      const fotos = await getFotoByAngkatan(a);
      return [a, fotos];
    }),
  );
  const fotoMap = Object.fromEntries(fotoEntries);
  return (
    <>
      <Home />
      <Struktur />
      <Gallery TahunList={tahunList} fotoMap={fotoMap} />
    </>
    // <main className="min-h-screen bg-[#FFFBF5]">
    //   <section className="border-4 border-black px-8 py-20 bg-[#FFDC58]">
    //     <div className="md:flex md:justify-between items-center px-6">
    //       <div className="order-2 md:order-1">
    //         <p className="font-black uppercase tracking-widest mb-3">
    //           <span
    //             className={`${syne.className}border-2 p-2 border-black bg-[#f317a6] shadow-[3px_3px_0px_black]`}>
    //             t.informatik
    //           </span>
    //         </p>
    //         <h1 className="text-5xl md:text-7xl text-black font-black uppercase leading-tight mb-4">
    //           Gallery
    //           <br />
    //           Kelas.
    //         </h1>
    //         <p
    //           className={`${inter.className} font-medium text-gray-700 mb-8 max-w-md`}>
    //           Di setiap tahun, ada cerita yang tersimpan dan momen yang layak
    //           dikenang. Pilih tahun untuk menjelajahi kembali perjalanan itu.
    //         </p>
    //       </div>
    //       <div className="border-4 overflow-x-hidden md:animate-[bounce_2s_infinite]  order-1 md:order-2 border-black bg-white p-8 shadow-[8px_8px_0px_black] text-center rotate-3">
    //         <p className="text-8xl">📸</p>
    //         <p className="font-black text-xl mt-2 uppercase">Kenangan Kelas</p>
    //       </div>
    //     </div>
    //   </section>
    // </main>
  );
}
