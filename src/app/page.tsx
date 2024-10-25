import Card from "@/components/card";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { DATA } from "@/data";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="w-full h-[190px] bg-[#67BDFF] flex items-center">
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
              <Link key={item} href={"/"}>
                {item}
              </Link>
            );
          })}
        </MaxWidthWrapper>
      </div>
      <MaxWidthWrapper>
        <div
          className="w-full h-[269px] flex rounded-2xl items-center justify-end gap-y-4 relative px-4"
          style={{
            backgroundImage: "url('/books-y.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col gap-y-4 items-end">
            <h1 className="text-4xl text-[64px] text-white">Otsikko tänne</h1>
            <p className="text-white">Tässä tila lyhyelle tekstille</p>
            <button className="bg-[#67BDFF] p-4 px-6 rounded-xl ">
              Lue lisää »
            </button>
          </div>
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="h-fit ">
        <div className="w-full h-[50px] flex items-center justify-between gap-x-4">
          <h2 className="text-black text-[32px]">UUSIMMAT</h2>
          <div className="h-[1px] w-full bg-black" />
        </div>
        <div className="w-full my-4  grid grid-cols-6  min-h-[560px] h-fit gap-x-4">
          {DATA.map((item) => {
            return (
              <Card
                key={item.image}
                image={item.image}
                price={item.price}
                subTitle={item.subtitle}
                title={item.title}
              />
            );
          })}
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="h-fit bg-[#F5F5F5] py-4 ">
        <div className="w-full h-[50px] flex items-center justify-center gap-x-4">
          <h2 className="text-black text-[32px] font-bold">PIKAHAKU</h2>
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
              className="border-black w-[385px]  bg-white border-[1px] h-[32px] "
            />
          </div>

          <div className="w-[600px]  h-[100px]  flex items-center justify-end pr-12 ">
            <button className="bg-[#67BDFF] w-[154px] p-4 px-6  ">Hae</button>
          </div>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="my-8">
        <div className="w-full h-[425px] grid grid-cols-2 gap-x-8 ">
          <div className="w-full h-full bg-[#F5F5F5] flex flex-col gap-y-4 p-4 rounded-2xl">
            <h1 className="text-black font-bold">Palvelemme</h1>
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
          className="w-full h-[425px] p-8 rounded-2xl relative grid grid-cols-2"
          style={{
            backgroundImage: "url('/books-lib.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className=" absolute inset-0 bg-black/35 z-[-1]" />
          <div className="w-full h-full flex flex-col gap-y-4">
            <h2 className="text-white text-[64px]">Salpakirja Oy</h2>

            <p className="text-white">
              Salpakirja Oy on kirjakauppa ja antikvariaatti, jonka kaikki
              tuotteet löytyvät myös verkkokaupoista www.salpakirja.net ja
              www.antikvaari.fi. Salpakirjan  Kirjaspotti -nimellä toimivat
              liikkeet löydät Kotkasta ja Haminasta.
            </p>
            <span className="text-white">
              Vuoden 2024 messukalenteri pitää sisällään noin 150 myyntipäivää,
              tapahtu mamyynnin aikataulun löydät Messukalenteri välilehdeltä
              tästä.
            </span>
            <p className="text-white">
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
        <div className="w-full h-[11px] bg-[#67BDFF]"></div>
        <div className="w-full bg-[#F5F5F5] pt-4">
          <MaxWidthWrapper>
            <div className="bg-[#F5F5F5] text-[#757575] w-full h-[478px] grid grid-cols-2">
              <div className="w-full h-full flex flex-col gap-y-4">
                <span className="text-[#757575] text-2xl">Salpakirja Oy</span>

                <span>Salpakirja Oy © 2024</span>
                <span>
                  Tietosuojaseloste 
                  <br />
                  Evästeet
                </span>
              </div>

              <div className="w-full h-full">
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
                */
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
      </div>
    </>
  );
}

{
}

{
  /* <div className="bg-[#F5F5F5] text-[#757575] w-full h-[478px] grid grid-cols-2">
        <div className="w-full h-full flex flex-col gap-y-4">
          <span className="text-[#757575] text-2xl">Salpakirja Oy</span>

          <span>Salpakirja Oy © 2024</span>
          <span>
            Tietosuojaseloste 
            <br />
            Evästeet
          </span>
        </div>

        <div className="w-full h-full flex flex-col"></div>
      </div> */
}
