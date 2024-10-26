import FilterSidebar from "@/components/filter";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import type { FC } from "react";

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

          {/* cards components */}
          <div className="w-full  flex-grow  h-[400px] "></div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Page;
