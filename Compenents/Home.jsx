// "use client";
import { inter, syne } from "@/app/layout";
// import { useEffect, useState } from "react";
export default function Home() {
  return (
    <main id="home" className="overflow-x-hidden scroll-mt-24">
      <section className="border-4 border-black min-h-screen px-8 py-20 bg-[#FFDC58]">
        <div className="md:flex md:justify-between items-center px-6">
          <div className="order-2 md:order-1 ">
            <p className="font-black uppercase tracking-widest mb-3">
              <span
                className={`${syne.className} border-2 p-2 border-black bg-[#f317a6] shadow-[3px_3px_0px_black]`}>
                t.informatik
              </span>
            </p>
            <h1
              className={`${syne.className} text-4xl md:text-7xl text-black font-black uppercase leading-tight mb-4`}>
              Gallery
              <br />
              Kelas.
            </h1>
            <p
              className={`${inter.className} animate-slideDown font-medium text-black mb-8 max-w-md`}>
              Di setiap tahun, ada cerita yang tersimpan dan momen yang layak
              dikenang. Pilih tahun untuk menjelajahi kembali perjalanan itu.
            </p>
          </div>
          <div className="border-4 overflow-x-hidden md:animate-[bounce_2s_infinite]  order-1 md:order-2 border-black bg-white p-8 shadow-[8px_8px_0px_#FFA552] rounded-2xl text-center rotate-3">
            <p className="text-8xl">📸</p>
            <p
              className={`${syne.className} font-black text-xl mt-2 text-[#080200] uppercase`}>
              Kenangan Kelas
            </p>
          </div>
        </div>
      </section>
      {/* <div className="bg-black h-10 w-full"></div> */}
    </main>
  );
}

// function TypingText({ text, className }) {
//   const [display, setDisplay] = useState("");
//   const [i, setI] = useState(0);

//   useEffect(() => {
//     if (i < text.length) {
//       const timeOut = setTimeout(() => {
//         setDisplay((prev) => prev + text[i]);
//         setI((prev) => prev + 1);
//       }, 40);
//       return () => clearTimeout(timeOut);
//     }
//   }, [i, text]);
//   return (
//     <p className={className}>
//       {display}
//       {i < text.length && <span className="animate-pulse">|</span>}
//     </p>
//   );
// }
