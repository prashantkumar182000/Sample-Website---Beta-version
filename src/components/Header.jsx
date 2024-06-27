import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { fbt } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { useState, useEffect } from "react";
import ReactThemeToggleButton from "./ReactThemeToggleButton";


const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [isDark, setIsDark] = useState(localStorage.getItem("theme") === "dark");

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b ${
        isDark ? "border-n-6" : "border-light-n6"
      } lg:${
        isDark ? "bg-n-8/90" : "bg-light-bg/90"
      } lg:backdrop-blur-sm ${
        openNavigation
          ? `bg-${isDark ? "n-8" : "light-bg"}`
          : `bg-${isDark ? "n-8/90" : "light-bg/90"} backdrop-blur-sm`
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={fbt} width={190} height={40} alt="fbt" />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 ${
            isDark ? "bg-n-8/90" : "bg-light-bg/90"
          } backdrop-blur-sm lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-${
                  isDark ? "n-1" : "light-text"
                } transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? `z-2 lg:text-${isDark ? "n-1" : "light-text"}`
                    : `lg:text-${isDark ? "n-1/50" : "light-text/50"}`
                } lg:leading-5 lg:hover:text-${
                  isDark ? "n-1" : "light-text"
                } xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>

        <a
          href="#signup"
          className={`button hidden mr-8 text-${
            isDark ? "n-1/50" : "light-text/50"
          } transition-colors hover:text-${
            isDark ? "n-1" : "light-text"
          } lg:block`}
        >
          New account
        </a>
        <Button className="hidden lg:flex mr-6" href="#login">
          Sign in
        </Button>

        <div className="flex items-center space-x-4 ml-auto lg:ml-0">
          <ReactThemeToggleButton isDark={isDark} onChange={toggleTheme} />
        </div>

        <Button
          className="ml-4 lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
