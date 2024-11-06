import Link from "next/link";
import type { FC } from "react";

const SearchBooks: FC = ({}) => {
  return (
    <div className="w-full min-h-[340px] h-fit bg-[#F5F5F5] rounded-2xl flex flex-col gap-y-4 p-8 md:p-4 my-8">
      <span className="text-4xl font-bold playfair-display">Hae Kirjoja</span>

      <div className="w-full h-fit flex flex-col md:flex-row gap-y-4">
        <div className=" w-full md:w-[80%] min-h-[200px] h-fit grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-y-2 md:col-span-2 ">
            <span className="font-bold">Nimike / Kirjailija</span>

            <input className="w-full h-[50px] bg-white rounded-lg border border-[#757575] px-4" />
          </div>
          <div className="flex flex-col gap-y-2  ">
            <span className="font-bold">Kieli</span>

            <input
              placeholder="Valitse kieli"
              className="w-full h-[50px] bg-white rounded-lg border border-[#757575] px-4"
            />
          </div>
          <div className="flex flex-col gap-y-2  ">
            <span className="font-bold">Tuoteryhmä</span>

            <input
              placeholder="Valitse kieli"
              className="w-full h-[50px] bg-white rounded-lg border border-[#757575] px-4"
            />
          </div>

          <span>Tarkempi haku »</span>
        </div>

        <div className=" w-full md:w-[20%] h-[70px] md:h-[220px] md:pt-7  flex flex-col  justify-between items-start md:items-center ">
          <Link href={"/search"}>
            <button className="bg-[#FFC767] px-10 w-[80%] min-w-[200px] h-[50px] mt-1 font-bold">
              Hae
            </button>
          </Link>

          <span className="">Tyhjennä haku</span>
        </div>
      </div>
    </div>
  );
};

export default SearchBooks;
