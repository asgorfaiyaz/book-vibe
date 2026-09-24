import { Banner } from "@/components/home-page/Banner";
import BookList from "@/components/home-page/BookList";
import { Suspense } from "react";

function Home() {
  return (
    <>
      <Banner />
      <Suspense fallback={<h1>Loading ...</h1>}>
        <BookList />
      </Suspense>
    </>
  );
}

export default Home;
