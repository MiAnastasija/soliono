import navMenuData from "@/data/menu-data";
import useGlobalContext from "@/hooks/use-context";
import Link from "next/link";
import React, { useState } from "react";

const MobileMenu = () => {
  const {toggleSideMenu} = useGlobalContext()
  const [menuId, setmenuId] = useState(0);
  const [activeMenu, setActiveMenu] = useState(false);
  const openMobileMenu = (menuLabel: number) => {
    setmenuId(menuLabel);
    setActiveMenu(!activeMenu);
  };
  return (
    <>
      <ul>
        {navMenuData?.map((item) => (
          <li
            key={item?.id}
            className={
              item?.id === menuId ? "active dropdown-opened" : "active"
            }
          >
            <Link href={item?.link}>{item?.label}</Link>
            {item?.hasDropdown === true && item?.id === menuId && (
              <ul
                className="sub-menu text-left"
                style={{
                  display: item?.id === menuId && activeMenu ? "block" : "none",
                }}
              >
                {item?.subMenu?.map((itm) => (
                  <li onClick={toggleSideMenu} key={itm.id}>
                    <Link href={itm.link}> {itm.label} </Link>
                  </li>
                ))}
              </ul>
            )}
            {item?.hasDropdown === true && (
              <Link
                onClick={() => openMobileMenu(item.id)}
                className={
                  item?.id === menuId && activeMenu
                    ? "mean-expand mean-clicked"
                    : "mean-expand"
                }
                href={item?.link}
              >
                <i className="fal fa-plus"></i>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MobileMenu;
