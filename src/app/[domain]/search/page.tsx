import FilterSidebar, { FilterMobile } from "@/components/filter";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import SearchBookCard from "@/components/search-book-card";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getBooksAction } from "@/lib/actions/product.action";

const SearchPage = async () => {
  const ITEMS_PER_PAGE = 30;
  const TOTAL_RESULTS = 167;
  const CURRENT_PAGE = 1;
  const TOTAL_PAGES = 6;

  const [books] = await Promise.all([getBooksAction()]);

  const PageHeader = () => (
    <MaxWidthWrapper className="my-4 mt-[160px] pt-16 ">
      <h2 className="text-4xl font-bold playfair-display">Haku</h2>
    </MaxWidthWrapper>
  );

  const SearchResults = () => (
    <div className="w-full h-[100px] flex justify-between space-y-2 px-4 md:px-8">
      <div className="h-full w-fit">
        <h2 className=" text-3xl md:text-5xl font-bold playfair-display">
          Hakutulokset
        </h2>
        <p>
          Haulla löytyi {TOTAL_RESULTS} tuotetta (sivu {CURRENT_PAGE} /{" "}
          {TOTAL_PAGES})
        </p>
      </div>
      <FilterMobile />
    </div>
  );

  const FilterOptions = () => (
    <div className="flex  flex-col md:flex-row items-start justify-start gap-y-2 md:items-center md:justify-between px-4 md:px-8">
      <Select>
        <SelectTrigger className="w-[380px]">
          <SelectValue placeholder="Tekijän mukaan" />
        </SelectTrigger>
        <SelectContent />
      </Select>

      <div className="flex gap-x-4 items-center">
        <span>Tuloksia sivulla</span>
        <Select>
          <SelectTrigger className="w-[80px]">
            <SelectValue placeholder={ITEMS_PER_PAGE.toString()} />
          </SelectTrigger>
          <SelectContent />
        </Select>
      </div>
    </div>
  );

  const SearchResultsList = () => (
    <div className="w-full h-fit flex flex-col gap-y-4 px-4 md:px-8">
      {books?.map((item) => (
        // @ts-expect-error this is is bad
        <SearchBookCard key={item._id.id.$oid} />
      ))}
    </div>
  );

  const MainContent = () => (
    <div className="w-full flex-grow min-h-[400px] h-fit">
      <div className="w-full min-h-[300px] h-fit flex flex-col gap-y-4">
        <SearchResults />
        <FilterOptions />
        <SearchResultsList />
      </div>
    </div>
  );

  return (
    <>
      <PageHeader />

      <MaxWidthWrapper className="my-4">
        <div className="w-full min-h-screen flex h-fit items-start justify-start">
          {/* Sidebar Filter */}
          <FilterSidebar />

          {/* Main Content */}
          <MainContent />
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default SearchPage;
