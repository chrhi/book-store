import type { FC } from "react";
import Card from "./card";
import { DATA } from "@/data";

const ProductReel: FC = ({}) => {
  return (
    <div className="w-full my-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 grid md:grid-cols-4  2xl:grid-cols-6  min-h-[600px] h-fit  gap-4">
      {DATA.map((item) => {
        return (
          <Card
            key={item.image}
            image={item.image}
            price={item.price}
            subTitle={item.subtitle}
            title={item.title}
            date={item.date}
          />
        );
      })}
    </div>
  );
};

export default ProductReel;
