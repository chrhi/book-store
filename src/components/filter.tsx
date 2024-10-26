"use client";

import { useState, type FC } from "react";

const FilterSidebar: FC = ({}) => {
  const [condition, setCondition] = useState(4);
  const [days, setDays] = useState(14);

  return (
    <div className="w-[350px] min-h-[500px] h-fit flex-shrink-0">
      <div className="w-full h-[45px] rounded-2xl bg-[#F0F0F0] grid grid-cols-3 overflow-hidden">
        <button className="w-full h-full bg-[#FFC767]  border font-bold ">
          Kaikki
        </button>
        <button className="w-full h-full border font-bold ">Uudet</button>
        <button className="w-full h-full border font-bold ">Käytetyt</button>
      </div>

      <div className="w-full min-h-[200px] h-fit my-8 rounded-2xl bg-[#F5F5F5] p-4 ">
        <div className="w-full flex flex-col gap-y-4">
          <h2 className="font-bold text-xl">Hakuehdot</h2>

          <input
            className="w-full h-[50px] rounded-lg border border-[#757575] px-4"
            placeholder="Tekijä"
          />
          <input
            className="w-full h-[50px] rounded-lg border border-[#757575] px-4"
            placeholder="Tekijä"
          />
          <input
            className="w-full h-[50px] rounded-lg border border-[#757575] px-4"
            placeholder="Tekijä"
          />
          <input
            className="w-full h-[50px] rounded-lg border border-[#757575] px-4"
            placeholder="Tekijä"
          />
        </div>
        <div className="w-full flex flex-col gap-y-4 my-4">
          <h2 className="font-bold text-xl">Tarkennettu kirjahaku</h2>

          <input
            className="w-full h-[50px] rounded-lg border border-[#757575] px-4"
            placeholder="Tekijä"
          />
          <input
            className="w-full h-[50px] rounded-lg border border-[#757575] px-4"
            placeholder="Tekijä"
          />
          <input
            className="w-full h-[50px] rounded-lg border border-[#757575] px-4"
            placeholder="Tekijä"
          />
          <input
            className="w-full h-[50px] rounded-lg border border-[#757575] px-4"
            placeholder="Tekijä"
          />
        </div>

        <div className="w-full flex flex-col gap-y-4 my-4">
          <h2 className="font-bold text-xl">Tuotteen ominaisuudet</h2>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium">
              Kuntoluokitus
            </label>
            <input
              type="range"
              min={1}
              max={5}
              value={condition}
              onChange={(e) => setCondition(Number(e.target.value))}
              className="w-full cursor-pointer bg-[#D9D9D9] h-1 accent-[#FFC767]"
            />
            <div className="flex justify-between text-sm mt-2">
              <span>K1</span>
              <span>K2</span>
              <span>K3</span>
              <span>K4</span>
              <span>K5</span>
              <span>Kaikki</span>
            </div>
          </div>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Päivärajaus</label>
          <input
            type="range"
            min={1}
            max={30}
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            className="w-full cursor-pointer  accent-[#FFC767]"
          />
          <div className="flex justify-between text-sm mt-2">
            <span>1</span>
            <span>7</span>
            <span>14</span>
            <span>30</span>
            <span>*</span>
          </div>
        </div>
      </div>

      <div className="w-full h-[80px] items-center flex flex-col gap-y-2 ">
        <button className="w-full h-[60px] bg-[#FFC767] font-bold">Hae</button>
        <span>Tyhjennä haku</span>
      </div>
    </div>
  );
};

export default FilterSidebar;
