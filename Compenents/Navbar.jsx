"use client";
import { usePathname } from "next/navigation";
import { Space_Grotesk, Syne } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const syne = Syne({
  subsets: ["latin"],
  weight: "800",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "400",
});
export default function Navbar() {
  const pathName = usePathname();
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);
  const menuReff = useRef(null);

  const Nav = [
    { name: "Home", path: "#home" },
    { name: "Anggota", path: "#anggota" },
    { name: "Gallery", path: "#gallery" },
    { name: "About", path: "#about" },
  ];
  useEffect(() => {
    const handleChange = () => {
      setActive(window.location.hash || "#home");
    };

    handleChange();
    window.addEventListener("hashchange", handleChange);
    return () => window.removeEventListener("hashchange", handleChange);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuReff.current && !menuReff.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);
  return (
    <>
      <nav className="md:flex hidden neu-navbar">
        <a href="#home">
          <span
            className={`${syne.className} font-black text-black md:text-xl uppercase tracking-tight`}>
            Gallery Kelas <span className="text-[#FFDC58] ">T.informatika</span>
          </span>
        </a>
        <div className="md:flex hidden items-center">
          {Nav.map((item) => (
            <a key={item.name} href={item.path} className="text-black">
              <div
                className={`neu-nav-item ${active === item.path ? "active shadow-[3px_3px_0px_black]" : ""}`}>
                <span className={`${spaceGrotesk.className}`}>{item.name}</span>
              </div>
            </a>
          ))}
        </div>
      </nav>

      {/* mobile */}
      <nav ref={menuReff} className="md:hidden neu-navbar">
        <a href="#home">
          <span
            className={`${syne.className} font-black text-black md:text-xl uppercase tracking-tight`}>
            Gallery Kelas T.Informatika
          </span>
        </a>
        <div className="flex items-center">
          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "tutup menu" : "buka menu"}
            className="md:hidden transition-transform duration-300 ease-in-out text-black text-4xl cursor-pointer"
            style={{
              display: "inline-block",
              transform: open ? "rotate(90deg)" : "rotate(-90deg)",
            }}>
            <span className="">{open ? "X" : "☰"}</span>
          </button>
          {open && (
            <div className="animate-slideDown shadow-[3px_3px_3px_0_#74B9FF] absolute flex justify-center p-3 items-center flex-col top-16 left-0 w-full bg-white border-t-4 border-black">
              {Nav.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="text-black w-full text-center"
                  onClick={() => setOpen(false)}>
                  <div
                    className={`neu-nav-item ${active === item.path ? "active  shadow-[3px_3px_0px_black]" : ""}`}>
                    <span className={`${spaceGrotesk.className} p-3`}>
                      {item.name}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
