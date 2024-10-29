import type { FC } from "react";
import Card from "./book-card";
import { DATA } from "@/data";

interface ProductReelProps {
  title: string;
  desc?: string;
}

const ProductReel: FC<ProductReelProps> = ({ title, desc }) => {
  return (
    <>
      <div className="w-full my-4 h-[50px] flex items-center justify-between gap-x-4">
        <h2 className="text-black text-[40px] playfair-display text-nowrap">
          {" "}
          {title}
        </h2>

        <div className="h-[0.5px] w-full bg-black" />
      </div>

      {desc && (
        <div className="w-full h-fit ">
          <p>{desc}</p>
        </div>
      )}
      <div className="w-full h-[30px] flex items-center justify-start md:justify-end ">
        <span className="text-2xl ">Näytä kaikki</span>
      </div>
      <div className="w-full my-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 grid md:grid-cols-4  2xl:grid-cols-6  min-h-[600px] h-fit  gap-4">
        {DATA.map((item) => {
          return (
            <Card
              id={item.price}
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
    </>
  );
};

export default ProductReel;
