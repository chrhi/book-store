import Card from "@/components/card";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { DATA } from "@/data";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="w-full h-[190px] bg-[#FFC767] flex items-center">
        <MaxWidthWrapper className="h-full flex items-center justify-between">
          <div className="h-[117px] w-[367px] bg-white"></div>

          <span>Ostoskori</span>
        </MaxWidthWrapper>
      </div>
      <div className="w-full h-[50px] ">
        <MaxWidthWrapper className="h-full flex items-center justify-start gap-x-4">
          {[
            "ETUSIVU",
            "AIHEALUEET",
            "OSTAMME",
            "MESSUKALENTERI",
            "MYYNTIPISTEET",
            "TOIMITUSEHDOT",
          ].map((item) => {
            return (
              <Link key={item} href={"/"} className="font-extrabold ">
                {item}
              </Link>
            );
          })}
        </MaxWidthWrapper>
      </div>
      <MaxWidthWrapper>
        <div
          className="w-full h-[389px] flex rounded-2xl items-center justify-end gap-y-4 relative px-12"
          style={{
            backgroundImage: "url('/books-y.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col gap-y-4 items-end">
            <h1 className="text-8xl  text-white playfair-display">
              Otsikko tänne
            </h1>
            <p className="text-white text-2xl">Tässä tila lyhyelle tekstille</p>
            <button className="bg-[#FFC767] hover:bg-[#da9c33] w-[170px] h-[55px] py-2 px-4 rounded-2xl font-extrabold text-[16px]  ">
              Lue lisää »
            </button>
          </div>
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="h-fit ">
        <div className="w-full my-4 h-[50px] flex items-center justify-between gap-x-4">
          <h2 className="text-black text-[40px] playfair-display">UUSIMMAT</h2>
          <div className="h-[0.5px] w-full bg-black" />
        </div>
        <div className="w-full h-[30px] flex items-center justify-end ">
          <span className="text-2xl ">Näytä kaikki</span>
        </div>
        <div className="w-full my-4  grid grid-cols-6  h-[600px]  gap-x-4">
          {DATA.map((item) => {
            return (
              <Card
                key={item.image}
                image={item.image}
                price={item.price}
                subTitle={item.subtitle}
                title={item.title}
                date={item.date}
              />
            );
          })}
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="h-fit    ">
        <div className="h-fit w-full bg-[#F5F5F5]  py-8  rounded-2xl">
          <div className="w-full h-[50px] flex items-center justify-center gap-x-4">
            <h2 className="text-black text-[32px] font-bold playfair-display">
              PIKAHAKU
            </h2>
          </div>
          <div className=" w-full my-4  flex flex-col items-center min-h-[260px] h-fit gap-x-4">
            <div className="h-[50px] w-[600px] flex items-center justify-center gap-x-2">
              <span className="text-black font-bold text-2xl">Kirja</span>
              <input className="border-black w-[385px] bg-white border-[1px] h-[32px] " />
            </div>
            <div className="h-[50px] w-[600px]  flex items-center justify-center gap-x-2 mr-[37px]">
              <span className="text-black font-bold text-2xl">Kirjailija</span>
              <input className="border-black w-[385px] bg-white border-[1px] h-[32px] " />
            </div>
            <div className="h-[50px] w-[600px]  flex items-center justify-center gap-x-2">
              <span className="text-black font-bold text-2xl">Kieli</span>
              <input
                value={"Valitse kieli"}
                className="border-black w-[385px] px-2 bg-white border-[1px] h-[32px] "
              />
            </div>

            <div className="w-[600px]  h-[100px]  flex items-center justify-end pr-20 ">
              <button className="bg-[#FFC767] cursor-pointer hover:bg-[#da9c33] w-[154px] p-4 px-6  ">
                Hae
              </button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="my-8">
        <div className="w-full h-[425px] grid grid-cols-2 gap-x-8 ">
          <div className="w-full h-full bg-[#F5F5F5] flex flex-col gap-y-4 p-8 rounded-2xl">
            <h1 className="text-black text-3xl font-bold playfair-display">
              Palvelemme
            </h1>
            <span>
              Salpakirja Oy asiakaspalvelu <br /> salpakirja@gmail.com tai puh.
              050 339 5724
            </span>
            <span className="text-black font-bold">Kirjaspotti Hamina</span>
            <span>
              Avoinna ma, ke-pe klo 9-17, ti klo 8-16
              <br />
              Raatihuoneentori 16, 49400 Hamina
              <br />
              salpakirja@gmail.com, puh. 050 339 5724
            </span>
            <span className="text-black font-bold">Kirjaspotti Kotka</span>
            Avoinna ma-pe klo 10.15-18, la klo 10.15-16, su suljettu.
            <br />
            Keskuskatu 10, 48100 Kotka, Kauppakeskus Pasaati katutaso
            <br />
            kirjaspotti.kotka@gmail.com, puh. 041 314 7501
          </div>

          <div
            className="w-full h-full  rounded-2xl"
            style={{
              backgroundImage: "url('/shavre.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper>
        <div
          className="w-full h-[525px] p-8 rounded-2xl relative grid grid-cols-2"
          style={{
            backgroundImage: "url('/books-lib.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className=" absolute inset-0 rounded-2xl bg-black/55 z-[1]" />
          <div className="w-full h-full flex  flex-col z-[2] gap-y-4">
            <h2 className="text-white text-[64px] playfair-display">
              Salpakirja Oy
            </h2>

            <p className="text-white font-bold text-md my-2">
              Salpakirja Oy on kirjakauppa ja antikvariaatti, jonka kaikki
              tuotteet löytyvät myös verkkokaupoista www.salpakirja.net ja
              www.antikvaari.fi. Salpakirjan  Kirjaspotti -nimellä toimivat
              liikkeet löydät Kotkasta ja Haminasta.
            </p>
            <span className="text-white font-bold text-md my-2">
              Vuoden 2024 messukalenteri pitää sisällään noin 150 myyntipäivää,
              tapahtu mamyynnin aikataulun löydät Messukalenteri välilehdeltä
              tästä.
            </span>
            <p className="text-white font-bold text-md my-2">
              Uusien kirjojen lisäksi löydät liikkeestämme, myös hyväkuntoiset
              käytetyt kirjat. Antikvariaatti Salpakirjan laajin valikoima
              löytyy Kirjaspotin Haminan liikkeestä. Antikvariaatti Salpakirjan
              valikoimaa on esillä vuosittain myös Helsingin –, Jyväskylän ja
              Turun kirjamessuilla sekä muutamissa pienemmissä tapahtumissa.
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
      <div className="w-full h-fit my-8">
        <div className="w-full h-[11px] bg-[#FFC767]"></div>
        <div className="w-full bg-[#F5F5F5] pt-4">
          <MaxWidthWrapper>
            <div className="bg-[#F5F5F5] text-[#757575] w-full h-[478px] grid grid-cols-2">
              <div className="w-full h-full flex flex-col gap-y-4">
                <span className="text-[#757575] font-bold playfair-display text-5xl">
                  Salpakirja Oy
                </span>

                <span className="mt-4">Salpakirja Oy © 2024</span>
                <span>
                  Tietosuojaseloste 
                  <br />
                  Evästeet
                </span>
              </div>

              <div className="w-full h-full flex flex-col gap-y-4">
                <span className="text-[#757575]">Yhteystiedot:</span>
                <span className="text-[#757575]">
                  Salpakirja Oy asiakaspalvelu
                  <br />
                  salpakirja@gmail.com tai puh. 050 339 5724
                </span>
                <span className="text-[#757575]">
                  Kirjaspotti Hamina
                  <br />
                  Avoinna ma, ke-pe klo 9-17, ti klo 8-16
                  <br />
                  Raatihuoneentori 16, 49400 Hamina
                  <br />
                  salpakirja@gmail.com, puh. 050 339 5724
                </span>
                <span className="text-[#757575]">
                  Kirjaspotti Kotka
                  <br />
                  Avoinna ma-pe klo 10.15-18, la klo 10.15-16, su suljettu.
                  <br />
                  Keskuskatu 10, 48100 Kotka, Kauppakeskus Pasaati katutaso
                  <br />
                  kirjaspotti.kotka@gmail.com, puh. 041 314 7501
                </span>{" "}
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
      </div>
    </>
  );
}
