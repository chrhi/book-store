import MaxWidthWrapper from "@/components/max-width-wrapper";
import ProductReel from "@/components/books-reel";
import { Button } from "@/components/ui/button";
import { GetAllBooks } from "@/lib/actions/books.actions";
import Link from "next/link";
// import { seedDatabase } from "@/seed";
// import { GetAllBooks } from "@/lib/actions/books.actions";
// import Card from "@/components/book-card";

export default async function Home() {
  // const books = await GetAllBooks();

  // await seedDatabase();

  const BOOKS = await GetAllBooks();

  return (
    <>
      <MaxWidthWrapper className="mt-[160px] pt-16 ">
        <div
          className="w-full h-[389px]  flex rounded-2xl items-center justify-start md:justify-end gap-y-4 relative px-4 md:px-12"
          style={{
            backgroundImage: "url('/books-y.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col gap-y-4 items-start md:items-end">
            <h1 className="text-6xl md:text-8xl text-white playfair-display">
              Otsikko tänne
            </h1>
            <p className="text-white text-xl md:text-2xl">
              Tässä tila lyhyelle tekstille
            </p>
            <Link href={"/search"}>
              <Button className="bg-[#FFC767] hover:bg-[#da9c33] w-[170px] h-[55px] py-2 px-4 rounded-2xl font-extrabold text-[16px]">
                Lue lisää »
              </Button>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="h-fit">
        <ProductReel books={BOOKS.books} title="UUSIMMAT" />
      </MaxWidthWrapper>

      <MaxWidthWrapper className="h-fit">
        <div className="h-fit w-full bg-[#F5F5F5] py-8 rounded-2xl">
          <div className="w-full h-[50px] flex items-center justify-center gap-x-4">
            <h2 className="text-black text-[32px] font-bold playfair-display">
              PIKAHAKU
            </h2>
          </div>
          <div className="w-full my-4 flex flex-col items-center min-h-[260px] h-fit gap-x-4">
            <div className="h-[50px] w-[450px] md:w-[600px] flex items-center justify-center gap-x-2">
              <span className="text-black font-bold text-2xl">Kirja</span>
              <input className="border-black w-[235px] md:w-[385px] bg-white border-[1px] h-[32px]" />
            </div>
            <div className="h-[50px] w-[450px] md:w-[600px] flex items-center justify-center gap-x-2 mr-[37px]">
              <span className="text-black font-bold text-2xl">Kirjailija</span>
              <input className="border-black w-[235px] md:w-[385px] bg-white border-[1px] h-[32px]" />
            </div>
            <div className="h-[50px] w-[450px] md:w-[600px] flex items-center justify-center gap-x-2">
              <span className="text-black font-bold text-2xl">Kieli</span>
              <input
                value="Valitse kieli"
                className="border-black w-[235px] md:w-[385px] px-2 bg-white border-[1px] h-[32px]"
              />
            </div>

            <div className="w-full md:w-[600px] h-[100px] flex items-center justify-center md:justify-end md:pr-20">
              <Button className="bg-[#FFC767] cursor-pointer hover:bg-[#da9c33] w-[154px] p-4 px-6">
                Hae
              </Button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="my-8">
        <div className="w-full min-h-[425px] h-fit grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full h-full bg-[#F5F5F5] flex flex-col gap-y-4 p-8 rounded-2xl">
            <h2 className="text-black text-3xl font-bold playfair-display">
              Palvelemme
            </h2>
            <p>
              Salpakirja Oy asiakaspalvelu <br />
              salpakirja@gmail.com tai puh. 050 339 5724
            </p>

            <h3 className="text-black font-bold">Kirjaspotti Hamina</h3>
            <p>
              Avoinna ma, ke-pe klo 9-17, ti klo 8-16
              <br />
              Raatihuoneentori 16, 49400 Hamina
              <br />
              salpakirja@gmail.com, puh. 050 339 5724
            </p>

            <h3 className="text-black font-bold">Kirjaspotti Kotka</h3>
            <p>
              Avoinna ma-pe klo 10.15-18, la klo 10.15-16, su suljettu.
              <br />
              Keskuskatu 10, 48100 Kotka, Kauppakeskus Pasaati katutaso
              <br />
              kirjaspotti.kotka@gmail.com, puh. 041 314 7501
            </p>
          </div>

          <div
            className="h-[425px] w-full md:h-full rounded-2xl"
            style={{
              backgroundImage: "url('/shavre.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper>
        <div
          className="w-full min-h-[525px] h-fit p-8 rounded-2xl relative grid grid-cols-1 md:grid-cols-2"
          style={{
            backgroundImage: "url('/books-lib.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 rounded-2xl bg-black/55 z-[1]" />
          <div className="w-full h-full flex flex-col z-[2] gap-y-4">
            <h2 className="text-white text-[64px] playfair-display">
              Salpakirja Oy
            </h2>
            <p className="text-white font-bold text-md my-2">
              Salpakirja Oy on kirjakauppa ja antikvariaatti, jonka kaikki
              tuotteet löytyvät myös verkkokaupoista www.salpakirja.net ja
              www.antikvaari.fi. Salpakirjan Kirjaspotti -nimellä toimivat
              liikkeet löydät Kotkasta ja Haminasta.
            </p>
            <p className="text-white font-bold text-md my-2">
              Vuoden 2024 messukalenteri pitää sisällään noin 150 myyntipäivää,
              tapahtu mamyynnin aikataulun löydät Messukalenteri välilehdeltä
              tästä.
            </p>
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
    </>
  );
}