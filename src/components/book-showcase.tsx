import type { FC } from "react";

const BookShowcase: FC = ({}) => {
  return (
    <>
      <div className="flex flex-col gap-y-4 my-4">
        <h1 className="text-4xl font-bold playfair-display">
          Hobitti, eli Sinne ja takaisin
        </h1>
        <span className="underline ">J.R.R Tolkien</span>
      </div>

      <div className="w-full h-fit min-h-[500px] grid grid-cols-4 ">
        <div className="w-full h-full ">
          <img className="w-[300px]" src={"/dragon.png"} alt="book" />
        </div>

        <div className="w-full h-fit min-h-[200px]  flex flex-col   col-span-3">
          <div className="w-full h-full grid grid-cols-3 my-8 gap-4 ">
            <div className="w-full h-full col-span-2  ">
              <h2 className="text-3xl font-bold ">
                J. R.R Tolkien : Hobitti, eli Sinne ja takaisin
              </h2>
              <div className="mt-2 space-y-1 ">
                <p>J.R.R Tolkien</p>
                <p>2017 • WSOY</p>
              </div>
            </div>

            <div className="w-full h-full ">
              <h3 className="font-bold text-3xl playfair-display ">28,00 €</h3>
              <span>Lähetetään 1-2 arkipäivässä.</span>
              <span>Toimitus Suomeen 6,90 €</span>

              <button className="w-full mt-8 h-[50px] bg-[#FFC767] font-bold">
                Lisää ostoskoriin »
              </button>
            </div>
          </div>

          <div className="w-full my-4 h-[200px] border-t pt-6 grid grid-cols-3  ">
            <div className="w-full h-full flex flex-col items-start gap-y-2">
              <div className="w-full flex items-center justify-start gap-x-4">
                <span className="font-bold ">Kunto:</span> <span>Uusi</span>
              </div>
              <div className="w-full flex items-center justify-start gap-x-4">
                <span className="font-bold ">Sidonta:</span>{" "}
                <span>Sidottu, kansipaperi</span>
              </div>
              <div className="w-full flex items-center justify-start gap-x-4">
                <span className="font-bold ">ISBN:</span>{" "}
                <span>1234123412341234</span>
              </div>
              <div className="w-full flex items-center justify-start gap-x-4">
                <span className="font-bold ">Sivuja:</span> <span>256</span>
              </div>
            </div>

            <div className="w-full h-full flex flex-col items-start gap-y-2">
              <div className="w-full flex items-center justify-start gap-x-4">
                <span className="font-bold ">Tuoteryhmä:</span>{" "}
                <span>Scifi, Fantasia</span>
              </div>
              <div className="w-full flex items-center justify-start gap-x-4">
                <span className="font-bold ">Painos:</span> <span>3</span>
              </div>
              <div className="w-full flex items-center justify-start gap-x-4">
                <span className="font-bold ">Kustantaja:</span>{" "}
                <span>WSOY</span>
              </div>
              <div className="w-full flex items-center justify-start gap-x-4">
                <span className="font-bold ">Tuotteen mitat:</span>{" "}
                <span>-</span>
              </div>
            </div>
          </div>

          <div className="w-full h-full">
            <p>
              Hobitti täyttää 80 vuotta! 2017 on kulunut J. R. R. Tolkienin
              syntymästä 125 vuotta ja Hobitin ilmestymisestä 80 vuotta.
              Tuplajuhlan kunniaksi Hobitti ilmestyy uutena laitoksena Tove
              Janssonin kuvittamana. 21.9.1937 julkaistiin Englannissa
              ensipainos Tolkienin fantasiaromaanista Hobitti. 23 vuotta
              myöhemmin Rabén & Sjögrenin kustannustoimittaja Astrid Lindgren
              pyysi Muumi-kirjoillaan jo mainetta niittänyttä Tove Janssonia
              kuvittamaan Hobitin, josta oli tekeillä uusi ruotsinnos.Hobitin
              80-vuotislaitos sisältää Janssonin satumaiset kuvat
              alkuperäispiirroksista suoraan kuvattuina ja aiemmin vain Hobitin
              ensimmäisessä suomennoksessa Lohikäärmevuori käytetyn kannen.
              Brian Sibley kertoo jälkisanoissaan koko huikean tarinan siitä,
              kuinka Hobitin kuvitus toi yhteen kolme kirjallista jättiläistä -
              J. R. R. Tolkienin, Astrid Lindgrenin ja Tove Janssonin.J. R. R.
              Tolkien (1892-1973) tunnetaan nykyaikaisen fantasiakirjallisuuden
              isänä, jonka pääteoksia ovat Hobitti ja Taru Sormusten herrasta.
              Muumi-kirjoistaan kuulu Tove Jansson (1914-2001) kuvitti Tolkienin
              Hobitin lisäksi mm. Lewis Carrollin Liisan seikkailut ihmemaassa.
              Brittikirjailija Brian Sibley (s. 1949) on dramatisoinut
              radiokuunnelman Tolkienin Sormusten herrasta ja oli 20 vuoden ajan
              kirjeenvaihdossa Tove Janssonin kanssa.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookShowcase;
