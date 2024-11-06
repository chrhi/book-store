import type { FC } from "react";

interface BookDetails {
  title: string;
  author: string;
  publisher: string;
  year: string;
  price: string;
  condition: string;
  binding: string;
  isbn: string;
  pages: string;
  category: string;
  edition: string;
  dimensions: string;
  description: string;
  imageUrl: string;
}

const BookShowcase: FC = () => {
  const bookDetails: BookDetails = {
    title: "Hobitti, eli Sinne ja takaisin",
    author: "J.R.R Tolkien",
    publisher: "WSOY",
    year: "2017",
    price: "28,00",
    condition: "Uusi",
    binding: "Sidottu, kansipaperi",
    isbn: "1234123412341234",
    pages: "256",
    category: "Scifi, Fantasia",
    edition: "3",
    dimensions: "-",
    imageUrl: "/dragon.png",
    description: `Hobitti täyttää 80 vuotta! 2017 on kulunut J. R. R. Tolkienin syntymästä 125 vuotta ja Hobitin ilmestymisestä 80 vuotta. Tuplajuhlan kunniaksi Hobitti ilmestyy uutena laitoksena Tove Janssonin kuvittamana. 21.9.1937 julkaistiin Englannissa ensipainos Tolkienin fantasiaromaanista Hobitti. 23 vuotta myöhemmin Rabén & Sjögrenin kustannustoimittaja Astrid Lindgren pyysi Muumi-kirjoillaan jo mainetta niittänyttä Tove Janssonia kuvittamaan Hobitin, josta oli tekeillä uusi ruotsinnos.Hobitin 80-vuotislaitos sisältää Janssonin satumaiset kuvat alkuperäispiirroksista suoraan kuvattuina ja aiemmin vain Hobitin ensimmäisessä suomennoksessa Lohikäärmevuori käytetyn kannen. Brian Sibley kertoo jälkisanoissaan koko huikean tarinan siitä, kuinka Hobitin kuvitus toi yhteen kolme kirjallista jättiläistä - J. R. R. Tolkienin, Astrid Lindgrenin ja Tove Janssonin.J. R. R. Tolkien (1892-1973) tunnetaan nykyaikaisen fantasiakirjallisuuden isänä, jonka pääteoksia ovat Hobitti ja Taru Sormusten herrasta. Muumi-kirjoistaan kuulu Tove Jansson (1914-2001) kuvitti Tolkienin Hobitin lisäksi mm. Lewis Carrollin Liisan seikkailut ihmemaassa. Brittikirjailija Brian Sibley (s. 1949) on dramatisoinut radiokuunnelman Tolkienin Sormusten herrasta ja oli 20 vuoden ajan kirjeenvaihdossa Tove Janssonin kanssa.`,
  };

  const DetailRow = ({ label, value }: { label: string; value: string }) => (
    <div className="w-full py-1 flex items-start gap-x-2">
      <span className="font-semibold min-w-[100px]">{label}:</span>
      <span>{value}</span>
    </div>
  );

  return (
    <div className="w-full  px-4">
      <div className="flex flex-col gap-y-2 my-4">
        <h1 className="text-2xl md:text-4xl font-bold playfair-display">
          {bookDetails.title}
        </h1>
        <span className="text-lg underline">{bookDetails.author}</span>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="w-full md:col-span-4 lg:col-span-3">
          <img
            className="w-full max-w-[300px] mx-auto md:mx-0"
            src={bookDetails.imageUrl}
            alt={bookDetails.title}
          />
        </div>

        <div className="w-full md:col-span-8 lg:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                {bookDetails.author}: {bookDetails.title}
              </h2>
              <div className="space-y-1">
                <p>{bookDetails.author}</p>
                <p>
                  {bookDetails.year} • {bookDetails.publisher}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              <h3 className="text-2xl md:text-3xl font-bold playfair-display">
                {bookDetails.price} €
              </h3>
              <p className="text-sm">Lähetetään 1-2 arkipäivässä.</p>
              <p className="text-sm">Toimitus Suomeen 6,90 €</p>
              <button className="w-full mt-4 py-3 px-4 bg-[#FFC767] font-bold hover:bg-[#e6b35d] transition-colors rounded-sm">
                Lisää ostoskoriin »
              </button>
            </div>
          </div>

          <div className="w-full border-t border-gray-200 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mb-8">
              <div>
                <DetailRow label="Kunto" value={bookDetails.condition} />
                <DetailRow label="Sidonta" value={bookDetails.binding} />
                <DetailRow label="ISBN" value={bookDetails.isbn} />
                <DetailRow label="Sivuja" value={bookDetails.pages} />
              </div>
              <div>
                <DetailRow label="Tuoteryhmä" value={bookDetails.category} />
                <DetailRow label="Painos" value={bookDetails.edition} />
                <DetailRow label="Kustantaja" value={bookDetails.publisher} />
                <DetailRow
                  label="Tuotteen mitat"
                  value={bookDetails.dimensions}
                />
              </div>
            </div>

            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">
                {bookDetails.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookShowcase;
