import Link from "next/link";
import type { FC } from "react";

const SearchBookCard: FC = ({}) => {
  return (
    <div className="w-full h-[300px] flex rounded-2xl border shadow overflow-hidden ">
      <div className="w-full flex-grow h-full flex ">
        <div className="w-[220px] h-full flex-shrink-0">
          <img className="w-full  " src={"/books/book03.png"} />
        </div>

        <div className="w-full h-full flex-grow flex flex-col items-start gap-y-4 p-4">
          <h2 className="font-bold text-3xl playfair-display">Todiste</h2>
          <p>Agota Kristof</p>
          <p className="text-[#757575]">2006 • Tammi</p>
          <p className="text-[#757575]">Sidottu</p>
          <p className="text-[#757575]">Käytetty - erinomainen (K4)</p>

          <button className="px-10 h-[50px] bg-[#F0F0F0]">
            Näytä tuotetiedot »
          </button>
        </div>
      </div>

      <div className="w-[250px] flex-shrink-0 h-full border-l flex flex-col justify-between  ">
        <div className="p-4">
          <p className="text-3xl font-bold playfair-display">18,00 €</p>
          <p>Saatavilla 1 kpl</p>
        </div>
        <div>
          <p className="m-4">
            Lähetetään 1-2 arkipäivässä. <br /> Toimitus Suomeen 6,00 €
          </p>

          <Link href="/books/bookId">
            <button className="w-full h-[50px] font-bold bg-primary">
              Lisää ostoskoriin »
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchBookCard;
