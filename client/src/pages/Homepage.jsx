import React, { useEffect, useState } from "react";
import Footer from "../sections/Footer";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { useDispatch } from "react-redux";
import { fetch_user, signout } from "../redux/reducers/user_slice";
import Burger from "../components/Burger";
import { error, success } from "../redux/reducers/notification_slice";
import Image from "../components/Image";
import PhotoGalery from "../components/PhotoGalery";
import AnimationHandler from "../utilities/AnimationHandler";

export default function Homepage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSignout = () => {
    setLoading(true);
    dispatch(signout()).then((res) => {
      if (res.error) {
        dispatch(error(res.error.message));
      } else {
        dispatch(success("Signed out successfully"));
        setUser(null);
      }
      setLoading(false);
    });
  };

  const handleNavigate = (to) => {
    navigate(to);
  };

  useEffect(() => {
    setLoading(true);
    dispatch(fetch_user()).then((res) => {
      setUser(res.payload);
      setLoading(false);
    });
  }, []);

  const Header = () => {
    return (
      <section className="sticky top-0 z-40 text-xl">
        <div className="bg-white border-b border-color1 flex flex-col md:flex-row justify-between py-4">
          <AnimationHandler
            from="translate-y-[-500px] opacity-0"
            to="translate-y-[0px] transition-all ease-in-out duration-[1500ms] opacity-100"
          >
            <div className="flex justify-between items-center w-full">
              <div className="w-full cursor-pointer text-xl font-semibold">
                RESAYKEL
              </div>
              <Burger />
            </div>
          </AnimationHandler>
          <AnimationHandler
            from="translate-x-[-500px] opacity-0"
            to="translate-x-[0px] transition-all ease-in-out duration-[1500ms] opacity-100"
          >
            <div className="nav-menu w-full hidden md:flex justify-start md:justify-end">
              <div className="w-full xm:w-3/4 sm:w-1/2 md:w-full flex justify-start md:justify-end items-center gap-1">
                <div className="relative flex">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-10 pr-4 rounded-lg focus:outline-none bg-color1 bg-opacity-5 placeholder:text-color1 py-1"
                  />
                  <span className="absolute inset-y-0 left-0 pl-2 flex items-center">
                    <img
                      src="/icons/search.svg"
                      width={30}
                      height={30}
                      alt=""
                    />
                  </span>
                </div>
                {user ? (
                  <img
                    src="/icons/signout.svg"
                    width={30}
                    height={30}
                    alt=""
                    onClick={() => handleSignout()}
                  />
                ) : (
                  <img
                    src="/icons/signin.svg"
                    width={30}
                    height={30}
                    alt=""
                    onClick={() => handleNavigate("/authentication/signin")}
                  />
                )}
              </div>
            </div>
          </AnimationHandler>
        </div>
      </section>
    );
  };

  const Content = () => {
    const [showMore, setShowMore] = useState(false);
    return (
      <section className="my-4">
        <div className="flex flex-col md:flex-row gap-4 h-full">
          <div className="w-full md:w-[60%] h-full">
            <AnimationHandler
              from="translate-y-[-500px] opacity-0"
              to="translate-y-[0px] transition-all ease-in-out duration-[1500ms] opacity-100"
            >
              <PhotoGalery
                images={[
                  "/images/img1.jpg",
                  "/images/img2.jpg",
                  "/images/img3.jpg",
                  "/images/img4.jpg",
                  "/images/img5.jpg",
                  "/images/img6.jpg",
                  "/images/img7.jpg",
                ]}
              />
            </AnimationHandler>
          </div>
          <div className="w-full md:w-[40%] flex flex-col justify-center items-center">
            <AnimationHandler
              from="translate-x-[500px]"
              to="translate-x-[0px] transition-all ease-in-out duration-[2000ms]"
            >
              <h1 className="text-color3 font-bold text-4xl md:text-6xl text-start w-full">
                RESAYKEL
              </h1>
            </AnimationHandler>
            <AnimationHandler
              from="translate-x-[500px]"
              to="translate-x-[0px] transition-all ease-in-out duration-[2500ms]"
            >
              <h1 className="text-2xl font-bold text-start w-full">
                Redefining Sustainable Commerce
              </h1>
            </AnimationHandler>
            <AnimationHandler
              from="translate-x-[500px]"
              to="translate-x-[0px] transition-all ease-in-out duration-[3000ms]"
            >
              <p className="text-start w-full">
                Welcome to
                <span className="uppercase font-bold text-color3">
                  RESAYKEL
                </span>
                , an innovative e-commerce platform that revolutionizes the way
                we buy and sell recycled products.
                <span className="uppercase font-bold text-color3">
                  RESAYKEL
                </span>
                is not just a marketplace; it's a community-driven initiative
                committed to promoting sustainability and responsible
                consumerism.
              </p>
            </AnimationHandler>
            <AnimationHandler
              from="translate-x-[500px]"
              to="translate-x-[0px] transition-all ease-in-out duration-[3500ms]"
            >
              <div className="py-8 flex justify-center items-center">
                <button
                  className="border border-color1 border-dashed uppercase px-4 py-2 rounded-lg hover:bg-color1 hover:text-white transition-all ease-in-out duration-300"
                  onClick={() => {
                    if (!user) handleNavigate("/authentication/signin");
                    handleNavigate("/products/all-category/all-products");
                  }}
                >
                  get started
                </button>
              </div>
            </AnimationHandler>
          </div>
        </div>
        <div className="w-full">
          <div className="pb-4">
            <AnimationHandler
              from="translate-x-[-500px]"
              to="translate-x-[0px] transition-all ease-in-out duration-[2000ms]"
            >
              <h1 className="text-2xl uppercase font-bold">
                some of things you will find in
                <span className="font-bold text-color3"> RESAYKEL</span>
              </h1>
            </AnimationHandler>
            <AnimationHandler
              from="translate-x-[-500px]"
              to="translate-x-[0px] transition-all ease-in-out duration-[2500ms]"
            >
              <button
                className="underline text-xl"
                onClick={() => {
                  if (!user) handleNavigate("/authentication/signin");
                  handleNavigate("/products/all-category/all-products");
                }}
              >
                browse all products
              </button>
            </AnimationHandler>
          </div>
          <AnimationHandler
            from="translate-x-[-500px]"
            to="translate-x-[0px] transition-all ease-in-out duration-[3000ms]"
          >
            <ul className="grid grid-cols-1 md:grid-cols-2 lg::grid-cols-3 xl:grid-cols-4 gap-4">
              <li>
                <div className="border border-color1 border-dashed p-1 rounded-lg h-full">
                  <h1 className="bg-color1 bg-opacity-10 uppercase font-bold rounded-md text-center">
                    Tech with a Conscience
                  </h1>
                  <p className="text-center">
                    Embrace the future with our Refurbished
                    Electronics—high-quality gadgets contributing to a circular
                    economy, giving new life to pre-loved tech.
                  </p>
                </div>
              </li>
              <li>
                <div className="border border-color1 border-dashed p-1 rounded-lg h-full">
                  <h1 className="bg-color1 bg-opacity-10 uppercase font-bold rounded-md text-center">
                    Eco-Chic Homeware
                  </h1>
                  <p className="text-center">
                    Transform your space sustainably with RESAYKEL's Homeware
                    and Décor. From upcycled furniture to eco-friendly
                    accessories, style meets environmental consciousness.
                  </p>
                </div>
              </li>
              <li>
                <div className="border border-color1 border-dashed p-1 rounded-lg h-full">
                  <h1 className="bg-color1 bg-opacity-10 uppercase font-bold rounded-md text-center">
                    Green Beauty Essentials
                  </h1>
                  <p className="text-center">
                    Indulge in self-care with our Green Beauty and Personal Care
                    collection. Prioritize well-being and the planet with
                    skincare, cosmetics, and grooming essentials.
                  </p>
                </div>
              </li>
              <li>
                <div className="border border-color1 border-dashed p-1 rounded-lg h-full">
                  <h1 className="bg-color1 bg-opacity-10 uppercase font-bold rounded-md text-center">
                    Adventure Sustainably
                  </h1>
                  <p className="text-center">
                    Gear up for eco-conscious adventures with Outdoor and
                    Adventure Gear. From camping essentials to recycled sports
                    equipment, RESAYKEL has you covered for a sustainable
                    lifestyle.
                  </p>
                </div>
              </li>
              {showMore && (
                <>
                  <li>
                    <div className="border border-color1 border-dashed p-1 rounded-lg h-full">
                      <h1 className="bg-color1 bg-opacity-10 uppercase font-bold rounded-md text-center">
                        Upcycled Fashion
                      </h1>
                      <p className="text-center">
                        Uncover a unique collection of clothing and accessories
                        crafted from upcycled materials. Our fashion offerings
                        showcase creativity and style while minimizing
                        environmental impact.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="border border-color1 border-dashed p-1 rounded-lg h-full">
                      <h1 className="bg-color1 bg-opacity-10 uppercase font-bold rounded-md text-center">
                        Refurbished Electronics
                      </h1>
                      <p className="text-center">
                        Embrace cutting-edge technology with a conscience. Our
                        range of refurbished electronics provides high-quality
                        gadgets and devices, contributing to a circular economy
                        by giving new life to pre-loved tech.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="border border-color1 border-dashed p-1 rounded-lg h-full">
                      <h1 className="bg-color1 bg-opacity-10 uppercase font-bold rounded-md text-center">
                        Adventure Sustainably:
                      </h1>
                      <p className="text-center">
                        Gear up for eco-conscious adventures with Outdoor and
                        Adventure Gear. From camping essentials to recycled
                        sports equipment, RESAYKEL has you covered for a
                        sustainable lifestyle.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="border border-color1 border-dashed p-1 rounded-lg h-full">
                      <h1 className="bg-color1 bg-opacity-10 uppercase font-bold rounded-md text-center">
                        Homeware and Décor
                      </h1>
                      <p className="text-center">
                        Transform your living spaces with sustainable homeware
                        and décor. From upcycled furniture to eco-friendly home
                        accessories, RESAYKEL has curated selections that blend
                        style and environmental consciousness.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="border border-color1 border-dashed p-1 rounded-lg h-full">
                      <h1 className="bg-color1 bg-opacity-10 uppercase font-bold rounded-md text-center">
                        Green Beauty and Personal Care
                      </h1>
                      <p className="text-center">
                        Pamper yourself with our collection of green beauty and
                        personal care products. Discover skincare, cosmetics,
                        and grooming essentials that prioritize both your
                        well-being and the planet.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="border border-color1 border-dashed p-1 rounded-lg h-full">
                      <h1 className="bg-color1 bg-opacity-10 uppercase font-bold rounded-md text-center">
                        Outdoor and Adventure Gear
                      </h1>
                      <p className="text-center">
                        Pamper yourself with our collection of green beauty and
                        personal care products. Discover skincare, cosmetics,
                        and grooming essentials that prioritize both your
                        well-being and the planet.
                      </p>
                    </div>
                  </li>
                </>
              )}
            </ul>
          </AnimationHandler>
          <AnimationHandler
            from="translate-y-[-500px]"
            to="translate-y-[0px] transition-all ease-in-out duration-[3000ms]"
          >
            <div
              className="w-full flex justify-center items-center bg-black bg-opacity-5 my-4 cursor-pointer"
              onClick={() => setShowMore(!showMore)}
            >
              <img
                src={`${showMore ? "/icons/less.svg" : "/icons/more.svg"}`}
                width={40}
                alt=""
                className=""
              />
            </div>
          </AnimationHandler>
        </div>
        <div>
          <div className="h-[300px] md:h-[500px] flex justify-center items-center">
            <AnimationHandler
              from="h-[0px]"
              to="h-[300px] md:h-[500px] transition-height ease-in-out duration-[1000ms]"
            >
              <Image
                image="/images/explore.jpg"
                style="w-full h-[300px] md:h-[500px] rounded-lg"
              />
            </AnimationHandler>
          </div>
          <div className="my-4">
            <AnimationHandler
              from="translate-x-[-500px]"
              to="translate-x-[0px] transition-all ease-in-out duration-[2000ms]"
            >
              <h1 className="text-2xl font-bold">
                Explore Unique and Eco-Friendly Finds
              </h1>
            </AnimationHandler>
            <AnimationHandler
              from="translate-x-[-500px]"
              to="translate-x-[0px] transition-all ease-in-out duration-[2500ms]"
            >
              <p>
                Discover a diverse range of products, each with its own story of
                renewal. From upcycled fashion to refurbished electronics,
                RESAYKEL offers a curated selection of items that contribute to
                a circular economy. Every purchase you make on RESAYKEL is a
                step towards reducing waste and supporting sustainable
                practices.
              </p>
            </AnimationHandler>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-[40%] h-[200px] md:h-[300px]">
            <AnimationHandler
              from="h-[0px]"
              to="h-[200px] md:h-[300px] transition-height ease-in-out duration-[2000ms]"
            >
              <Image
                image="/images/join.jpg"
                style="w-full h-[200px] md:h-[300px] rounded-lg"
              />
            </AnimationHandler>
          </div>
          <div className="w-full md:w-[60%]">
            <AnimationHandler
              from="translate-x-[500px]"
              to="translate-x-[0px] transition-all ease-in-out duration-[2500ms]"
            >
              <h1 className="bg-black bg-opacity-5 py-2 text-center font-bold text-2xl">
                Join the RESAYKEL Community
              </h1>
            </AnimationHandler>
            <AnimationHandler
              from="translate-x-[500px]"
              to="translate-x-[0px] transition-all ease-in-out duration-[3000ms]"
            >
              <p>
                Be part of a community that values environmental consciousness.
                Whether you're a conscious consumer looking for eco-friendly
                alternatives or someone passionate about giving a second life to
                belongings, RESAYKEL provides a platform where like-minded
                individuals can come together.
              </p>
            </AnimationHandler>
            <AnimationHandler
              from="translate-x-[500px]"
              to="translate-x-[0px] transition-all ease-in-out duration-[3500ms]"
            >
              <div className="py-14 w-full flex justify-center items-center">
                <button
                  className="border border-color1 border-dashed uppercase px-4 py-2 rounded-lg hover:bg-color1 hover:text-white transition-all ease-in-out duration-300"
                  onClick={() => {
                    if (user)
                      handleNavigate("/products/all-category/all-products");
                    handleNavigate("/authentication/register");
                  }}
                >
                  join now!
                </button>
              </div>
            </AnimationHandler>
          </div>
        </div>
      </section>
    );
  };

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
