import {
  Button,
  IconButton,
  MobileNav,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const pages = [
    { id: 1, path: "/", title: "Home" },
    { id: 2, path: "/company", title: "Company" },
    { id: 3, path: "/marketplace", title: "Marketplace" },
    { id: 4, path: "/features", title: "Features" },
    { id: 5, path: "/hero-section", title: "Hero Section" },
    { id: 6, path: "/signup", title: "Signup " },
  ];
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {pages.map(({ title, id, path }) => (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
          key={id}>
          <a href={path} className="flex items-center hover:text-blue-800">
            {title}
          </a>
        </Typography>
      ))}
      {/* <DropdownMenu /> */}
    </ul>
  );
  return (
    <div>
      <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            variant="small"
            className="mr-4 cursor-pointer py-1.5 font-normal">
            <span>Flowbite</span>
          </Typography>
          <div className="hidden lg:block">{navList}</div>
          <Button
            onClick={() => navigate("/login")}
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block">
            Login
          </Button>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}>
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          <div className="container mx-auto">
            {navList}
            <Button
              onClick={() => {
                navigate("/login");
              }}
              variant="gradient"
              size="sm"
              fullWidth
              className="mb-2">
              Login
            </Button>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default Header;
