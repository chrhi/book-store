import type { FC } from "react";

interface CardProps {
  image: string;
  subTitle: string;
  title: string;
  price: string;
  date: string;
}

const Card: FC<CardProps> = ({ image, price, subTitle, title, date }) => {
  return (
    <div className="w-full h-full overflow-hidden shadow rounded-2xl  flex flex-col  justify-between">
      <div className="w-full flex flex-col   gap-y-2">
        <img
          src={image}
          className="rounded-t-2xl h-[260px] 2xl:h-[300px] w-full"
        />
        <span className="text-[#757575]">{date}</span>
      </div>
      <div className="h-[340px] 2xl:h-[300px] flex flex-col   justify-between gap-y-1   w-full">
        <div className="w-full h-fit my-1 px-1">
          <span className="text-md ">{subTitle}</span>
          <p className="text-xl font-bold playfair-display">{title}</p>
        </div>

        <div className="w-full h-fit flex flex-col gap-y-1 my-1  mt-auto px-1">
          <span className="text-[#757575]">Sidottu</span>
          <span className="text-[#757575]">Käytetty - erinomainen (K4)</span>
          <span className="text-3xl font-extrabold playfair-display text-black">
            {price}
          </span>
        </div>

        <button className="w-full p-4 bg-[#FFC767] cursor-pointer hover:bg-[#da9c33] rounded-b-2xl font-bold">
          Lisää ostoskoriin »
        </button>
      </div>
    </div>
  );
};

export default Card;
