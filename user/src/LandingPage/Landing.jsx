import React, { useState } from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { Fragment } from "react";
import "./Landing.css";
import Silang from "../assets/image_landing/silang.svg";
import axios from "axios";

function Landing() {
  const [showModal, setShowModal] = useState(false);
  const [jenis, setJenis] = useState("");
  const [email, setEmail] = useState("");

  console.log(jenis);
  console.log(email);

  const onSubmit = async (e) => {
    e.preventDefault();
    const post = { jenis: jenis, email: email };
    try {
      const res = await axios.post("http://admin.fitacademy.id:8000/api/email", post);
      alert("success");
      console.log(res.data);
    } catch (e) {
      alert(e);
    }
  };

  const clickModal = (r) => {
    setJenis(r);
    setShowModal(true);
  };

  return (
    <Fragment>
      <div className="lg:grid lg:grid-cols-2">
        <div className="lg:w-1/2 lg:fixed">
          {/* nav bar */}
          <header className="">
            <nav className="flex flex-row">
              <div className="flex">
                <img className="w-12 ml-9 lg:ml-20 lg:w-16" src="image_landing/Fit-Academy-Logo.png" alt="" />
                <h1 className="hidden lg:block font-nunito self-center ml-5 text-[#EB8A3A] font-semibold text-xl">fitacademy.id</h1>
              </div>
              <div className="self-center justify-end">
                <h1 className="ml-60 lg:ml-[25rem] font-bold font-poppins text-xl text-[#21396B]">BLOG</h1>
              </div>
            </nav>
          </header>

          {/* konten kiri */}
          <div className="mx-7 lg:ml-20 lg:mr-16">
            <img className="w-[40rem] lg:w-[35rem] mx-auto" src="image_landing/cover-3-book.png" alt="" />
            <h1 className="text-center lg:text-left text-3xl lg:text-5xl text-[#21396B] font-poppins">
              Belajar Seru dan Praktis,{" "}
              <span className="font-bold">
                Bareng <span className="text-[#EB8A3A]">FitAcademy</span>
              </span>
            </h1>
            <h2 className=" text-center lg:text-justify mt-8 font-normal font-poppins text-xl lg:text-3xl text-[#3F3F3F]">
              Dapatkan Berbagai E-Book <br /> Penunjang <i>Skill</i> Secara Gratis!
            </h2>
          </div>

          {/* footer kiri */}
          <div className="mt-16 lg:flex hidden text-[#21396B] font-poppins font-semibold">
            <div className="border-4 w-[4.5rem] h-0 border-[#21396B] self-center"></div>
            <h3 className="ml-3 ">INSTAGRAM</h3>
            <div className="mx-4 border-4 w-1 border-[#21396B]"></div>
            <h3>TIKTOK</h3>
          </div>

          {/* copyright */}
          <h4 className="hidden lg:block ml-[5.5rem] mt-6 mb-5 text-[#3F3F3F] text-xs font-poppins">Copyright © 2023 FitAcademy. All rights reserved.</h4>
        </div>
        {/* konten kanan */}
        <div className="static mx-10 my-20 lg:my-0 lg:mx-0 lg:py-32 lg:absolute right-32 scroll_hidden">
          {/* Card Perusahaan */}
          <div onClick={() => clickModal("perusahaan")} className="cursor-pointer group">
            <Card variant="gradient" className="text-[#DDDDDD] rounded-none lg:h-[28rem] max-w-[30rem] mx-auto bg-fitinline-orange p-8">
              <CardBody className="p-0">
                <Typography className="text-xl font-semibold font-poppins">Perusahaan</Typography>
                <img className="w-[30rem]" src="image_landing/cover-1.png" alt="" />
                <Typography className="hidden text-xl text-white font-poppins lg:group-hover:block">
                  <a className="font-semibold underline_animation">CAREER PATH:</a> Sukses Menjadi Seorang Copywriter
                </Typography>
              </CardBody>
            </Card>
          </div>

          {/* Card Konten Kreator */}
          <div onClick={() => clickModal("kontenKreator")} className="cursor-pointer group">
            <Card variant="gradient" className="text-[#DDDDDD] rounded-none lg:h-[30rem] max-w-[30rem] mx-auto bg-fitinline-orange p-8 my-16">
              <CardBody className="p-0">
                <Typography className="text-xl font-semibold font-poppins">Konten Kreator</Typography>
                <img className="w-[30rem]" src="image_landing/cover-2.png" alt="" />
                <Typography className="hidden text-xl text-white font-poppins lg:group-hover:block">
                  <a className="font-semibold underline_animation">CONTENT CREATOR GUIDE: </a>Asik Mengedukasi dengan Metode Microlearning
                </Typography>
              </CardBody>
            </Card>
          </div>

          {/* Card Anak Muda */}
          <div onClick={() => clickModal("anakMuda")} className="cursor-pointer group">
            <Card variant="gradient" className="text-[#DDDDDD] rounded-none lg:h-[28rem] max-w-[30rem] mx-auto bg-fitinline-orange p-8">
              <CardBody className="p-0">
                <Typography className="text-xl font-semibold font-poppins">Anak Muda</Typography>
                <img className="w-[30rem]" src="image_landing/cover-3.png" alt="" />
                <Typography className="hidden text-xl text-white font-poppins lg:group-hover:block">
                  <a className="font-semibold underline_animation">CAREER PATH: </a>Sukses Menjadi Seorang Copywriter
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>

        {/* footer mobile */}
        <div className="mt-36 flex lg:hidden text-[#21396B] font-poppins font-semibold">
          <div className="border-4 w-[3rem] h-0 border-[#21396B] self-center"></div>
          <h3 className="ml-3 ">INSTAGRAM</h3>
          <div className="mx-4 border-4 w-1 border-[#21396B]"></div>
          <h3>TIKTOK</h3>
        </div>

        {/* copyright mobile */}
        <h4 className="block lg:hidden ml-[3.8rem] my-4 pb-10 text-[#3F3F3F] text-xs font-poppins">Copyright © 2023 FitAcademy. All rights reserved.</h4>

        <div className="bg-[#21396B] absolute w-[78%] lg:w-1/2 h-[55rem] lg:h-1/2 lg:fixed left-24 lg:left-1/2 -bottom-[50rem] lg:bottom-0 -z-10"></div>
        {showModal && jenis === "perusahaan" ? (
          <>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
              <div className="relative w-auto h-full">
                {/*content*/}
                <div className="relative flex flex-col w-full bg-white border-2 border-yellow-300 h-fit">
                  {/*body*/}
                  <div className="grid  lg:grid-cols-2 font-poppins">
                    <div className="order-last my-20 lg:order-first lg:mt-32 mx-14 lg:ml-24 lg:mr-20">
                      <h1 className="font-medium text-2xl lg:text-4xl text-[#EB8A3A]">
                        <b>EMPLOYEE 101:</b> Cara Ampuh dan Efektif Meningkatkan Kinerja Karyawan
                      </h1>
                      <div className="mt-9 border-2 w-full border-[#21396B]"></div>
                      <h2 className="my-9 font-semibold text-[#21396B] text-xl lg:text-2xl">Deskripsi E-Book</h2>
                      <h3 className="text-justify text-[#21396B] text-base lg:text-xl">
                        E-book ini didesain bagi Anda yang ingin meningkatkan kinerja karyawan agar menjadi lebih produktif ketika bekerja. Dalam e-book ini, Anda akan mengetahui bagaimana
                        langkah-langkah hingga manfaat yang nantinya akan didapatkan ketika produktivitas karyawan meningkat. Setelah selesai membaca e-book ini, Anda akan mampu memahami dan
                        menerapkan berbagai macam cara untuk meningkatkan kinerja karyawan secara optimal. Dampaknya, perusahaan atau bisnis yang Anda jalankan bisa memperoleh profit yang maksimal.
                      </h3>
                    </div>

                    <div className="bg-[#21396B] flex flex-col">
                      <img onClick={() => setShowModal(false)} src={Silang} className="self-end w-32 p-10 pb-0 cursor-pointer" alt="" />

                      <img className="w-[40rem] mx-auto" src="image_landing/cover-1.png" alt="" />
                      <div className="mt-16 text-lg font-semibold text-white mx-14 lg:ml-20 font-poppins lg:text-xl">
                        <h2 className="text-center lg:text-left">DAPATKAN E-BOOK LENGKAP INI SECARA GRATIS!</h2>
                      </div>
                      <form className="mb-14" action="post" onSubmit={onSubmit}>
                        <div className="flex flex-row mt-4 mb-6 mx-14 lg:mx-20">
                          {/* <input type="hidden" name="jenis" id="jenis" value="perusahaan" /> */}
                          <input
                            onChange={(event) => {
                              setEmail(event.target.value);
                            }}
                            value={email}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="masukkan alamat email"
                            className="pl-6 placeholder:text-xs basis-3/4 h-14 rounded-full bg-gray-200 border border-gray-500 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 focus: block w-full p-2.5 lg:basis-9/12"
                            required
                          />
                          <button className="px-4 py-2 w-32 ml-4 font-bold text-white bg-[#F58726] rounded-full hover:bg-[#F6C849] hover:text-[#21396B] transition duration-500 ease-in-out">
                            KIRIM
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
          </>
        ) : showModal && jenis === "kontenKreator" ? (
          <>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
              <div className="relative w-auto h-full">
                {/*content*/}
                <div className="relative flex flex-col w-full bg-white border-2 border-yellow-300 h-fit">
                  {/*body*/}
                  <div className="grid  lg:grid-cols-2 font-poppins">
                    <div className="order-last my-20 lg:order-first lg:mt-32 mx-14 lg:ml-24 lg:mr-20">
                      <h1 className="font-medium text-2xl lg:text-4xl text-[#EB8A3A]">
                        <b>CONTENT CREATOR GUIDE:</b> Asik Mengedukasi dengan Metode Microlearning
                      </h1>
                      <div className="mt-9 border-2 w-full border-[#21396B]"></div>
                      <h2 className="my-9 font-semibold text-[#21396B] text-xl lg:text-2xl">Deskripsi E-Book</h2>
                      <h3 className="text-justify text-[#21396B] text-base lg:text-xl">
                        Tingkatkan Kemampuan produksi konten Anda melalui berbagai metode kekinian dari e-book FitAcademy. Jelajahi berbagai <i>tips</i> dan trik dengan cepat, menarik, dan pastinya
                        terkini agar setiap konten edukasi yang Anda berikan semakin berkesan. Melalui e-book ini, Anda akan belajar bagaimana cara membuat konten dengan konsep pembelajaran mikro (
                        <i>microlearning</i>) yang singkat, interaktif, dan pastinya asik untuk dipelajari.
                      </h3>
                    </div>

                    <div className="bg-[#21396B] flex flex-col">
                      <img onClick={() => setShowModal(false)} src={Silang} className="self-end w-32 p-10 pb-0 cursor-pointer" alt="" />

                      <img className="w-[40rem] mx-auto" src="image_landing/cover-2.png" alt="" />
                      <div className="mt-16 text-lg font-semibold text-white mx-14 lg:ml-20 font-poppins lg:text-xl">
                        <h2 className="text-center lg:text-left">DAPATKAN E-BOOK LENGKAP INI SECARA GRATIS!</h2>
                      </div>
                      <form className="mb-14" action="post" onSubmit={onSubmit}>
                        <div className="flex flex-row mt-4 mb-6 mx-14 lg:mx-20">
                          <input type="hidden" name="jenis" id="jenis" value="perusahaan" />
                          <input
                            onChange={(event) => {
                              setEmail(event.target.value);
                            }}
                            value={email}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="masukkan alamat email"
                            className="pl-6 placeholder:text-xs basis-3/4 h-14 rounded-full bg-gray-200 border border-gray-500 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 focus: block w-full p-2.5 lg:basis-9/12"
                            required
                          />
                          <button className="px-4 py-2 w-32 ml-4 font-bold text-white bg-[#F58726] rounded-full hover:bg-[#F6C849] hover:text-[#21396B] transition duration-500 ease-in-out">
                            KIRIM
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
          </>
        ) : showModal && jenis === "anakMuda" ? (
          <>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
              <div className="relative w-auto h-full">
                {/*content*/}
                <div className="relative flex flex-col w-full bg-white border-2 border-yellow-300 h-fit">
                  {/*body*/}
                  <div className="grid  lg:grid-cols-2 font-poppins">
                    <div className="order-last my-20 lg:order-first lg:mt-32 mx-14 lg:ml-24 lg:mr-20">
                      <h1 className="font-medium text-2xl lg:text-4xl text-[#EB8A3A]">
                        <b>CAREER PATH:</b> Sukses Menjadi Seorang Copywriter
                      </h1>
                      <div className="mt-9 border-2 w-full border-[#21396B]"></div>
                      <h2 className="my-9 font-semibold text-[#21396B] text-xl lg:text-2xl">Deskripsi E-Book</h2>
                      <h3 className="text-justify text-[#21396B] text-base lg:text-xl">
                        Di era digital saat ini, kemampuan untuk menulis copy sangat dibutuhkan. Dengan mempelajari <i>copywriting</i>, Anda akan mampu membuat iklan yang bagus, salah satunya bisa
                        Anda dapatkan di e-book ini. Materinya mencakup <i>skillset</i> hingga jenjang karier seorang copywriter. Nantinya Anda akan menguasai kemampuan copywriting secara mendalam dan
                        siap menjadi seorang copywriter yang handal. Selain itu, profesi <i>copywriting</i> banyak dicari dan cukup menjanjikan di masa depan.
                      </h3>
                    </div>

                    <div className="bg-[#21396B] flex flex-col">
                      <img onClick={() => setShowModal(false)} src={Silang} className="self-end w-32 p-10 pb-0 cursor-pointer" alt="" />

                      <img className="w-[40rem] mx-auto" src="image_landing/cover-3.png" alt="" />
                      <div className="mt-16 text-lg font-semibold text-white mx-14 lg:ml-20 font-poppins lg:text-xl">
                        <h2 className="text-center lg:text-left">DAPATKAN E-BOOK LENGKAP INI SECARA GRATIS!</h2>
                      </div>
                      <form className="mb-14" action="post" onSubmit={onSubmit}>
                        <div className="flex flex-row mt-4 mb-6 mx-14 lg:mx-20">
                          <input type="hidden" name="jenis" id="jenis" value="perusahaan" />
                          <input
                            onChange={(event) => {
                              setEmail(event.target.value);
                            }}
                            value={email}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="masukkan alamat email"
                            className="pl-6 placeholder:text-xs basis-3/4 h-14 rounded-full bg-gray-200 border border-gray-500 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 focus: block w-full p-2.5 lg:basis-9/12"
                            required
                          />
                          <button className="px-4 py-2 w-32 ml-4 font-bold text-white bg-[#F58726] rounded-full hover:bg-[#F6C849] hover:text-[#21396B] transition duration-500 ease-in-out">
                            KIRIM
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
          </>
        ) : null}
      </div>
    </Fragment>
  );
}

export default Landing;
