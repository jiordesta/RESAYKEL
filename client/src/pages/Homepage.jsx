import React, { useEffect, useState } from "react";
import Footer from "../sections/Footer";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { useDispatch } from "react-redux";
import { fetch_user, signout } from "../redux/reducers/user_slice";
import Burger from "../components/Burger";
import { error, success } from "../redux/reducers/notification_slice";

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
          <div className="flex justify-between items-center w-full">
            <div className="w-full cursor-pointer text-xl font-semibold">
              RESAYKEL
            </div>
            <Burger />
          </div>
          <div className="nav-menu w-full hidden md:flex justify-start md:justify-end">
            <div className="w-full xm:w-3/4 sm:w-1/2 md:w-full flex justify-start md:justify-end items-center gap-1">
              <div className="relative flex">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-10 pr-4 rounded-lg focus:outline-none bg-color1 bg-opacity-5 placeholder:text-color1 py-1"
                />
                <span className="absolute inset-y-0 left-0 flex items-center">
                  <img src="/icons/search.svg" width={30} height={30} alt="" />
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
        </div>
      </section>
    );
  };

  const Content = () => {
    return <section className="min-h-screen"></section>;
  };

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex flex-col justify-center items-center">
          <Loading h={75} w={75} text="loading" />
        </div>
      ) : (
        <div className="px-2 xm:px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64">
          <Header />
          <Content />
          <Footer />
        </div>
      )}
    </>
  );
}
