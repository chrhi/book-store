import FilterSidebar, { FilterMobile } from "@/components/filter";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import type { FC } from "react";
import {
  Select,
  SelectContent,
  //   SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SearchBookCard from "@/components/search-book-card";

const Page: FC = ({}) => {
  return (
    <>
      <MaxWidthWrapper className="my-4">
        <h2 className="text-4xl font-bold playfair-display ">Haku</h2>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="my-4 ">
        <div className="w-full min-h-screen flex h-fit items-start justify-start">
          {/* side bar filer  */}
          <FilterSidebar />

          <div className="w-full  flex-grow  min-h-[400px] h-fit ">
            <div className="w-full min-h-[300px] h-fit flex flex-col gap-y-4">
              <div className="w-full h-[100px] flex justify-between space-y-2 px-8">
                <div className="h-full w-fit">
                  <h2 className="text-5xl font-bold playfair-display ">
                    Hakutulokset
                  </h2>
                  <p>Haulla löytyi 167 tuotetta (sivu 1 / 6)</p>
                </div>

                <FilterMobile />
              </div>

              <div className="flex items-center justify-between px-8">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Tekijän mukaan" />
                  </SelectTrigger>
                  <SelectContent></SelectContent>
                </Select>

                <div className="flex gap-x-4 items-center">
                  <span>Tuloksia sivulla</span>
                  <Select>
                    <SelectTrigger className="w-[80px]">
                      <SelectValue placeholder="30" />
                    </SelectTrigger>
                    <SelectContent></SelectContent>
                  </Select>
                </div>
              </div>

              <div className="w-full h-fit flex flex-col gap-y-4 px-8">
                {[1, 3, 4, 5].map((item) => {
                  return <SearchBookCard key={item} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Page;
