import React from 'react'

import register from './register.png'
import logoEdit from './logo-edit.jpg'
import tanya from './tanya.png'
import strategic from './strategic.png'
import person from './person.png'
import ask from './ask.png'
import galery from './galery.png'
import fotoLulusan1 from './fotoLulusan1.png'
import fotoLulusan2 from './fotoLulusan2.png'
import offlineCourse from './offlineCourse.png'
import onlineCourse from './onlineCourse.png'
import ig from './ig.png'
import galery2 from './galery2.png'
import tanya2  from './tanya2.png'
import wa from './wa.png'
import pdu_akpol_xl from './pdu_akpol_xl.png'
import pdpmAkpol from './pdpm-akpol.png'
import Navbar from './Navbar'


const Home = () => {
    
  return (
    <>
    <Navbar />

        <div id="utama" class="hero pb-[100px] md:pb-[120px] xl:pb-[180px] bg-gradient-to-b from-[#ff0000] to-[#b40707] px-[5%] pt-[120px] md:pt-[180px] xl:pt-[160px] overflow-hidden">
            <h1 class="relative z-10 text-[40px] md:text-[60px] xl:text-[90px] font-bold xl:text-center leading-[110%] xl:mx-[3vw]">Raih <span class="text-[40px] md:text-[60px] xl:text-[90px] font-bold text-[#ffff00]">Kesempatan Kerja</span> di Instansi Pemerintah</h1>
            <p class="relative z-20 xl:text-center xl:mx-[17%] mt-[10px] md:mt-[25px] xl:mt-[3vh]">
                Siap menaklukkan tes psikologi untuk instansi pemerintah lainnya? Di bimbel kami, 95% siswa sudah berhasil lolos! Kami di sini untuk mendukungmu meraih karier impian di instansi pemerintah. Ayo gabung dan wujudkan cita-citamu!            </p>
                <a href="https://web.whatsapp.com/send?phone=6285646686545&text=Hallooo%20dengan%20[nama%20kursus]" class="xl:hidden w-[200px] md:w-[250px] flex items-center justify-center mt-[30px] py-[8px] xl:py-[11px] rounded-[15px] shadow-lg bg-[#FFFF00] text-black">
                    Pendaftaran
                    <img class="inline w-[25px] ms-2" src={register} alt="daftar"/>
                </a>
            <div class="md:mx-[10%] xl:mx-[16%] relative mt-[100px] md:mt-[140px] xl:mt-[20vh] h-[200px] md:h-[250px] xl:h-[43vh]">
                <div class="bubble-1 absolute w-[150%] h-[150%] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                <div class="relative flex justify-center z-10 w-full h-full rounded-b-[25px] rounded-t-[300px] shadow-lg bg-gradient-to-b from-transparent to-[#710B08]">
                    <img class="h-[140%] bottom-0 absolute xl:left-0" src={pdu_akpol_xl} alt="akpol"/>
                    <img class="hidden xl:block h-[140%] bottom-0 absolute right-0" src={pdpmAkpol} alt="akpol"/>
                </div>
            </div>
        </div>

        <div class="bg-[#060D13] flex justify-evenly text-center py-[15px] md:py-[20px] overflow-hidden">
            <div class="text-[15px] md:text-[20px] xl:text-[25px] font-bold flex items-center">
                <img src={logoEdit} alt="logo" class="border rounded-full w-[30px] md:w-[50px] aspect-square me-[10px]"/>
                ARGEN PSIKO
            </div>
            <div class="text-[15px] md:text-[20px] xl:text-[25px] font-bold flex items-center">
                <img src={logoEdit} alt="logo" class="border rounded-full w-[30px] md:w-[50px] aspect-square me-[10px]"/>
                ARGEN PSIKO
            </div>
            <div class="hidden md:flex text-[15px] md:text-[20px] xl:text-[25px] font-bold flex items-center">
                <img src={logoEdit} alt="logo" class="border rounded-full w-[50px] aspect-square me-[10px]"/>
                ARGEN PSIKO
            </div>
            <div class="hidden md:flex text-[15px] md:text-[20px] xl:text-[25px] font-bold flex items-center">
                <img src={logoEdit} alt="logo" class="border rounded-full w-[50px] aspect-square me-[10px]"/>
                ARGEN PSIKO
            </div>
        </div>

        <div id="keunggulan" class="pb-[100px] px-[5%] xl:px-[0px] md:pb-[120px] pt-[80px] md:pt-[120px] xl:pt-[160px] bg-gradient-to-b from-[#ff0000] to-[#b40707] overflow-hidden">
            <div class="flex flex-wrap justify-evenly items-start">
                <div class="xl:w-[40%] mb-[20px] md:mb-[40px]">
                    <h1 class="text-[40px] md:text-[60px] xl:text-[70px] font-bold text-center leading-[120%] text-start">Kenapa <span class="text-[40px] md:text-[60px] xl:text-[70px] font-bold text-[#00ff00]">Pilih Kami</span></h1>
                    <p class="xl:w-[80%] mt-[10px] md:mt-[25px]">Banyak calon pekerja instansi pemerintah yang kesulitan saat menghadapi tes psikologi. 
                        Sejak 2021, bimbel kami hadir untuk memberikan dukungan dan bimbingan yang tepat! Dengan tingkat kelulusan 
                        90% dalam membantu siswa lolos tes.
                    </p>
                    <a href='/pertanyaan' class="w-[180px] md:w-[230px] flex items-center justify-center mt-[30px] py-[8px] xl:py-[11px] rounded-[15px] shadow-lg bg-[#02FF00] text-black">
                        Pertanyaan
                        <img class="inline w-[23px] ms-2" src={tanya} alt="Pertanyaan"/>
                    </a>
                </div>
                <div class="hidden xl:block xl:w-[40%] h-[400px] relative mb-[60px]">
                    <div class="bubble-2 absolute w-[150%] h-[150%] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    <p class="text-center font-bold text-[180px] scale-y-[1.5] text-shadow">95%</p>
                    <p class="text-center font-bold mt-[10px] relative z-20">Lulus masuk instansi pemerintah</p>
                </div>
                <div class="xl:w-[28%] p-5 bg-gradient-to-b from-transparent rounded-b-[15px] to-[#9F0C07] shadow-lg">
                    <img class="w-[40px] md:w-[60px]" src={strategic} alt="Strategic"></img>
                    <h2 class="text-[24px] mt-[10px] md:mt-[0px] md:text-[35px] font-bold">Kualitas terjamin</h2>
                    <p class="mt-[10px]">Materi up-to-date, sehingga kamu bisa belajar dengan cara yang paling efektif.</p>
                </div>
                <div class="mt-[20px] xl:mt-[0] xl:w-[28%] p-5 bg-gradient-to-b from-transparent rounded-b-[15px] to-[#9F0C07] shadow-lg">
                    <img class="w-[40px] md:w-[60px]" src={person} alt="Person"></img>
                    <h2 class="text-[24px] mt-[10px] md:mt-[0px] md:text-[35px] font-bold">Pengalaman terbukti</h2>
                    <p class="mt-[10px]">Pengajar kami telah membantu banyak peserta lulus instansi pemerintah.</p>
                </div>
                <div class="mt-[20px] xl:mt-[0] xl:w-[28%] p-5 bg-gradient-to-b from-transparent rounded-b-[15px] to-[#9F0C07] shadow-lg">
                    <img class="w-[40px] md:w-[60px]" src={ask} alt="Ask"></img>
                    <h2 class="text-[24px] mt-[10px] md:mt-[0px] md:text-[35px] font-bold">Tanya kapan saja</h2>
                    <p class="mt-[10px]">Kami menyediakan forum untuk sharing dan tanya jawab kapan saja.</p>
                </div>
            </div>

        </div>

        <div id="ulasan" class="bg-[#060D13] flex flex-wrap justify-evenly items-center py-[80px] md:py-[120px] overflow-hidden">
            <div class="w-[90%] xl:w-[40%]">
                <h1 class="text-[40px] md:text-[60px] xl:text-[70px] font-bold leading-[110%]">
                Feedback <span class="text-[40px] md:text-[60px] xl:text-[70px] font-bold text-[#00ffff]">lulusan</span> 
                </h1>
                <p class="mt-[10px]">Bagaimana pendapat beberapa lulusan kami dalam mempersiapkan mereka untuk berkarier di instansi pemerintah.</p>
                <a href='/galeri' class="w-[150px] md:w-[200px] flex items-center justify-center mt-[30px] py-[8px] xl:py-[11px] rounded-[15px] shadow-lg bg-[#02FFFF] text-black">
                    Galeri
                    <img class="inline w-[25px] ms-2" src={galery} alt="galery"/>
                </a>
            </div>   
            <div class="md:hidden xl:block mt-[20px] md:mt-[60px] w-[90%] xl:w-[40%] relative z-20">
                <div class="section-3 absolute z-10 top-[-35%] left-[-20%] h-[80%] rotate-[45deg] z-10 aspect-square"></div>
                <div class="section-4 aspect-square h-[100%] absolute z-10 bottom-[-45%] rotate-[90deg] right-[5%]"></div>

                <div class="flex flex-wrap flex justify-between xl:justify-evenly items-center w-full h-full">
                    <div class="hidden md:block bubble-3 rotate-[180deg] absolute w-[120%] h-[130%] rotate-[180deg] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

                    <div class="relative z-10 rounded-b-[15px] w-[48%] xl:w-[45%] aspect-[3/3.5] mt-[40px]">
                        <img class="bg-gradient-to-b from-transparent rounded-b-[15px] to-[#4E1314]" src={fotoLulusan1} alt="lulusan1"/>
                    </div>
                    <div class="relative z-10 rounded-b-[15px] w-[48%] xl:w-[45%] aspect-[3/3.5] mt-[-40px]">
                        <img class="bg-gradient-to-b from-transparent rounded-b-[15px] to-[#4E1314]" src={fotoLulusan2} alt="lulusan2"/>
                    </div>
                </div>
            </div> 

            <div class="w-[90%] md:w-[85%] mt-[20px] md:mt-[80px] flex justify-between items-center">
                <div class="hidden md:block text-[30px] text-center bg-[#02FFFF] text-black shadow-lg w-[50px] aspect-square rounded-[15px]">
                    &lt;
                </div>
                <div class="md:w-[85%] flex justify-evenly">
                    <div class="bg-gradient-to-b from-transparent rounded-b-[15px] to-[100%] to-[#4E1314] md:w-[90%] xl:w-[45%] p-5 pt-[60px] rounded-[15px]">
                        <div class="flex items-center">
                            <div class="w-[45px] h-[45px]">
                                <img class="rounded-full bg-white" src={fotoLulusan1} alt="lulusan1"/>
                            </div>
                            <div class="ms-[20px]">
                                <h2 class="text-[19px]">Nama lorem</h2>
                                <p class="font-[400] text-[17px]">Pangkat lorem</p>
                            </div>
                        </div>
                        <p class="mt-[30px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, laudantium!</p>
                    </div>
                    <div class="hidden xl:block bg-gradient-to-b from-transparent rounded-b-[15px] to-[100%] to-[#4E1314] w-[45%] p-5 pt-[60px] rounded-[15px]">
                        <div class="flex items-center">
                            <div class="w-[45px] h-[45px]">
                                <img class="rounded-full bg-white" src={fotoLulusan2} alt="lulusan2"/>
                            </div>
                            <div class="ms-[20px]">
                                <h2 class="text-[18px]">Nama lorem</h2>
                                <p class="font-[400] text-[16px]">Pangkat lorem</p>
                            </div>
                        </div>
                        <p class="mt-[30px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, laudantium!</p>
                    </div>
                </div>
                <div class="hidden md:block text-[30px] text-center bg-[#02FFFF] text-black shadow-lg w-[50px] aspect-square rounded-[15px]">
                    &gt;
                </div>
            </div>

            <div class=" md:hidden w-[70%] flex justify-evenly mt-[30px]">
                <div class="xl:hidden font-bold px-[30px] py-[5px] bg-[#02FFFF] text-black shadow-lg rounded-[15px]">
                    &lt;
                </div>
                <div class="xl:hidden font-bold px-[30px] py-[5px] bg-[#02FFFF] text-black shadow-lg rounded-[15px]">
                    &gt;
                </div>
            </div>

        </div>

        <div class="px-[5%] xl:px-[0px] bg-gradient-to-b flex flex-wrap justify-evenly items-start md:block from-[#ff0000] to-[#e60707] text-center py-[60px] font-bold overflow-hidden">
            <p class="xl:w-auto md:text-[18px]">Lulusan kami sudah tergabung ke beberapa instansi pemerintah, diantaranya</p>
            <div class="flex flex-wrap md:justify-evenly items-center md:mx-[5%] xl:mx-[10%] mt-[10px] md:mt-[25px] xl:mt-[50px]">
                <div class="md:text-[20px] xl:text-[30px] font-bold p-5 mx-2 my-2 rounded-[50px] rounded-tr-none bg-gradient-to-r from-[#E50803] shadow-lg to-[#0000005d]">TNI AD</div>
                <div class="md:text-[20px] xl:text-[30px] font-bold p-5 mx-2 my-2 rounded-[50px] rounded-tr-none bg-gradient-to-r from-[#E50803] shadow-lg to-[#0000005d]">TNI AU</div>
                <div class="md:text-[20px] xl:text-[30px] font-bold p-5 mx-2 my-2 rounded-[50px] rounded-tr-none bg-gradient-to-r from-[#E50803] shadow-lg to-[#0000005d]">TNI AL</div>
                <div class="md:text-[20px] xl:text-[30px] font-bold p-5 mx-2 my-2 rounded-[50px] rounded-tr-none bg-gradient-to-r from-[#E50803] shadow-lg to-[#0000005d]">POLRI</div>
            </div>
        </div>


        <div id="kelas" class="pt-[80px] px-[5%] xl:px-[0px] pb-[100px] bg-gradient-to-b from-[#ff0000] to-[#e60707] overflow-hidden">
            <h1 class="xl:text-center text-[40px] md:text-[60px] xl:text-[70px] font-bold leading-[120%]"><span class="md:text-[60px] xl:text-[70px] font-bold text-[#ffff00]">Yuk, Gabung</span> di Kelas Kami</h1>
            <p class="xl:text-center xl:mx-[15%] mt-[10px] md:mt-[25px]">Gabung dengan Kelas Offline kami dan ikuti jejak lulusan sukses yang sudah siap menghadapi tes psikologi dengan bimbingan langsung.</p>
            <div class="flex flex-wrap justify-center items-center pt-[20px] md:pt-[60px]">
                <div class="relative w-full xl:w-auto p-5 bg-gradient-to-b from-transparent rounded-b-[15px] to-[#9F0C07] px-[40px] shadow-lg xl:me-5 mb-[20px] md:mb-[30px] xl:mb-0">
                    <div class="bubble-4 absolute w-[170%] h-[200%] top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div class="flex items-center border-b border-gray-300 pb-[20px]">
                        <img class="me-[20px] w-[40px] md:w-[60px]" src={offlineCourse} alt="offlineCourse"/>
                        <h2 class="text-[24px] md:text-[35px] font-bold">Kursus offline</h2>    
                    </div>

                    <div class="mt-[20px]">
                        <p>Sidoarjo</p>
                    </div>
                    <div class="mt-[5px]">
                        <p>Selasa 15:00 - selesai</p>
                        <p>Kamis 15:30 - selesai</p>
                    </div>
                </div>
                <div class="relative w-full xl:w-auto p-5 bg-gradient-to-b from-transparent rounded-b-[15px] to-[#9F0C07] px-[40px] shadow-lg">
                    <div class="bubble-5 absolute w-[180%] h-[180%] top-1/2 left-[100%] transform -translate-x-1/2 -translate-y-1/2"></div>

                    <div class="flex items-center border-b border-gray-300 pb-[20px]">
                        <img class="me-[20px] w-[40px] md:w-[60px]" src={onlineCourse} alt="offlineCourse"/>
                        <h2 class="text-[24px] md:text-[35px] font-bold">Kursus online</h2>    
                    </div>
                    <p class="mt-[20px]">Segera datang</p>
                </div>

                <div class="w-full flex justify-center mt-[30px] xl:mt-[60px]">
                    <a href="https://wa.me/6285646686545?text=Hallooo%20dengan%20[nama%20kursus]" class="w-[200px] md:w-[250px] flex items-center justify-center mt-[30px] py-[8px] xl:py-[11px] rounded-[15px] shadow-lg bg-[#FFFF00] text-black">
                        Pendaftaran
                        <img class="inline w-[25px] ms-2" src={register} alt="daftar"/>
                    </a>
                </div>

            </div>

        </div>
        
        <div id="instruktur" class="flex flex-wrap px-[5%] xl:px-[0px] bg-gradient-to-b from-[#ff0000] to-[#b40707] justify-evenly items-start py-[80px] md:py-[120px] overflow-hidden">
            <div class="relative xl:w-[50%]">
                <h1 class="relative w-[80%] md:w-auto z-20 text-[40px] md:text-[60px] xl:text-[70px] font-bold text-center leading-[120%] text-start">Instruktur yang <span class="text-[40px] md:text-[60px] xl:text-[70px] font-bold text-[#00ff00]">Siap Mem- bimbingmu</span></h1>
                <p class="mt-[10px] md:mt-[25px]">Di sini, kamu tidak hanya belajar dari para ahli, kamu belajar dari instruktur yang telah membantu banyak orang sukses dalam memasuki instansi pemerintah.</p>
                <a href='/galeri' class="w-[220px] flex items-center justify-center mt-[30px] py-[8px] xl:py-[11px] rounded-[15px] shadow-lg bg-[#02FF00] text-black">
                    Instagram
                    <img class="inline w-[23px] ms-2" src={ig} alt="Instagram"/>
                </a>
            </div>
            <div class="relative flex justify-center items-center w-full md:w-[70%] xl:w-[30%] h-[200px] md:h-[250px] mt-[80px] xl:md-0 xl:h-[70vh]">
                <div class="bubble-6 absolute w-[200%] h-[130%]"></div>
                <div class="photo-instruk md:rounded-b-[25px] rounded-t-[300px] xl:rounded-[15px] bg-gradient-to-b from-transparent to-[#710B08] relative z-10 border-white shadow-lg w-full h-full">

                </div>
            </div>
        </div>







    <div id="kontak" class="pt-[80px] md:py-[100px] px-[5%] md:px-[0px] relative z-20 bg-[#060D13] flex flex-wrap justify-around md:h-[600px] xl:h-[80vh]">
        <div class="w-full order-2 md:order-1 mt-[30] md:mt-[0px] w-full md:w-[25%] h-[100%] flex flex-wrap items-start text-[18px]">
            <div class="w-full">
                <p class="p-[20px] block mt-[20px] md:mt-[0px] text-[16px]">
                    Page lainya
                </p>
                <a href="/galeri.html" class="w-[200px] flex items-center justify-center md:mt-[15px] py-[8px] xl:py-[11px] rounded-[15px] border">
                    Galeri
                    <img class="inline w-[25px] ms-2" src={galery2} alt="galery"/>
                </a>
                <a href="/pertanyaan.html" class="w-[200px] flex items-center justify-center mt-[15px] py-[8px] xl:py-[11px] rounded-[15px] border">
                    Pertanyaan
                    <img class="inline w-[25px] ms-2" src={tanya2} alt="tanya"/>
                </a>
            </div>
            <div class="w-full">
                <p class="p-[20px] block mt-[10px] text-[16px]">
                    Kontak
                </p>
                <div class="flex flex-wrap">
                    <img class="inline w-[25px]" src={wa} alt="daftar"/>
                    <span class="ms-2">085 646 686 545</span>
                    <span class="ms-2"> ( hendrian siswantoro )</span>
                </div>
            </div>
            
            <p class="border-t w-full pt-[20px] block text-opacity-50 text-[15px] my-[40px] md:mt-full">Copyright 2024 ARGEN PSIKO</p>
        </div>
        <div class="md:w-[50%] order-1 md:order-2 h-[250px] md:h-full relative">
            <div class="w-full h-full absolute z-10 bg-black bg-opacity-[15%]"></div>
            <iframe title='maps' class="w-full h-full rounded-[15px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.172497345753!2d112.71529067505067!3d-7.446159223375721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e6b4f4287b57%3A0xe7f2c6fe6515acaa!2sAlun%20-%20Alun%20Kabupaten%20Sidoarjo!5e0!3m2!1sen!2sid!4v1726294815196!5m2!1sen!2sid" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
    </>
  )
}

export default Home