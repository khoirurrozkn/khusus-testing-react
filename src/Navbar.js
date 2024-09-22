import React, { useState } from 'react';
import menu from './menu.png';
import close from './close.png';
import logoEdit from './logo-edit.jpg'; // tambahkan logo yang sesuai
import register from './register.png'; // tambahkan icon register yang sesuai

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <div className="backdrop-blur fixed top-[0] left-[0] right-[0] px-[5%] xl:px-[25px] py-[20px] md:py-[25px] xl:py-[20px] flex justify-between items-center z-30">
      <div className="flex items-center md:text-[25px] xl:text-[20px]">
        <img src={logoEdit} alt="logo" className="aspect-square w-[50px] rounded-full" />
        <span className="ms-2 font-bold">ARGEN PSIKO</span>
      </div>

      <div
        id="div-nav"
        className={`fixed px-[5%] xl:px-[0px] xl:static z-[30] py-[120px] xl:py-[0px] bg-[#060D13] xl:bg-transparent left-0 ${
          navOpen ? 'top-0' : 'top-[-110vh]'
        } w-[100vw] min-h-[100vh] xl:min-h-[0] xl:w-auto transition-all duration-500 ease-in-out`}
      >
        <a href="#utama" onClick={closeNav} className="text-[18px] mt-[15px] block xl:inline xl:ms-4">
          Utama
        </a>
        <a href="#keunggulan" onClick={closeNav} className="text-[18px] mt-[15px] block xl:inline xl:ms-4">
          Keunggulan
        </a>
        <a href="#ulasan" onClick={closeNav} className="text-[18px] mt-[15px] block xl:inline xl:ms-4">
          Ulasan
        </a>
        <a href="#kelas" onClick={closeNav} className="text-[18px] mt-[15px] block xl:inline xl:ms-4">
          Kelas
        </a>
        <a href="#instruktur" onClick={closeNav} className="text-[18px] mt-[15px] block xl:inline xl:ms-4">
          Instruktur
        </a>
        <a href="#kontak" onClick={closeNav} className="text-[18px] mt-[15px] block xl:inline xl:ms-4">
          Kontak
        </a>
        <a href="/galeri" onClick={closeNav} className="text-[18px] mt-[15px] block xl:inline xl:ms-4">
          Galeri
        </a>
        <a href="/pertanyaan" onClick={closeNav} className="text-[18px] mt-[15px] block xl:inline xl:ms-4">
          Pertanyaan
        </a>
        <a
          href="https://web.whatsapp.com/send?phone=6285646686545&text=Hallooo%20dengan%20[nama%20kursus]"
          onClick={closeNav}
          className="xl:hidden w-[200px] mt-[30px] flex items-center justify-center py-[7px] rounded-[15px] shadow-lg bg-[#FFFF00] text-black"
        >
          Pendaftaran
          <img className="inline w-[25px] ms-2" src={register} alt="daftar" />
        </a>
      </div>

      <div>
        <img
          id="btn-nav"
          className="relative z-[40] xl:hidden w-[25px] cursor-pointer"
          src={navOpen ? close : menu}
          alt="menu"
          onClick={toggleNav}
        />
        <a
          href="https://web.whatsapp.com/send?phone=6285646686545&text=Hallooo%20dengan%20[nama%20kursus]"
          className="hidden xl:flex w-[200px] flex items-center justify-center py-[7px] rounded-[15px] shadow-lg bg-[#FFFF00] text-black"
        >
          Pendaftaran
          <img className="inline w-[25px] ms-2" src={register} alt="daftar" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
