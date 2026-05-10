"use client";
import struktur from "@/data/struktur.json";
import Reveal from "@/app/hooks/useReveal";
export default function Struktur() {
  Reveal();
  return (
    <main id="anggota" className="bg-white min-h-screen scroll-mt-10 p-8 py-20">
      <section className="reveal mb-10">
        <h1 className="reveal-scale text-5xl flex gap-4 mb-8 items-center md:text-7xl font-black uppercase text-black">
          Penghuni
          <span className="border-4 flex w-full rounded-lg border-black"></span>
        </h1>
        <p className="bg-black text-[#FFE03B] text-xs font-black uppercase tracking-widest inline-block px-3 py-1 mb-4">
          Angkatan {struktur.Angkatan}
        </p>
      </section>
      <section className="reveal mb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {struktur.Organisasi.map((a) => (
            <div
              key={a.nama}
              className="reveal-scale bg-white border-[3px] border-black shadow-[5px_5px_0_#111] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_#111] transition-all cursor-pointer overflow-hidden ">
              <img
                src={a.foto}
                className="w-full h-40 object-cover border-b-[3px] border-black"
              />
              <div className="p-3">
                <span className="bg-[#FFE03B] text-black border-2 border-black text-[10px] font-black uppercase px-2 py-0.5 inline-block mb-1">
                  {a.jabatan}
                </span>
                <p className="text-sm font-black text-black">{a.nama}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="reveal">
        <div className="reveal-scale grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {struktur.anggota.map((a) => (
            <div
              key={a.nim}
              className="bg-white border-[3px] border-black shadow-[4px_4px_0_#111] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#111] transition-all cursor-pointer text-center p-3">
              <img
                src={a.foto}
                alt={a.nama}
                className="w-16 h-16 rounded-full border-[3px] border-black object-cover mx-auto mb-2"
              />
              <p className="text-xs font-black text-black mb-1">{a.nama}</p>
              {/* <span className="text-[11px] font-bold text-gray-500 font-mono">
                {a.nim}
              </span> */}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
