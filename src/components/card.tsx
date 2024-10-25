import type { FC } from "react";

interface CardProps {
  image: string;
  subTitle: string;
  title: string;
  price: string;
}

const Card: FC<CardProps> = ({ image, price, subTitle, title }) => {
  return (
    <div className="w-full h-[600px]   flex flex-col  justify-between">
      <div className="w-full flex flex-col   gap-y-2">
        <img src={image} className="rounded-t-2xl h-[260px] w-full" />
        <span className="text-[#757575]">2006.tammi</span>
      </div>
      <div className="h-[340px] flex flex-col   justify-between gap-y-2   w-full">
        <div className="w-full h-fit my-2">
          <span className="text-lg ">{subTitle}</span>
          <p className="text-xl font-bold playfair-display">{title}</p>
        </div>

        <div className="w-full h-fit flex flex-col gap-y-2 my-2  mt-auto">
          <span className="text-[#757575]">Sidottu</span>
          <span className="text-[#757575]">Käytetty - erinomainen (K4)</span>
          <span className="text-3xl font-bold playfair-display text-black">
            {price}
          </span>
        </div>

        <button className="w-full p-4 bg-[#67BDFF] cursor-pointer hover:bg-[#4ba8f0] rounded-b-2xl font-bold">
          Lisää ostoskoriin »
        </button>
      </div>
    </div>
  );
};

export default Card;
