import type { FC } from "react";

interface CardProps {
  image: string;
  subTitle: string;
  title: string;
  price: string;
}

const Card: FC<CardProps> = ({ image, price, subTitle, title }) => {
  return (
    <div className="w-full h-[484px] flex flex-col">
      <img src={image} className="rounded-t-2xl h-[230px]" />
      <span className="text-gray-500">2006.tammi</span>
      <div className="w-full h-fit my-4">
        <span className="text-xl ">{subTitle}</span>
        <p className="text-2xl font-bold">{title}</p>
      </div>

      <div className="w-full h-fit my-4">
        <span>Sidottu</span>
        <span>Käytetty - erinomainen (K4)</span>
      </div>
      <span className="text-2xl font-bold">{price}</span>

      <button className="w-full p-4 bg-[#67BDFF] rounded-b-2xl font-bold">
        Lisää ostoskoriin »
      </button>
    </div>
  );
};

export default Card;
