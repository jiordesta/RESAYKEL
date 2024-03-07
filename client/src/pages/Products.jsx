import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import Footer from "../sections/Footer";

export default function Products() {
  const { name, category } = useParams();
  const [loading, setLoading] = useState(false);

  const Header = () => {
    <section>Header</section>;
  };

  const Content = () => {
    <section>Content</section>;
  };

  useEffect(() => {
    console.log(name, category);
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex flex-col justify-center items-center">
          <Loading h={75} w={75} text="loading" />
        </div>
      ) : (
        <div className="px-2 xm:px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 text-color1">
          <Header />
          <Content />
          <Footer />
        </div>
      )}
    </>
  );
}
