import type { FC } from "react";
import MaxWidthWrapper from "../max-width-wrapper";
import Link from "next/link";
import { ShoppingCard } from "../shopping-cart";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

const Header: FC = ({}) => {
  return (
    <>
      <div className="w-full h-[70px] fixed  top-0  z-[10]">
        <div className="w-full min-h-[70px] h-fit bg-white shadow ">
          <MaxWidthWrapper className="h-[70px]  flex w-full items-center justify-between gap-2">
            <div className="h-full flex-grow flex flex-wrap items-center justify-start gap-4">
              <Link href={"/"} className="font-bold text-2xl text-green-500">
                Amazing
              </Link>
              {[
                "ETUSIVU",
                "AIHEALUEET",
                "OSTAMME",
                "MESSUKALENTERI",
                "MYYNTIPISTEET",
                "TOIMITUSEHDOT",
              ].map((item) => {
                return (
                  <Link
                    key={item}
                    href={"/"}
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      "font-extrabold  hidden md:block"
                    )}
                  >
                    {item}
                  </Link>
                );
              })}
            </div>
            <ShoppingCard />
          </MaxWidthWrapper>
        </div>
      </div>
    </>
  );
};

export default Header;
