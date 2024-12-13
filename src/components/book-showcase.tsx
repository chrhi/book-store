import React, { FC } from "react";
import Image from "next/image";
import AddToCartButton from "./addToCart";

interface Book {
  _id: string;
  nimi: string;
  tekija: string;
  painovuosi: string;
  kustantajaHaku: string;
  hinta: number;
  kunto: string;
  sidonta: string;
  isbn: string;
  sivum: string;
  tuoteryhma: string;
  painos: string;
  description: string;
  kuvat: Array<{
    file_domain: string;
    file_path: string;
    file_md: string;
  }>;
}

interface BookShowcaseProps {
  book: Book;
}

const BookShowcase: FC<BookShowcaseProps> = ({ book }) => {
  // Memoize derived values to prevent unnecessary recalculations
  const imageURL = React.useMemo(() => {
    const firstImage = book.kuvat[0];
    return firstImage
      ? `${firstImage.file_domain}/${firstImage.file_path}/${firstImage.file_md}`
      : "/placeholder-book.jpg";
  }, [book.kuvat]);

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col gap-y-2 my-4">
        <h1 className="text-2xl md:text-4xl font-bold font-serif">
          {book.nimi}
        </h1>
        <span className="text-lg underline">{book.tekija}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4 lg:col-span-3">
          <div className="relative aspect-[3/4] max-w-[300px] mx-auto md:mx-0">
            <Image
              src={imageURL}
              alt={book.nimi}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-lg shadow-md"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/placeholder-book.jpg";
              }}
            />
          </div>
        </div>

        <div className="md:col-span-8 lg:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Book Details Section */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                {book.tekija}: {book.nimi}
              </h2>
              <div className="space-y-1">
                <p>{book.tekija}</p>
                <p>
                  {book.painovuosi} • {book.kustantajaHaku}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              <h3 className="text-2xl md:text-3xl font-bold font-serif">
                {book.hinta.toFixed(2)} €
              </h3>
              <p className="text-sm text-gray-600">
                Lähetetään 1-2 arkipäivässä
              </p>
              <p className="text-sm text-gray-600">Toimitus Suomeen 6,90 €</p>

              <AddToCartButton
                id={book._id}
                image={imageURL}
                title={book.nimi}
                price={book.hinta.toString()}
                subtitle={book.tekija}
                condition={book.kunto}
                binding={book.sidonta}
              />
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mb-8">
              <div>
                {[
                  { label: "Kunto", value: book.kunto },
                  { label: "Sidonta", value: book.sidonta },
                  { label: "ISBN", value: book.isbn },
                  { label: "Sivuja", value: book.sivum },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-start py-1 gap-x-2">
                    <span className="font-semibold min-w-[100px]">
                      {label}:
                    </span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>

              <div>
                {[
                  { label: "Tuoteryhmä", value: book.tuoteryhma },
                  { label: "Painos", value: book.painos },
                  { label: "Kustantaja", value: book.kustantajaHaku },
                  { label: "Tuotteen mitat", value: book.sidonta },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-start py-1 gap-x-2">
                    <span className="font-semibold min-w-[100px]">
                      {label}:
                    </span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">
                {book.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(BookShowcase);
