import React, { useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Card,
  Typography,
} from "@material-tailwind/react";
function DropdownMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuItems = [
    {
      title: "@material-tailwind/html",
      description:
        "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
    },
    {
      title: "@material-tailwind/react",
      description:
        "Learn how to use @material-tailwind/react, packed with rich components for React.",
    },
    {
      title: "Material Tailwind PRO",
      description:
        "A complete set of UI Elements for building faster websites in less time.",
    },
  ];
  const triggers = {
    onMouseEnter: () => setOpenMenu(true),
    onMouseLeave: () => setOpenMenu(false),
  };

  return (
    <>
      <Menu open={openMenu} handler={setOpenMenu}>
        <MenuHandler>
          <Button
            {...triggers}
            variant="text"
            color="blue-gray"
            className="flex  items-center gap-3  font-normal  ">
            Technology{" "}
          </Button>
        </MenuHandler>
        <MenuList
          {...triggers}
          className="hidden w-[24rem]   overflow-visible lg:grid">
          <ul className="flex w-full flex-col gap-1">
            {menuItems.map(({ title, description }) => (
              <a href="#" key={title}>
                <MenuItem>
                  <Typography variant="h6" color="blue-gray" className="mb-1">
                    {title}
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal">
                    {description}
                  </Typography>
                </MenuItem>
              </a>
            ))}
          </ul>
        </MenuList>
      </Menu>
    </>
  );
}
export default DropdownMenu;
