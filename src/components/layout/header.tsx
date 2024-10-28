import type { FC } from "react";
import MaxWidthWrapper from "../max-width-wrapper";
import Link from "next/link";

const Header: FC = ({}) => {
  return (
    <>
      <div className="w-full h-[240px] fixed  top-0 ">
        <div className="w-full h-[190px]  bg-[#FFC767] flex items-center">
          <MaxWidthWrapper className="h-full flex items-center justify-between">
            <div className=" h-[70px] w-[200px]  md:h-[117px] md:w-[367px] bg-white"></div>

            <span>Ostoskori</span>
          </MaxWidthWrapper>
        </div>
        <div className="w-full min-h-[50px] h-fit py-4  ">
          <MaxWidthWrapper className="h-full flex flex-wrap items-center justify-start gap-4">
            {[
              "ETUSIVU",
              "AIHEALUEET",
              "OSTAMME",
              "MESSUKALENTERI",
              "MYYNTIPISTEET",
              "TOIMITUSEHDOT",
            ].map((item) => {
              return (
                <Link key={item} href={"/"} className="font-extrabold ">
                  {item}
                </Link>
              );
            })}
          </MaxWidthWrapper>
        </div>
      </div>
    </>
  );
};

export default Header;
