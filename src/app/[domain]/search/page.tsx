import { getBooksAction } from "@/lib/actions/product.action";
import ClientPage from "./client-page";

const SearchPage = async () => {
  const [books] = await Promise.all([getBooksAction()]);

  console.log("this is the data we are getting");
  console.log(books);

  if (!books) {
    return (
      <div className="w-full h-screen">
        <h2 className="text-3xl font-bold">this page is not completed yet</h2>
      </div>
    );
  }

  return <ClientPage books={[books[0]]} />;
};

export default SearchPage;
