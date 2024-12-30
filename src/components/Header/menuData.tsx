import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Services",
    path: "/services",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Web Development",
        path: "/services/web-development",
        newTab: false,
      },
      {
        id: 22,
        title: "Mobile Development",
        path: "/services/mobile-development",
        newTab: false,
      },
      {
        id: 23,
        title: "Nearshore Development",
        path: "/services/nearshore-development",
        newTab: false,
      },
      {
        id: 24,
        title: "Product Discovery",
        path: "/services/product-discovery",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 4,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];

export default menuData;
