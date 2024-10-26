"use client";

import type { FC } from "react";

const FilterSidebar: FC = ({}) => {
  return (
    <div className="w-[350px] min-h-[500px] h-fit flex-shrink-0">
      <div className="w-full h-[50px] rounded-2xl bg-[#F0F0F0] grid grid-cols-3 overflow-hidden">
        <button className="w-full h-full bg-[#FFC767]  border font-bold ">
          Kaikki
        </button>
        <button className="w-full h-full border font-bold ">Uudet</button>
        <button className="w-full h-full border font-bold ">Käytetyt</button>
      </div>
    </div>
  );
};

export default FilterSidebar;
